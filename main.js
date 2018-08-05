var quotes = [
    {quote:'For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move',image:'img/cat1.jpg'},
    {quote:'Adventure is worthwhile',image:'img/cat2.jpeg'},
    {quote:'Traveling – it leaves you speechless, then turns you into a storyteller',image:'img/cat3.jpg'},
    {quote:'We travel, some of us forever, to seek other places, other lives, other souls',image:'img/cat4.jpg'},
    {quote:'A journey is best measured in friends, rather than miles',image:'img/cat5.jpg'}
];

var mainButton = document.querySelector('button');

function clickRandom() {
    mainButton.addEventListener('click', function() {
        var randomResult = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quoteResult').innerHTML = randomResult.quote;
        document.body.style.backgroundImage = "url(" + randomResult.image + ")";
    });
}

clickRandom();