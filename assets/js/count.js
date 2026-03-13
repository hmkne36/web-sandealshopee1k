const el = document.getElementById("currentMillisWithMillis");

function tick() {
    const now = performance.now();
    const date = new Date();

    const time = date.toLocaleTimeString("en-US", { hour12: false });
    const ms = Math.floor(now % 1000).toString().padStart(3, "0");

    el.innerHTML = `⏰${time}.<span class="millis">${ms}</span>`;

    requestAnimationFrame(tick);
}

tick();