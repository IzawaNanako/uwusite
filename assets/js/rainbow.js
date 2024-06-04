const text = document.getElementById('text');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const stringArray = ["", "what u doing?", "what u doing?", "stop it", "stop it", "i told u to stop", "u sure u wanna keep goin?"]

var clickCount = 0;

document.addEventListener('click', () => {
    if (clickCount < colors.length) {
        document.body.style.backgroundColor = colors[clickCount];
        text.innerHTML = stringArray[clickCount];
        clickCount++;
    }
    else {
        rickRoll();
    }
});

function rickRoll() {
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}