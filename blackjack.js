/*   !!! SOME IMPORTANT DOCUMENTATION ABOUT SCRIPT STRUCTURE !!!

deck[] is a global variable, located on top of file
player[] and dealer[] are used to store hands
button triggers are on top of functions

Order of functions:
Card          constructor function for cards
deckCreator   triggered by button, creates a deck
shuffled      shuffles the deck; can be used multiple times.
drawCard      draws one card; not in use at the moment
firstDeal     does the beginning deal - 2 for player, 2 for dealer
blackjackInspector   gets input from firstDeal, checks for blackjack

*/
var deck = []; // global variable for all functions to use

// triggers for buttons
//$(".start").click(deckCreator);
//$(".shuffle").click(shuffle);
//$(".draw").click(drawCard);
//$(".deal").click(firstDeal);
// jQuery is not my favourite tool
document.getElementsByClassName("start")[0].onclick = deckCreator;
document.getElementsByClassName("shuffle")[0].onclick = shuffle;
document.getElementsByClassName("draw")[0].onclick = drawCard;
document.getElementsByClassName("deal")[0].onclick = firstDeal;

function Card(suit, value) { // object constructor
this.suit = suit;
this.value = value;
}

function deckCreator() {

var suits = ["clubs", "diamonds", "hearts", "spades"]
var values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < values.length; j++) {
     var card = new Card(suits[i], values[j]);
     deck.push(card);
   }
 }console.log(deck);
}


function shuffle(){ // this is a massively complicated super-shuffle algorithm
                    // also totally fucked
let x = 51; let y = 0; let z = 0;  // might need to be optimized
var shuffled = [];
for (var i = 0; i < 52; i++) {
  z = Math.floor(Math.random()*x)
  y = deck[z]
  shuffled.push(y);
  deck.splice(z, 1);
  x = x - 1;
}; console.log(shuffled); // closes for-loop, logs shuffled deck

deck = shuffled; // returns shuffled cards back to deck. This allows
                 //  multiple shuffles.
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
  var aC = 0; // this variable aceChecker gets +1 if player hand has an ace
  var aU = 0; // this variable acesUsed gets +1 after ace has caused -10
  for (var i = 0; i < x.length; i++) { // this calculates the value of hand
    var playerHand = x[i];
    var playerHand = playerHand.value;
      if (playerHand == "J" || playerHand == "Q" || playerHand == "K") {
        playerHand = 10;} // end of value conversion
      if (playerHand == "A"){
        playerHand = 11;
        aC = aC + 1} // value conversion for Ace
    playerHand = parseInt(playerHand);
    console.log(playerHand);
    isIt = isIt + playerHand;

    if (aC == 1) {
      console.log("Player has an ace");
    }else if (aC == 2) {
      console.log("Player has TWO aces!");
    }else if (aC == 3) {
        console.log("Player has T H R E E aces!");
      }else if (aC == 4) {
          console.log("Crazy man 4 aces!");}

    if (isIt == 21) {
      console.log("IT'S A BLACKJACK!");
      break;
    }else if (isIt < 21){
      console.log("Not a blackjack yet");
    }else{ // meaning if isIt >21
      if (aC > 0 && aU == 0) {
        isIt = isIt - 10; aU++;}else  if (isIt >21 && aC > 1 && aU == 1){
          isIt = isIt - 10; aU++}else if (isIt >21 && aC > 2 && aU == 2){
            isIt = isIt - 10; aU++}else if (isIt >21 && aC > 3 && aU == 3){
              isIt = isIt - 10; aU++}
     else{
        console.log("It's a bust :C");
        break;
      }


    } // end of else; grater than 21

    console.log("This is the sum of hand now: " + isIt);
    if (isIt == 21) {
      console.log("BLACKJACK!!!");
      break;}

  } // actually THIS ends calculation
    console.log(isIt); // this ends calculator and tells the value

y = isIt;
return y;
}; // end of blackjackInspector



























// EOF
