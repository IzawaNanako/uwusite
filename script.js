var clickCount=0;

document.getElementById('my-button').addEventListener('click', function() {
    document.getElementById('my-button').innerText = `Clicked ${++clickCount} times!`;
  });