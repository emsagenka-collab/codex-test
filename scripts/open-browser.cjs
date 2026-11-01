const { spawn } = require('node:child_process');
async function openWhenReady() {
  for (let attempt = 0; attempt < 120; attempt++) {
    try {
      const response = await fetch('http://localhost:3000/api/state', {
        signal: AbortSignal.timeout(2000),
      });
      if (response.ok) {
        const state = await response.json();
        if (typeof state.today === 'string' && Array.isArray(state.daily)) {
          spawn('cmd.exe', ['/c', 'start', '', 'http://localhost:3000'], {
            detached: true,
            stdio: 'ignore',
          }).unref();
          return;
        }
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  console.log('Bitte http://localhost:3000 im Browser oeffnen, sobald die App bereit ist.');
}
openWhenReady();
