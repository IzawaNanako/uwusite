const button = document.getElementById('my-button');

var clickCount=0;
var clickTimer;

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
            window.location.href = "assets/html/matrixrain.html";
            break;
        case 20:
            window.location.href = "assets/html/blkscn.html";
            break;
        case 30:
            window.location.href = "assets/html/whtscn.html";
            break;
        case 40:
            window.location.href = "assets/html/rainbow.html";
            break;
        case 50:
            window.location.href = "assets/html/eropic.html";
        default:
            break;
    }
}