const time = new Date();
const hour = -3600 * (time.getHours() % 12);
const mins = -60 * time.getMinutes();
app.style.setProperty("--dm", `${mins}s`)
app.style.setProperty("--dh", `${hour+mins}s`)