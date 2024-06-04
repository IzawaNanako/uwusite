var clickCount=0;

document.getElementById('my-button').addEventListener('click', function() {
    document.getElementById('my-button').innerText = `Clicked ${++clickCount} times!`;

    if (clickCount >= 10) {
        window.location.href = "letterrain/rain.html";
    }
  });