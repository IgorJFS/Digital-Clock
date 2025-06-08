"use strict";
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const horario = `${hours}:${minutes}:${seconds}`;
    const clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.textContent = horario;
    }
    changeBackgroundBasedOnTime(parseInt(hours));
}
updateClock();
setInterval(updateClock, 1000);
function changeBackgroundBasedOnTime(hours) {
    const backgroundElement = document.getElementById('background-image');
    if (backgroundElement) {
        if (hours >= 6 && hours < 12) {
            backgroundElement.style.backgroundImage = "url('images/LondonDay.jpg')";
        }
        else if (hours >= 12 && hours < 18) {
            backgroundElement.style.backgroundImage = "url('images/LondonNoon.jpg')";
        }
        else {
            backgroundElement.style.backgroundImage = "url('images/LondonNight.jpg')";
        }
    }
}
