function updateClock(): void {
    const now: Date = new Date();
    const hours: string = now.getHours().toString().padStart(2, '0');
    const minutes: string = now.getMinutes().toString().padStart(2, '0');
    const seconds: string = now.getSeconds().toString().padStart(2, '0');
    const horario: string = `${hours}:${minutes}:${seconds}`;

    const clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.textContent = horario;
    }

    changeBackgroundBasedOnTime(parseInt(hours));
}

updateClock();
setInterval(updateClock, 1000);

function changeBackgroundBasedOnTime(hours: number): void {
    const backgroundElement = document.getElementById('background-image');

    if (backgroundElement) {
        if (hours >= 6 && hours < 12) {
            backgroundElement.style.backgroundImage = "url('images/LondonDay.jpg')";
        } else if (hours >= 12 && hours < 18) {
            backgroundElement.style.backgroundImage = "url('images/LondonNoon.jpg')";
        } else {
            backgroundElement.style.backgroundImage = "url('images/LondonNight.jpg')";
        }
    }
}