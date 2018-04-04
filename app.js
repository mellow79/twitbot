console.log('The Bot is starting');

var Twit = require('twit');

var config = require('./config');
console.log(config);

var T = new Twit(config);

// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follow me
stream.on('follow', followed);

function followed(eventMsg) {
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;

}

//
//  tweet 'hello world!'
function tweetThis() {
    var tweet = {
      status: '#nosleepsouthbeach2018 Mark Lowery prevents No Sleep South Beach 2018 Weekend ' +
      'GET YOUR TICKETS NOW www.nosleepsouthbeach.com'
    };


    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
      if(err){

      } else {
        console.log("It Worked!");
      }

    }
}



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