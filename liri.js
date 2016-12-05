var keys = require("./keys.js");
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require("request");


var command = process.argv[2];
var question = "";
for(var i = 3; i < process.argv.length; i++) {
    question += process.argv[i]+" ";
}
console.log(question);

// ----------TWITTER--------------
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

if (command==="twitter") {
	var params = {screen_name: 'malibu_sunlife'};
	client.get('statuses/user_timeline', params, function(err, tweets, response) {
	  
	  if (err) {
	  	console.log('Error occurred: ' + err)
	  	return false;
	  }

		

		  	for (var i= 0; i< tweets.length; i++) {
		console.log(tweets[i].text);
			}
	});
	

};


// // ----------SPOTIFY--------------
 if (command==="spotify") {
		spotify.search({ type: 'track', query: question }, function(err, data) {
		    if ( err ) {
		        console.log('Error occurred: ' + err);
		        return;
		  }

		  // * This will show the following information about the song in your terminal/bash window
					
    
    // * Artist(s)
					console.log("Artist: " + data.tracks.items[0].artists[0].name);

    // * The song's name
    				console.log("Name: " + data.tracks.items[0].name);
    // * A preview link of the song from Spotify
					console.log("Preview Link: " + data.tracks.items[0].preview_url);

    // * The album that the song is from

		        	console.log("Album: " + data.tracks.items[0].album.name);

		 
		    // Do something with 'data' 
		});
};

// ----------IMBD--------------


if (command==="movie-this") {

	request('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&r=json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body); // Show the HTML for the Google homepage. 
     var moviedata = JSON.parse(body);

//      * This will output the following information to your terminal/bash window:

//     * Title of the movie.
console.log(moviedata.Title);
//     * Year the movie came out.
console.log(moviedata.Year);
//     * IMDB Rating of the movie.
console.log(moviedata.Rated);
//     * Country where the movie was produced.
console.log(moviedata.Country);
//     * Language of the movie.
console.log(moviedata.Language);
//     * Plot of the movie.
console.log(moviedata.Plot);
//     * Actors in the movie.
console.log(moviedata.Actors);
//     * Rotten Tomatoes Rating.
console.log(moviedata.imdbRating);
//     * Rotten Tomatoes URL.
// console.log(moviedata.URL);

// * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//     * If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
//     * It's on Netflix!


  }
})



};

// // ----------do what it says-----------

// fs.readFile("random.txt", "utf8", function(error, data) {

//   // We will then print the contents of data
//   console.log(data);

//   // Then split it by commas (to make it more readable)
//   var dataArr = data.split(",");

//   // We will then re-display the content as an array for later use.
//   console.log(dataArr);

// });
