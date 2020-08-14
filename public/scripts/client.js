/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const errorData = {
  "empty": "The tweet cannot be empty. Please enter few words!",
  "large": "The tweet exceeded the limit number of 140 characters, try again?"
};

//Function to prevent fix vulnerabily of XSS
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Function to add the error message
const createError = function(object, key) {

  const $error = $(`<h4 class="error">${object[key]}</h4>`);

  $('.error').replaceWith($error);

};


// Function to return the time elapsed since the creation of the tweet
const dateDiff = function(date) {
  const dateLong = new Date(date);
  const dateISO = (dateLong.toISOString());

  return   (moment(dateISO).fromNow());
};


// Function to add one tweet object details to the tweets container

const createTweetElement = function(object) {
  const dateDifference = dateDiff(object.created_at);
  

  const $tweet = $(`<article class="article-tweet">
              <header>
                <div class="user">                    
                <img src="${object.user.avatars}"/>
                  <h5> ${object.user.name}</h5>
                </div>
                <h5> ${object.user.handle}</h5>
              </header>
              <h3>${escape(object.content.text)}</h3>
              <footer>
                <p>${dateDifference}</p>
                <div class="images">
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
                  </div>
              </footer>
            </article>`);
            


  $('#tweets-container').prepend($tweet);
 


};


//Iterate through the tweets data array to append all tweets to the container of the container
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    createTweetElement(tweet);
  }
};

//Semd the tweets to the html file
function loadTweet() {
  $.ajax({url: '/tweets', method: 'GET'})
    .then((response) => {
      renderTweets(response);
    });
}

// Waiting for the user to submit the form
//1- check if the form is emplty or have more than 140 character---> send and error
//2- if no error--> send the new tweet to the databadse (PST), and then fetch all the tweets(GET)

$(document).ready(function() {

  loadTweet();

  //check if the form is emplty or m

  $('#form1').submit(function(e) {
    e.preventDefault();
    const $input = $('#form1').find('textarea');

    if ($input.val().length === 0) {

      createError(errorData, 'empty');
      $('.error').slideDown();

    } else if ($input.val().length > 140) {
      createError(errorData, 'large');
      $('.error').slideDown();
      
    } else {

      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: $("#form1").serialize(),
        success: function(response) {
          $input.val('');

          $('#tweets-container').empty();

          loadTweet();
        }
      });
    }
  });
});


