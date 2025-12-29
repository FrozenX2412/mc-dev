const toggle = document.getElementById("themeToggle");

if (localStorage.theme === "light") {
  document.body.classList.add("light");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const light = document.body.classList.contains("light");
  toggle.textContent = light ? "☀️" : "🌙";
  localStorage.theme = light ? "light" : "dark";
});

/* SERVER STATUS TOOL */
async function checkServer() {
  const input = document.getElementById("serverInput").value;
  const out = document.getElementById("serverResult");
  out.textContent = "Checking...";

  try {
    const r = await fetch(`https://api.mcsrvstat.us/3/${input}`);
    const d = await r.json();

    if (!d.online) {
      out.textContent = "❌ Server Offline";
      return;
    }

    out.textContent =
`✅ ONLINE
Players: ${d.players.online}/${d.players.max}
Version: ${d.version}
IP: ${d.ip}:${d.port}`;
  } catch {
    out.textContent = "⚠️ Error fetching data";
  }
}
