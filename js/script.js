/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sunflower","Believer","Natural","What's Up Danger",
];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
var images = [
    "https://i.ytimg.com/vi/RXWYDeGhe24/maxresdefault.jpg" , 
    "https://i.ytimg.com/vi/IhP3J0j9JmY/maxresdefault.jpg",
    "https://i.ytimg.com/vi/V5M2WZiAy6k/maxresdefault.jpg",
    "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Ff8df6f94846dc4a8f2e1b94d7abd1cb5.1000x1000x1.jpg",
    ];

var artists = ["Post Malone and Swae Lee", "Imagine Dragons", "Imagine Dragons", "Black Caviar and Blackway"];

var lengths = ["2:39","3:23","3:11","3:43"];

var links = ["https://www.youtube.com/watch?v=RXWYDeGhe24","https://www.youtube.com/watch?v=IhP3J0j9JmY","https://www.youtube.com/watch?v=V5M2WZiAy6k","https://www.youtube.com/watch?v=Y88LVU7MAe4"];
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(s) {
        $("#songs").append("<div>" + s + "</div>");
    });
     
     images.forEach(function(i) {
        $("#images").append("<img src='" + i + "'>"); 
    });
    
    artists.forEach(function(a) {
        $("#artists").append("<div>" + a + "</div>");
    });
    lengths.forEach(function(r) {
        $("#lengths").append("<div>" + r + "</div>");      
    });
    links.forEach(function(l){
        $("#links").append("<a href='>" + l + "'> Listen</a>") 
    });
}
   

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    var songName = $("#song").val();
    var imageUrl = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#links").val();

    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    lengths.push(songLength);
    links.push(link);

    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
