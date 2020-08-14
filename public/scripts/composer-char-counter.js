

// COUNT THE NUMBER OF REMAINING CHARACTERS AND MAKE THE COUNTER RED IF IT REACHES 0

function characCount() {

  const tweetLength = $(this).val().length;
  const count = $(this).parent().find('.counter');
  $('.error').slideUp();
  //$('.error').removeClass('appear');

  count.removeClass('red');

  count.val(140 - tweetLength);

  if (tweetLength >= 140) {
    count.addClass('red');
  }

  return tweetLength;

}


//waiting for the user to end a character in the form
$(document).ready(() => {
  $('#tweet-text').on('keyup', characCount);
});

