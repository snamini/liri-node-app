// var keys = require("./keys.js");
// var Twitter = require('twitter');
// var Spotify = require('spotify');
// var request = require("request");


// // ----------TWITTER--------------
// var client = new Twitter({
//   consumer_key: keys.twitterKeys.consumer_key,
//   consumer_secret: keys.twitterKeys.consumer_secret,
//   access_token_key: keys.twitterKeys.access_token_key,
//   access_token_secret: keys.twitterKeys.access_token_secret
// });

// var params = {screen_name: 'malibu_sunlife'};
// client.get('statuses/user_timeline', params, function(err, tweets, response) {
//   if (err) {
//   	console.log('Error occurred: ' + err)
//   	return false;
//   }

// 	  if (process.argv[2]==="my-tweets") {

// 	  	for (var i= 0; i< tweets.length; i++) {
// 	console.log(tweets[i].text);
// 		}
// 	};

// });

// ----------SPOTIFY--------------
 
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//   }
//         if (process.argv[2]===data) {
//         	console.log(data);
//         }

 
//     // Do something with 'data' 
// });


// ----------IMBD--------------

request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&r=json", function(error, response, body)) {

if (!error && response.statusCode === 200) {

    // Then we print out the imdbRating
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log(response);
  }

  if (process.argv[2]==="movie-this <movie name here>") {
		console.log(title);
		console.log(year);
		console.log(rating);
		console.log(country-produced);
		console.log(language);
		console.log(plot);
		console.log(actors);
		console.log(RT rating);
		console.log(RT URL);
  	} else if (process.argv[2]==="movie-this" + "") {
  		console.log(data.mrnobody)
  	}
};

// ----------do what it says-----------

fs.readFile("random.txt", "utf8", function(error, data) {

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});
