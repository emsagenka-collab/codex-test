# Cross-platform fixture test: downloads, npm and Windows process APIs are mocked.
# This checks update/backup/rollback behavior without accessing real user data.
$ErrorActionPreference = 'Stop'
$testRoot = Join-Path ([IO.Path]::GetTempPath()) ('kelime-update-test-' + [Guid]::NewGuid().ToString('N'))
$updater = Join-Path $PSScriptRoot '../scripts/update-windows.ps1'
$global:fixture = Join-Path $testRoot 'fixture.zip'
$global:starts = 0
$global:running = $false
function Invoke-WebRequest { param([switch]$UseBasicParsing, [string]$Uri, [string]$OutFile) Copy-Item -LiteralPath $global:fixture -Destination $OutFile }
function Get-NetTCPConnection { [CmdletBinding()] param([int]$LocalPort,[string]$State) if ($global:running) { [PSCustomObject]@{LocalPort=3000} } }
function Start-Process { param($FilePath,$ArgumentList,$WorkingDirectory) $global:starts++ }
function Move-Item { param([string]$LiteralPath,[string]$Destination)
 if ($global:scenario -eq 'swap-failure' -and (Split-Path $LiteralPath -Leaf) -eq 'new-version') { throw 'Simulated swap failure' }
 Microsoft.PowerShell.Management\Move-Item -LiteralPath $LiteralPath -Destination $Destination
}
function Assert($condition,$message) { if (-not $condition) { throw $message } }
try {
    $source=Join-Path $testRoot 'source/new-version'
    New-Item -ItemType Directory -Path $source -Force | Out-Null
    Set-Content -LiteralPath (Join-Path $source 'package.json') -Value '{"name":"kelime","version":"new"}'
    Set-Content -LiteralPath (Join-Path $source 'package-lock.json') -Value '{}'
    Set-Content -LiteralPath (Join-Path $source 'Kelime-starten.bat') -Value "@echo off`nrem Updated launcher"
    Compress-Archive -Path (Join-Path $testRoot 'source/*') -DestinationPath $global:fixture
    foreach ($scenario in @('success','npm-failure','app-running','swap-failure')) {
        $global:starts=0
        $global:scenario=$scenario
        $global:running=$scenario -eq 'app-running'
        $env:LOCALAPPDATA=Join-Path $testRoot $scenario
        $env:ComSpec='/bin/true'
        $root=Join-Path $env:LOCALAPPDATA 'Kelime'
        $app=Join-Path $root 'app'
        $runtime=Join-Path $root 'runtime'
        $data=Join-Path $root 'data'
        New-Item -ItemType Directory -Path $app,$runtime,$data,(Join-Path $app 'data') -Force | Out-Null
        Set-Content -LiteralPath (Join-Path $app 'package.json') -Value '{"name":"kelime","version":"old"}'
        Set-Content -LiteralPath (Join-Path $app 'custom.txt') -Value 'user modification'
        Set-Content -LiteralPath (Join-Path $app '.env.local') -Value 'KEEP_CONFIG=yes'
        Set-Content -LiteralPath (Join-Path $data 'kelime.sqlite') -Value 'learning progress'
        Set-Content -LiteralPath (Join-Path $data 'kelime.sqlite-wal') -Value 'wal content'
        Set-Content -LiteralPath (Join-Path $app 'data/legacy.sqlite') -Value 'legacy data'
        Set-Content -LiteralPath (Join-Path $runtime 'node.exe') -Value 'mock runtime'
        $exitCode=0
        if ($scenario -eq 'npm-failure') { $exitCode=1 }
        Set-Content -LiteralPath (Join-Path $runtime 'npm.cmd') -Value "#!/bin/sh`nexit $exitCode" -NoNewline
        & chmod +x (Join-Path $runtime 'npm.cmd')
        & $updater -Revision ('a' * 40)
        Assert ((Get-Content (Join-Path $data 'kelime.sqlite') -Raw).Trim() -eq 'learning progress') 'Live data changed'
        Assert ((Get-Content (Join-Path $data 'kelime.sqlite-wal') -Raw).Trim() -eq 'wal content') 'WAL changed'
        $version=(Get-Content (Join-Path $app 'package.json') -Raw | ConvertFrom-Json).version
        if ($scenario -eq 'success') {
            Assert ($version -eq 'new') 'New app not installed'
            Assert ($global:starts -eq 1) 'App not launched'
            Assert ((Get-Content (Join-Path $app '.env.local') -Raw).Trim() -eq 'KEEP_CONFIG=yes') 'Local settings lost'
            Assert (Test-Path (Join-Path $app 'data/legacy.sqlite')) 'Legacy data lost'
            $backup=Get-ChildItem (Join-Path $root 'backups') -Directory | Select-Object -First 1
            Assert (Test-Path (Join-Path $backup.FullName 'app/custom.txt')) 'Custom files not preserved'
            Assert (Test-Path (Join-Path $backup.FullName 'data/kelime.sqlite-wal')) 'Backup incomplete'
        } else {
            Assert ($version -eq 'old') 'Failed update changed installed app'
            Assert (Test-Path (Join-Path $app 'custom.txt')) 'Failed update lost files'
            Assert ($global:starts -eq 0) 'Failed update started app'
        }
        Write-Host "PASS: $scenario"
    }
} finally {
    if (Test-Path $testRoot) { Remove-Item -LiteralPath $testRoot -Recurse -Force }
}
