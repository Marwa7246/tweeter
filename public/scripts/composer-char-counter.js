
const $input = $('#tweet-text');
let $counter = $('.counter').val();

// COUNT THE NUMBER OF REMAINING CHARACTERS AND MAKE THE COUNTER RED IF IT REACHES 0

function characCount() {

  const tweetLength = $(this).val().length;
  const count = $(this).parent().find('.counter');
  count.removeClass('red');

  count.val(140 - tweetLength);

  if (tweetLength >= 140) {
    count.addClass('red');
  }

}

$(document).ready(() => {
  $input.on('keyup', characCount);
});