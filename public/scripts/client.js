/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];



const createTweetElement = function(object) {

  const $tweet = $(`<article class="article-tweet">
              <header>
                <div class="user">                    
                <img src="${object.user.avatars}"/>
                  <h5> ${object.user.name}</h5>
                </div>
                <h5> ${object.user.handle}</h5>
              </header>
              <h3> ${object.content.text}</h3>
              <footer>
                <p>${object.created_at}</p>
                <div class="images">
                  <img src="/images/flag.png">
                  <img src="/images/arrow.jpg">
                  <img src="/images/heart.jpg">
                </div>
              </footer>
            </article>`);

  $('#tweets-container').append($tweet);

};


const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    createTweetElement(tweet);
  }
};


// to add it to the page so we can make sure it's got all the right elements, classes, etc.

$(document).ready(function() {
  $('#form1').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: $("#form1").serialize(),
      success: function(response) {

      }      
    });
  });
});
