//If the user click on the compse button in the navigation---> go to form and focus in the textarea

$(document).ready(() => {
  $('#compose').on('click', composeNew);
});
function composeNew() {
  if ($('.new-tweet').css('display') === 'none') {
    $('.new-tweet').slideDown();
    $('#tweet-text').focus();
  } else {
    $('.new-tweet').slideUp();
  }
}


$(document).ready(() => {
   window.onscroll = function() {
    scrollFunction();
  };
  $('#scroll').on('click', topFunction);
});

// When the user scrolls down 100px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    $('#scroll').show(400);
  } else {
    $('#scroll').hide(400);
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}