
const $input = $('#tweet-text');
let $counter = $('.counter').val();



let count = 0;
$(document).ready(() => {
  $input.on('keyup', function() {

    const tweetLength = $(this).val().length;
    console.log('key: ' , $(this).val());
    $('.counter').removeClass('red');
  
    $('.counter').val(140 - tweetLength);
    if (tweetLength >= 140) {
      $('.counter').addClass('red');
    }

  });
});