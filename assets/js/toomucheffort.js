document.addEventListener('click', toggleFullscreen);
document.addEventListener('click', toggleCursor);

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === 'j' || e.key === 'J') {
        $("#drinking").toggle();
        if (e.key === 'J') {
            $("#drinking").toggleClass("rotate");
        }
    }
    if (e.key === 'Escape') {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    if (e.key === ' ') {
        alert("you cannot jump here sadly")
    }
    if (e.shiftKey && e.ctrlKey && e.altKey && e.key === 'ScrollLock') {
        document.getElementById("combobreak").play();
        alert("the ultimate madlad\nwhy would you ever press all these???")
        setTimeout(function() { window.location = "https://google.com/search?q=grass&udm=2"; }, 750);
    }
});

function toggleCursor() {
    document.documentElement.classList.toggle('hideCursor');
}
