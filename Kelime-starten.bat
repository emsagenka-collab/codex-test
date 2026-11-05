@echo off
setlocal
cd /d "%~dp0"
title Kelime - Deine Lernbibliothek
set NEXT_TELEMETRY_DISABLED=1
if exist "%~dp0..\runtime\node.exe" set "PATH=%~dp0..\runtime;%PATH%"
if exist "%~dp0..\runtime\node.exe" set "KELIME_DATA_DIR=%LOCALAPPDATA%\Kelime\data"
echo.
echo Kelime wird gestartet ...
echo Dieses Fenster bitte waehrend der Nutzung geoeffnet lassen.
echo.
where node >nul 2>nul
if errorlevel 1 goto missingnode
node -e "if (Number(process.versions.node.split('.')[0]) < 24) process.exit(1)"
if errorlevel 1 goto missingnode
where npm.cmd >nul 2>nul
if errorlevel 1 goto missingnode
if exist node_modules\next\package.json goto launch
echo Beim ersten Start werden die benoetigten Pakete installiert.
echo Dafuer wird eine Internetverbindung benoetigt. Bitte etwas Geduld.
call npm.cmd ci --no-audit --no-fund
if errorlevel 1 goto failed
:launch
start "" /b node scripts\open-browser.cjs
call npm.cmd run dev -- --port 3000
if errorlevel 1 goto failed
goto end
:missingnode
echo Bitte zuerst Node.js 24 LTS oder neuer von https://nodejs.org installieren.
echo Danach diese Startdatei erneut oeffnen.
pause
exit /b 1
:failed
echo.
echo Der Start hat nicht geklappt. Bitte die Fehlermeldung oben mitteilen.
echo Falls Kelime bereits laeuft: das andere Kelime-Fenster verwenden.
pause
exit /b 1
:end
pause
