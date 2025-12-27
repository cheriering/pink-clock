function updateClock() {
  const now = new Date();

  const hour = now.getHours();
  const minute = now.getMinutes();

  const hourDeg = (hour % 12) * 30 + minute * 0.5;
  const minuteDeg = minute * 6;

  document.getElementById("hour").style.transform =
    `translateX(-50%) rotate(${hourDeg}deg)`;

  document.getElementById("minute").style.transform =
    `translateX(-50%) rotate(${minuteDeg}deg)`;

  const hh = String(hour).padStart(2, "0");
  const mm = String(minute).padStart(2, "0");

  document.getElementById("digital").textContent = `♡ ${hh}:${mm} ♡`;
}

updateClock();
setInterval(updateClock, 1000);
