document.getElementById('fullscreen-overlay').addEventListener('click', toggleFullscreen);

const elem = document.documentElement;

let fullscreen = false;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
    else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
    else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
}

function toggleFullscreen() {
    if (fullscreen) {
        closeFullscreen();
    }
    else {
        openFullscreen();
    }
    fullscreen = !fullscreen;
}