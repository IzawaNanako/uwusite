$(document).on('click', toggleFullscreen);
$(document).on('click', toggleCursor);

var isKeyDown = false;
var isFocus = false;
var comboCount = 0;

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (!isKeyDown && !isFocus) {
        if (e.key === 'Delete') {
            $("#secrets").hide();
            alert("killed all secrets\nfocus mode on.")
            isKeyDown = true;
            isFocus = true;
        }
        if (e.key === 'm' || e.key === 'M') {
            toggleFullscreen();
            toggleCursor();
            isKeyDown = true;
        }
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
            loadFor(1000);
            window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            isKeyDown = true;
        }
        if (e.key === ' ') {
            alert("you cannot jump here sadly")
            isKeyDown = true;
        }
        if (e.shiftKey && e.ctrlKey && e.altKey && e.metaKey && e.key === 'ScrollLock') {
            $("#combobreak")[0].play();
            alert("the ultimate madlad\nwhy would you ever press all these???")
            setTimeout(function() {
                window.location = "https://google.com/search?q=grass&udm=2";
            }, 750);
            loadFor(1000);
            isKeyDown = true;
        }
        if (e.key === 'ArrowUp') {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'ArrowUp') {
                    comboCount = 1;
                }
            })
        }
        if (e.key === 'ArrowUp' && comboCount == 1) {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'ArrowUp') {
                    comboCount = 2;
                }
            })
        }
        if (e.key === 'ArrowDown' && comboCount == 2) {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'ArrowDown') {
                    comboCount = 3;
                }
            })
        }
        if (e.key === 'ArrowDown' && comboCount == 3) {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'ArrowDown') {
                    comboCount = 4;
                }
            })
        }
        if (e.key === 'ArrowLeft' && comboCount == 4) {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'ArrowLeft') {
                    comboCount = 5;
                }
            })
        }
        if (e.key === 'ArrowLeft' && comboCount == 5) {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'ArrowLeft') {
                    comboCount = 6;
                }
            })
        }
        if (e.key === 'ArrowRight' && comboCount == 6) {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'ArrowRight') {
                    comboCount = 7;
                }
            })
        }
        if (e.key === 'ArrowRight' && comboCount == 7) {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'ArrowRight') {
                    comboCount = 8;
                }
            })
        }
        if ((e.key === 'A' || e.key === 'a') && comboCount == 8) {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'A' || e.key === 'a') {
                    comboCount = 9;
                }
            })
        }
        if ((e.key === 'B' || e.key === 'b') && comboCount == 9) {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'B' || e.key === 'b') {
                    loadFor(2000);
                    //temp
                    window.location = "https://www.nyan.cat/#";
                }
            })
            isKeyDown = true;
        }
    }
    // If you are reading this, you are cheating, fuck you, it's not funny anymore. >:(
});

document.addEventListener('keyup', (e) => {
    if (isKeyDown == true) {
        comboCount = 0;
    }
    isKeyDown = false;
});

loadFor(2000);

function loadFor(t) {
    $("#loading-container").toggleClass("loading");
    setTimeout(function() {
      $("#loading-container").toggleClass("loading");
    }, t);
}

function toggleCursor() {
    $(document.documentElement).toggleClass('hideCursor');
}