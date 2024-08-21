$(document).on('click', toggleFullscreen);
$(document).on('click', toggleCursor);

var isKeyDown = false;

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (!isKeyDown) {
        if (e.key === 'j' || e.key === 'J') {
            $(".drinking").toggle();
            if (e.key === 'J') {
                $(".drinking").toggleClass("rotate");
            }
            isKeyDown = true;
        }
        if (e.key === 'End') {
            $(".onetwothree").toggle();
            isKeyDown = true;
        }
        if (e.key === 'Escape') {
            $("#loading-container").toggleClass("loading");
            window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            isKeyDown = true;
        }
        if (e.key === ' ') {
            alert("you cannot jump here sadly")
            isKeyDown = true;
        }
        if (e.shiftKey && e.ctrlKey && e.altKey && e.key === 'ScrollLock') {
            $("#loading-container").toggleClass("loading");
            $("#combobreak")[0].play();
            alert("the ultimate madlad\nwhy would you ever press all these???")
            setTimeout(function() {
                window.location = "https://google.com/search?q=grass&udm=2";
            }, 750);
            isKeyDown = true;
        }
    }
    // If you are reading this, you are cheating, fuck you, it's not funny anymore. >:(
});

document.addEventListener('keyup', (e) => {
    isKeyDown = false;
});

$("#loading-container").toggleClass("loading");
setTimeout(function() {
  $("#loading-container").toggleClass("loading");
}, 2000);

function toggleCursor() {
    $(document.documentElement).toggleClass('hideCursor');
}