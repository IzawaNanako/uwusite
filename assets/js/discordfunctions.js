const id = '1241999880428191765';
const token = 'PM7g0ceu1CDF3rui9jcCDIbrAndYX8FjV8nzvMdlw6uXLNdlz7VEJfB9UogokLryhOHl';

const webhookUrl = `https://discord.com/api/webhooks/${id}/${token}`;

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

//TODO change webhook url by user.