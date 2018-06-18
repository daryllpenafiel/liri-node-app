require("dotenv").config();

var request = require("request");
var userChoice = process.argv[2];
var userSpecific = process.argv[3];

//OMDB
var omdbqueryUrl = "http://www.omdbapi.com/?t=" + encodeURI(userSpecific) + "&y=&plot=short&apikey=trilogy";

//TWITTER
var Twitter = require("twitter");
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var params = {
    screen_name: 'dpendpen'
} && {
    count: 20
};

//SPOTIFY
var Spotify = require("node-spotify-api");
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

//SWITCH STATEMENT
switch (userChoice) {
    case "my-tweets":
        client.get('statuses/user_timeline', params, function (error, tweets) {
            if (!error) {
                for (i = 0; i < tweets.length; i++) {
                    console.log("date created: " + tweets[i].created_at);
                    console.log("tweet: " + tweets[i].text);
                    console.log("------------------------------------");
                }
            } else {
                console.log(error);
            }
        });
        break;

    case "movie-this":
        if (!userSpecific) {
            userSpecific = "Mr.Nobody";
        } else {
            userSpecific = process.argv[3];
        };
        request(omdbqueryUrl, function (error, response, body) {
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country where movie was produced: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot:\n " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        })
        break;

    case "s":
        spotify.search({
            type: 'track',
            query: encodeURI(userSpecific)
        }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                for (i=0; i<3; i++) { //I chose to display only 3 results
                    console.log("Artist: " + data.tracks.items[i].album.artists[0].name);//artist
                    console.log("Song Name: " + data.tracks.items[i].name);//song name
                    console.log("Album: " + data.tracks.items[i].album.name);//album
                    console.log("Preview of song: " + data.tracks.items[i].preview_url)//preview link of song from spotify
                    console.log("---------------------------------");//separator
                }
            }
        });
        break;
}

/*
case "do-what-it-says":
//code
break;
*/