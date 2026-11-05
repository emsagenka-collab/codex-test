param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^[a-f0-9]{40}$')]
    [string]$Revision
)

# Kelime: single-user installation. No administrator privileges required.
# Downloads only from the official Node.js distribution and this project's repository.
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$root = Join-Path $env:LOCALAPPDATA 'Kelime'
$work = Join-Path ([IO.Path]::GetTempPath()) ('kelime-setup-' + [Guid]::NewGuid().ToString('N'))
$runtime = Join-Path $root 'runtime'
$app = Join-Path $root 'app'

try {
    Write-Host ''
    Write-Host 'Kelime wird eingerichtet. Das kann beim ersten Mal einige Minuten dauern.' -ForegroundColor Green
    Write-Host 'Bitte dieses Fenster offen lassen. Es werden keine Administratorrechte gebraucht.'
    New-Item -ItemType Directory -Path $root -Force | Out-Null
    New-Item -ItemType Directory -Path $work -Force | Out-Null

    if (-not (Test-Path (Join-Path $runtime 'node.exe'))) {
        Write-Host '[1/3] Sichere Node.js-Laufzeit herunterladen ...'
        $architecture = 'x64'
        if ($env:PROCESSOR_ARCHITECTURE -eq 'ARM64' -or $env:PROCESSOR_ARCHITEW6432 -eq 'ARM64') { $architecture = 'arm64' }
        $checksums = (Invoke-WebRequest -UseBasicParsing -Uri 'https://nodejs.org/dist/latest-v24.x/SHASUMS256.txt').Content
        $pattern = '^([a-fA-F0-9]{64})\s+(node-v24\.[0-9]+\.[0-9]+-win-' + $architecture + '\.zip)\s*$'
        $entry = [regex]::Match($checksums, $pattern, [Text.RegularExpressions.RegexOptions]::Multiline)
        if (-not $entry.Success) { throw 'Keine passende Node.js-Version in der offiziellen Pruefsummenliste gefunden.' }
        $filename = $entry.Groups[2].Value
        $nodeZip = Join-Path $work 'node.zip'
        Invoke-WebRequest -UseBasicParsing -Uri ('https://nodejs.org/dist/latest-v24.x/' + $filename) -OutFile $nodeZip
        if ((Get-FileHash -LiteralPath $nodeZip -Algorithm SHA256).Hash -ne $entry.Groups[1].Value) {
            throw 'Die Node.js-Pruefsumme stimmt nicht. Der Download wird nicht verwendet.'
        }
        Expand-Archive -LiteralPath $nodeZip -DestinationPath (Join-Path $work 'node')
        $extractedNode = Get-ChildItem -LiteralPath (Join-Path $work 'node') -Directory | Select-Object -First 1
        if (-not $extractedNode) { throw 'Die Node.js-Laufzeit konnte nicht entpackt werden.' }
        Move-Item -LiteralPath $extractedNode.FullName -Destination $runtime
    }

    $env:PATH = $runtime + ';' + $env:PATH
    & (Join-Path $runtime 'node.exe') -e "if(Number(process.versions.node.split('.')[0])<24)process.exit(1)"
    if ($LASTEXITCODE -ne 0) { throw 'Die vorhandene Kelime-Laufzeit ist zu alt.' }

    if (-not (Test-Path (Join-Path $app 'package.json'))) {
        Write-Host '[2/3] Kelime herunterladen ...'
        $archive = Join-Path $work 'app.zip'
        Invoke-WebRequest -UseBasicParsing -Uri ('https://codeload.github.com/emsagenka-collab/codex-test/zip/' + $Revision) -OutFile $archive
        Expand-Archive -LiteralPath $archive -DestinationPath (Join-Path $work 'source')
        $source = Get-ChildItem -LiteralPath (Join-Path $work 'source') -Directory | Select-Object -First 1
        if (-not $source -or -not (Test-Path (Join-Path $source.FullName 'package-lock.json'))) { throw 'Der App-Download ist unvollstaendig.' }
        if (Test-Path $app) { throw 'Der vorhandene App-Ordner ist unvollstaendig. Er wird zum Schutz deiner Dateien nicht ueberschrieben.' }
        Move-Item -LiteralPath $source.FullName -Destination $app
    }

    Write-Host '[3/3] App-Pakete installieren ...'
    Push-Location $app
    try {
        & (Join-Path $runtime 'npm.cmd') ci --no-audit --no-fund
        if ($LASTEXITCODE -ne 0) { throw 'Die App-Pakete konnten nicht installiert werden. Bitte die Meldung oben mitteilen.' }
    } finally { Pop-Location }

    # GitHub archives use Git's stored line endings. Make the Windows launcher CRLF.
    $launcher = Join-Path $app 'Kelime-starten.bat'
    $launcherText = [IO.File]::ReadAllText($launcher) -replace '\r?\n', "`r`n"
    [IO.File]::WriteAllText($launcher, $launcherText, [Text.Encoding]::ASCII)

    # Save a desktop shortcut for future launches, preserving user-created shortcuts.
    $desktop = [Environment]::GetFolderPath('Desktop')
    $shortcutFile = Join-Path $desktop 'Kelime.lnk'
    if (-not (Test-Path $shortcutFile)) {
        try {
            $shell = New-Object -ComObject WScript.Shell
            $shortcut = $shell.CreateShortcut($shortcutFile)
            $shortcut.TargetPath = $env:ComSpec
            $shortcut.Arguments = '/c ""' + (Join-Path $app 'Kelime-starten.bat') + '""'
            $shortcut.WorkingDirectory = $app
            $shortcut.Description = 'Kelime - Deine Lernbibliothek'
            $shortcut.Save()
        } catch {
            Write-Host ('Die Desktop-Verknuepfung konnte nicht erstellt werden. Startdatei: ' + (Join-Path $app 'Kelime-starten.bat'))
        }
    }
    Write-Host ''
    Write-Host 'Fertig! Die App startet jetzt. Der Browser oeffnet sich automatisch.' -ForegroundColor Green
    Write-Host 'Beim naechsten Mal einfach Kelime auf dem Desktop doppelt anklicken.'
    Start-Process -FilePath $env:ComSpec -ArgumentList ('/c ""' + (Join-Path $app 'Kelime-starten.bat') + '""') -WorkingDirectory $app
} catch {
    Write-Host ''
    Write-Host ('Einrichtung nicht abgeschlossen: ' + $_.Exception.Message) -ForegroundColor Red
    Write-Host 'Bitte diese Meldung im Chat mitteilen. Vorhandene Lerndaten werden nicht geloescht.'
} finally {
    if (Test-Path $work) { Remove-Item -LiteralPath $work -Recurse -Force }
}
