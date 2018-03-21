/*   !!! SOME IMPORTANT DOCUMENTATION ABOUT SCRIPT STRUCTURE !!!

deck[] is a global variable, located on top of file
player[] and dealer[] are used to store hands
button triggers are on top of functions

Order of functions:
newGame               creates the deck and shuffles it
Card                  constructor function for cards
deckCreator           triggered by button, creates a deck
shuffled              shuffles the deck; can be used multiple times.
drawCard              draws one card; not in use at the moment
firstDeal             does the beginning deal - 2 for player, 2 for dealer
blackjackInspector    gets input from firstDeal, checks for blackjack
hit                   decides to pick one more card
stand                 decides to stay, lets dealer to draw

*/
var deck = []; // global variable for all functions to use

// triggers for buttons
//$(".start").click(deckCreator);
//$(".shuffle").click(shuffle);
//$(".draw").click(drawCard);
//$(".deal").click(firstDeal);
// jQuery is not my favourite tool

// document.getElementsByClassName("start")[0].onclick = deckCreator;
// document.getElementsByClassName("shuffle")[0].onclick = shuffle;
// document.getElementsByClassName("draw")[0].onclick = drawCard;
document.getElementsByClassName("newgame")[0].onclick = newGame;
document.getElementsByClassName("deal")[0].onclick = firstDeal;
document.getElementsByClassName("hit")[0].onclick = hit;
document.getElementsByClassName("stand")[0].onclick = stand;

function newGame(){deckCreator();shuffle();}; // creates and shuffles deck

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

var player = []; var dealer = [];   // creating arrays for player hands
function firstDeal(){
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
console.log("RETURNED VALUE The value of hand is now: " + y);
$("#score-p").html(y);

// console.log("Dealer got these: ");
var dhand = dealer[0];
dhand = dhand.value;
$("#score-d").html(dhand);
console.log(dealer);
// var x = dealer;
// blackjackInspector(x);

}; //end of firstDeal


function blackjackInspector(x){ // is this hand a blackjack?
//  console.log("Firing INSPECTOR!!!");
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

    // if (aC == 1) {
    //   console.log("Player has an ace");
    // }else if (aC == 2) {
    //   console.log("Player has TWO aces!");
    // }else if (aC == 3) {
    //     console.log("Player has T H R E E aces!");
    //   }else if (aC == 4) {
    //       console.log("Crazy man 4 aces!");}

    if (isIt == 21) {
      console.log("IT'S A BLACKJACK!");
      break;
    }else if (isIt < 21){
//      console.log("Not a blackjack yet"); // it waits for both cards to be checked

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

//    console.log("This is the sum of hand now: " + isIt);
    if (isIt == 21) {
      console.log("BLACKJACK!!!");
      break;}

  } // actually THIS ends calculation
    console.log("This is the sum of hand now: " + isIt); // this ends calculator and tells the value

y = isIt;
return y;
}; // end of blackjackInspector



var yP = 0; var yD = 0; // variables for comparing player and dealer hands

function hit(){
console.log("Hit!");
var cardhing = deck[0];  // let's select first card
player.push(cardhing);  // player array gets new card
deck.splice(0, 1);      // getting rid of the dealt card
var x = player;
blackjackInspector(x);
yP = y;
console.log("This is player hand total: " + yP);
$("#score-p").html(yP);
};

function stand(){
  yP = y;
  console.log("This is player hand total: " + yP);
  $("#score-p").html(yP);
  stand1()};

function stand1(){
console.log("Stand");
console.log("This is player hand total: " + yP);
var x = dealer;
blackjackInspector(x);
$("#score-d").html(y);
while (y < yP) {
  var cardhing = deck[0];  // let's select first card
  dealer.push(cardhing);  // dealer array gets new card
  deck.splice(0, 1);      // getting rid of the dealt card
  blackjackInspector(x);}
if (y == 21) {
  if (yP == 21){
    console.log("It's a tie!");}
  else{console.log("BLACKJACK, dealer wins.");
  $("#score-d").html(y);}
}else if (y > 21) {
  console.log("Dealer BUST, you win!");
  $("#score-d").html(y);
}
yD = y;
console.log(y);
if (y > yP) {
  if (y < 22){
  $("#score-d").html(y);
  console.log("Dealer wins.");}
}else if (y < yP) {
  $("#score-d").html(y);
  console.log("Player wins!");
}
};            // end of stand1
























// EOF
