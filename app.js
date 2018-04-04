console.log('The Bot is starting');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follow you
stream.on('follow', followed);

function followed(eventMsg) {
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  chechFollow('.@' + screenName + ' Thanks for following us')
}

function chechFollow(txt) {
  var tweet = {
    status: txt
  };

  T.post('statuses/update', tweet, following);

  function following(err, data, response) {
    if (err) {

      console.log("Something went wrong " + err)

    }
    else {

      console.log("It Worked!");
    }

  }
}

/* set to text at intevals - this will not allow you to retweet the same text */
//setInterval(tweetThis, 1000 * 600);

/* this function will tweet the text */
function tweetThis() {

  var r = Math.floor(Math.random() * 100);
  var tweet = {
    status: '#nosleepsouthbeach2018 Mark Lowery prevents No Sleep South Beach 2018 Weekend ' +
    'GET YOUR TICKETS NOW www.nosleepsouthbeach.com'
  };

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {

    }
    else {
      console.log("It Worked!");
    }

  }
}


/* use the below code to search twitter for tweets containing the query */
/*
var params = {
  q: 'nosleepsouthbeach2018',
  count: 2
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for(var i = 0; i < tweets.length; i++){
    console.log(tweets[i].text);
  }

}
*/