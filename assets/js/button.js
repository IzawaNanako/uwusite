const button = document.getElementById('my-button');

let clickCount=0;
let clickTimer;

startTimer();

button.addEventListener('click', function() {
    button.innerText = `Clicked ${++clickCount} times!`;
    restartTimer();
});

function startTimer() {
    clickTimer = window.setTimeout(function() {
        clickStopped(clickCount);
    }, 1500);
}

function stopTimer() {
    window.clearTimeout(clickTimer);
}

function restartTimer() {
    stopTimer();
    startTimer();
}

function clickStopped(clicksRecorded) {
    switch (clicksRecorded) {
        case 10:
            window.location.href = '../../calculator';
            break;
        case 20:
            window.location.href = '../../colorscreen';
            break;
        case 30:
            window.location.href = '../../matrixrain';
            break;
        case 40:
            window.location.href = '../../rainbow';
            break;
        case 50:
            window.location.href = '../../slippery';
            break;
        default:
            break;
    }
}

// You know I understand not knowing what the hell is going on is frustrating, but come on, that's the point of the whole site,
// you ruined everything, fuck you.