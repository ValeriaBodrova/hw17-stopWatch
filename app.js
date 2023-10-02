const display = document.getElementById('display');
const stopWatch = new StopWatch(updateDisplay);

function startStopWatch() {
    stopWatch.start();
}

function pauseStopWatch() {
    stopWatch.pause();
}

function resetStopWatch() {
    stopWatch.reset();
}

function updateDisplay(time) {
    const hours = String(time.hours).padStart(2, '0');
    const minutes = String(time.minutes).padStart(2, '0');
    const seconds = String(time.seconds).padStart(2, '0');
    
    display.textContent = `${hours}:${minutes}:${seconds}`;
}
