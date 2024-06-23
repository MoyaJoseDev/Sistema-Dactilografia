// script.js
let timer;
let timeRemaining = 15; // 4 minutes in seconds 240s
let isPaused = true;

const cronometroElement = document.getElementById('cronometro');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function updateCronometro() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    cronometroElement.textContent = `${minutes}:${seconds}`;
}

function startCronometro() {
    if (isPaused) {
        isPaused = false;
        timer = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateCronometro();
            } else {
                clearInterval(timer);
                alert('¡Tiempo terminado!');
            }
        }, 1000);
    }
}

function pauseCronometro() {
    isPaused = true;
    clearInterval(timer);
}

function resetCronometro() {
    isPaused = true;
    clearInterval(timer);
    timeRemaining = 240;
    updateCronometro();
}

startButton.addEventListener('click', startCronometro);
pauseButton.addEventListener('click', pauseCronometro);
resetButton.addEventListener('click', resetCronometro);

updateCronometro();
