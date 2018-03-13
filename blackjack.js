var deck = []; // global variable for all functions to use


function Card(suit, value) { // object constructor
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
$(".draw").click(drawCard);
$(".deal").click(firstDeal);



function shuffle(){ // this is a massively complicated super-shuffle algorithm
                    // also totally fucked
let x = 51;         // might need to be optimized
let y = 0;
let z = 0;
var shuffled = [];
for (var i = 0; i < 52; i++) {
  z = Math.floor(Math.random()*x)
  y = deck[z]
  shuffled.push(y);
  deck.splice(z, 1);
  x = x - 1;
}; console.log(shuffled); // closes for-loop, logs shuffled deck

deck = shuffled;
};  // closes shuffle function

// draw the top card and remove it from the deck
function drawCard(){ // draws first card from array
console.log(deck[0]);
deck.splice(0, 1);
console.log(deck[0]);
console.log(deck);
}; // this ends draw function

function firstDeal(){
var player = []; var dealer = [];
for (var i = 0; i < 2; i++) {
// first card goes to player
var cardhing = deck[0];  // let's select first card
player.push(cardhing);  // player array gets first card
console.log("CYKA");    // this did not help debugging
deck.splice(0, 1);      // getting rid of the dealt card

if (i == 1) { // here we make the second dealer card hidden
  var cardhing = deck[0];
  dealer.push(cardhing);  // dealer array gets hidden card
  console.log("THIS CARD IS HIDDEN!!!");
  console.log(cardhing);
  deck.splice(0, 1);      // getting rid of the dealt card
}else{                         // if ends here, hide dealer's second card
var cardhing = deck[0]; // let's select first card
dealer.push(cardhing);  // dealer array gets first card
console.log("Blyat");   // neither did this
deck.splice(0, 1);      // getting rid of the dealt card
} // end of else
} // end of for
console.log("Player got these: ");
console.log(player);
var x = player;
blackjackInspector(x);
console.log("Dealer got these: ");
console.log(dealer);
var x = dealer;
blackjackInspector(x);


}; //end of firstDeal

function blackjackInspector(x){ // is this hand a blackjack?
  console.log("Firing INSPECTOR!!!");
  var isIt = 0; // is it Blackjack or NOT? This gets the value of given hand
  for (var i = 0; i < x.length; i++) { // this calculates the value of hand
    var playerHand = x[i];
    var playerHand = playerHand.value;
    console.log(playerHand);
    isIt = isIt + playerHand;
  }console.log(isIt);
  if (isIt >= 3 && isIt <= 5  ) {
    console.log("ohaC :--D");
  }else{
    console.log("jaaha");
  }


};



























// EOF
