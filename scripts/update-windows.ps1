param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^[a-f0-9]{40}$')]
    [string]$Revision
)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$root = Join-Path $env:LOCALAPPDATA 'Kelime'
$app = Join-Path $root 'app'
$runtime = Join-Path $root 'runtime'
$work = Join-Path $root ('.update-' + [Guid]::NewGuid().ToString('N'))
$backup = Join-Path $root ('backups\' + (Get-Date -Format 'yyyyMMdd-HHmmss') + '-' + [Guid]::NewGuid().ToString('N').Substring(0,6))
$previous = Join-Path $backup 'app'
$swapped = $false

function Assert-AppStopped {
    # Never terminate unrelated Node.js processes. Ask for the app window to be closed.
    $listener = Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue
    if ($listener) { throw 'Bitte zuerst das schwarze Kelime-Startfenster schliessen und den Update-Befehl erneut einfuegen.' }
}

try {
    if (-not (Test-Path (Join-Path $app 'package.json')) -or -not (Test-Path (Join-Path $runtime 'node.exe'))) {
        throw 'Keine vorhandene Kelime-Installation gefunden. Bitte diese Meldung im Chat mitteilen.'
    }
    $package = Get-Content -LiteralPath (Join-Path $app 'package.json') -Raw | ConvertFrom-Json
    if ($package.name -ne 'kelime') { throw 'Der App-Ordner gehoert nicht zu Kelime und wird nicht veraendert.' }
    Assert-AppStopped
    Write-Host 'Kelime wird aktualisiert. Buecher und Lernfortschritt bleiben erhalten.' -ForegroundColor Green
    New-Item -ItemType Directory -Path $work -Force | Out-Null
    $archive = Join-Path $work 'update.zip'
    Invoke-WebRequest -UseBasicParsing -Uri ('https://codeload.github.com/emsagenka-collab/codex-test/zip/' + $Revision) -OutFile $archive
    Expand-Archive -LiteralPath $archive -DestinationPath (Join-Path $work 'source')
    $source = Get-ChildItem -LiteralPath (Join-Path $work 'source') -Directory | Select-Object -First 1
    if (-not $source -or -not (Test-Path (Join-Path $source.FullName 'package-lock.json'))) { throw 'Das Update ist unvollstaendig.' }
    $next = $source.FullName
    $nextPackage = Get-Content -LiteralPath (Join-Path $next 'package.json') -Raw | ConvertFrom-Json
    if ($nextPackage.name -ne 'kelime') { throw 'Der Download ist keine Kelime-Version.' }

    $env:PATH = $runtime + ';' + $env:PATH
    Push-Location $next
    try {
        & (Join-Path $runtime 'npm.cmd') ci --no-audit --no-fund
        if ($LASTEXITCODE -ne 0) { throw 'Die Update-Pakete konnten nicht installiert werden. Die bisherige App bleibt unveraendert.' }
    } finally { Pop-Location }

    # Copy local configuration and legacy in-app data; do not touch external live data.
    Get-ChildItem -LiteralPath $app -File -Force | Where-Object { $_.Name -like '.env*' -and $_.Name -ne '.env.example' } | ForEach-Object {
        Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $next $_.Name)
    }
    Assert-AppStopped
    New-Item -ItemType Directory -Path $backup -Force | Out-Null
    if (Test-Path (Join-Path $root 'data')) {
        Copy-Item -LiteralPath (Join-Path $root 'data') -Destination (Join-Path $backup 'data') -Recurse
    }
    if (Test-Path (Join-Path $app 'data')) {
        Copy-Item -LiteralPath (Join-Path $app 'data') -Destination (Join-Path $next 'data') -Recurse
    }
    $launcher = Join-Path $next 'Kelime-starten.bat'
    $launcherText = [IO.File]::ReadAllText($launcher) -replace '\r?\n', "`r`n"
    [IO.File]::WriteAllText($launcher, $launcherText, [Text.Encoding]::ASCII)

    Move-Item -LiteralPath $app -Destination $previous
    try {
        Move-Item -LiteralPath $next -Destination $app
        $swapped = $true
    } catch {
        Move-Item -LiteralPath $previous -Destination $app
        throw
    }
    Write-Host 'Fertig! Die aktualisierte App wird geoeffnet.' -ForegroundColor Green
    Write-Host ('Sicherung der bisherigen App und Daten: ' + $backup)
    Start-Process -FilePath $env:ComSpec -ArgumentList ('/c ""' + (Join-Path $app 'Kelime-starten.bat') + '""') -WorkingDirectory $app
} catch {
    Write-Host ('Update nicht abgeschlossen: ' + $_.Exception.Message) -ForegroundColor Red
    if ($swapped) { Write-Host ('Die vorherige App und die Datensicherung liegen hier: ' + $backup) }
} finally {
    if (Test-Path $work) { Remove-Item -LiteralPath $work -Recurse -Force }
}
