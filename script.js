document.getElementById('my-button').addEventListener('click', function() {
    let clickCount = 0;
    document.getElementById('my-button').innerText = `Clicked ${++clickCount} times!`;
  });