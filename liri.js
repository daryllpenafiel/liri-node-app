require("dotenv").config();
require("twitter");
require("node-spotify-api");
var request = require("request");

var userChoice = process.argv[2];
var userSpecific = process.argv[3];
var queryUrl = "http://www.omdbapi.com/?t=" + encodeURI(userSpecific) + "&y=&plot=short&apikey=trilogy";

switch (userChoice) {
    case "my-tweets":
        //code 
        break;
    case "spotify-this song":
        //code
        break;
    case "movie-this":
        if (!userSpecific) {
            userSpecific = "Mr.Nobody";
        } else {
            userSpecific = process.argv[3];
            request(queryUrl, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log("Title: " + JSON.parse(body).Title)
                    console.log("Release Year: " + JSON.parse(body).Year);
                    console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
                    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                    console.log("Country where movie was produced: " + JSON.parse(body).Country);
                    console.log("Language: " + JSON.parse(body).Language);
                    console.log("Plot:\n " + JSON.parse(body).Plot);
                    console.log("Actors: " + JSON.parse(body).Actors);
                }
            });
        }
        break;
    case "do-what-it-says":
        //code
        break;
}