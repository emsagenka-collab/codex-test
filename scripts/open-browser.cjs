const { spawn } = require("node:child_process");
async function openWhenReady({
  request = fetch,
  open = () =>
    spawn("cmd.exe", ["/c", "start", "", "http://localhost:3000"], {
      detached: true,
      stdio: "ignore",
    }).unref(),
  wait = () => new Promise((resolve) => setTimeout(resolve, 1000)),
  attempts = 120,
} = {}) {
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      // Opening a browser must not trigger a full book analysis. That analysis
      // can outlast a readiness timeout and otherwise cause endless retries.
      const response = await request("http://localhost:3000/api/health", {
        signal: AbortSignal.timeout(10000),
      });
      if (response.ok) {
        const health = await response.json();
        if (health.app === "kelime" && health.ready === true) {
          open();
          return true;
        }
      }
    } catch {}
    await wait();
  }
  console.log(
    "Bitte http://localhost:3000 im Browser oeffnen, sobald die App bereit ist.",
  );
  return false;
}
module.exports = { openWhenReady };
if (require.main === module) void openWhenReady();
