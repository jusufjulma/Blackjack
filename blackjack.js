var deck = [];


function Card(suit, value) {
this.suit = suit;
this.value = value;
}

function deckCreator() {

var suits = ["clubs", "diamonds", "hearts", "spades"]
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < values.length; j++) {
     var card = new Card(suits[i], values[j]);
     deck.push(card);
   }
 }console.log(deck);
}

// triggers for buttons
$(".start").click(deckCreator);
$(".shuffle").click(shuffle);

function shuffle(){ // this is a massively complicated super-shuffle algorithm
for (var i = 0; i < deck.length; i++) {
  deck[i] = deck[Math.floor(Math.random()*51)]};
  console.log(deck);
}; // closes shuffle function
