const hour = document.querySelector('.hour-hand');
const minute = document.querySelector('.min-hand');
const second = document.querySelector('.second-hand');


function setTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minute.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hour.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setTime, 1000);
setTime();
