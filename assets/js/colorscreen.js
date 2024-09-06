$(document).on('click', toggleCursor);

const comboList = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowLeft', 'ArrowRight', 'ArrowRight', 'A', 'B'];

let isKeyDown = false;
let isFocus = false;
let comboCount = 0;

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (!(isKeyDown || isFocus)) {
        if (e.key === 'Delete') {
            $('#secrets').hide();
            alert('killed all secrets\nfocus mode on.');
            isKeyDown = true;
            isFocus = true;
        }
        if (e.key === 'm' || e.key === 'M') {
            toggleFullscreen();
            toggleCursor();
            isKeyDown = true;
        }
        if (e.key === 'j' || e.key === 'J') {
            $('.drinking').toggle();
            if (e.key === 'J') {
                $('.drinking').toggleClass('rotate');
            }
            isKeyDown = true;
        }
        if (e.key === 'End') {
            $('.onetwothree').toggle();
            isKeyDown = true;
        }
        if (e.key === 'Escape') {
            loadFor(1000);
            window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            isKeyDown = true;
        }
        if (e.key === ' ') {
            alert('you cannot jump here sadly');
            isKeyDown = true;
        }
        if (e.shiftKey && e.ctrlKey && e.altKey && e.metaKey && e.key === 'ScrollLock') {
            $('#combobreak')[0].play();
            alert('the ultimate madlad\nwhy would you ever press all these???');
            setTimeout(function() {
                window.location = 'https://google.com/search?q=grass&udm=2';
            }, 750);
            loadFor(1000);
            isKeyDown = true;
        }
        if (e.key === comboList[comboCount] || ((e.key === 'a' || e.key === 'b') && comboCount >= 8)) {
            if (e.key === comboList[comboCount] || (e.key === 'a' && comboCount === 8)) {
                comboCount++;
            }
            else if ((e.key === 'B' || e.key === 'b') && comboCount === 9) {
                loadFor(2000);
                window.location = 'https://www.nyan.cat/#'; //TODO temp
            }
            else {
                comboCount = 0;
            }
            isKeyDown = true;
        }
        if (e.key === 'c' || e.key === 'C') {
            const backgroundColor = prompt('Enter a color, either common colors or in hex.\nNote: Only hex is guaranteed to work.', 'Ex. red, #000000, FFFFFF, random');
            if (backgroundColor === 'random') {
                document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            }
            else if (backgroundColor.length === 6) {
                document.body.style.backgroundColor = '#' + backgroundColor;
            }
            else {
                try {
                    document.body.style.backgroundColor = backgroundColor;
                }
                catch (error) {
                    alert('Invalid Color.');
                }
            }
            isKeyDown = true;
        }
    }
    // If you are reading this, you are cheating, fuck you, it's not funny anymore. >:(
});

document.addEventListener('keyup', (e) => {
    isKeyDown = false;
});

loadFor(2000);

function loadFor(t) {
    $('#loading-container').toggleClass('loading');
    setTimeout(function() {
      $('#loading-container').toggleClass('loading');
    }, t);
}

function toggleCursor() {
    $(document.documentElement).toggleClass('hideCursor');
}