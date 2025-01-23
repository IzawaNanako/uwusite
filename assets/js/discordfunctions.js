// I'm literally the admin of this server and I made this webhook in this shitty server public just cuz it's funny. It's not a leak dumbass.
// Now I'm quite interested to see how fast and how these "white hats" are going to be annoy one's server over anyone else.
let webhookUrl = `https://discord.com/api/webhooks/1331806779008614483/W9apPB314wYmWezOCKITnmbOYSvm-2FVxktEiymFdmp0ypmNkGbVrpLzhT3puLimp3S1`;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        e.preventDefault();
        webhookUrl = prompt('Enter your webhook URL: ');
    }
});

$('.message-form').submit(function(event) {
  event.preventDefault();

  const message = $('.message-input').val();

  $.ajax({
    type: 'POST',
    url: webhookUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      content: message
    }),
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
      console.error(error);
    }
  });

  $('.message-input').val('');
});
