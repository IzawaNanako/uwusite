var clickCount=0;

document.getElementById('my-button').addEventListener('click', function() {
    document.getElementById('my-button').innerText = `Clicked ${++clickCount} times!`;
  });

if (clickCount >= 10) {
    //jump to another page
    window.location.href = "https://lauderwimberton.github.io/";
}