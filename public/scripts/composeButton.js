//If the user click on the compse button in the navigation---> go to form and focus in the textarea

$(document).ready(() => {
  $('#compose').on('click', composeNew);  
});
function composeNew() {
   if ($('.new-tweet').css('display') === 'none'){ 
     $('.new-tweet').slideDown() 
     $('#tweet-text').focus()
    } else {
      $('.new-tweet').slideUp() 
    }
  }
