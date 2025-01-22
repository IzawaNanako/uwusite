// I'm literally the admin of this server and I made this webhook in this shitty server public just cuz it's funny. It's not a leak dumbass.
let webhookUrl = `https://discord.com/api/webhooks/1241999880428191765/PM7g0ceu1CDF3rui9jcCDIbrAndYX8FjV8nzvMdlw6uXLNdlz7VEJfB9UogokLryhOHl`;

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
