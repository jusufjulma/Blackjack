




var card1 = { suit: "clubs", value: "Q" }
var card2 = { suit: "clubs", value: "K" }
var card3 = { suit: "clubs", value: "3" }
var card4 = { suit: "clubs", value: "A" }

//var player = [card1, card2, card3, card4];
var player = [];
player.push(card1);
player.push(card2);


var x = player;
document.getElementsByClassName("start")[0].onclick = blackjackInspector(x);

function blackjackInspector(x){ // is this hand a blackjack?
  console.log("Firing INSPECTOR!!!");
  var isIt = 0; // is it Blackjack or NOT? This gets the value of given hand

  for (var i = 0; i < x.length; i++) { // this calculates the value of hand
    var playerHand = x[i];
    var playerHand = playerHand.value;
      if (playerHand == "J" || playerHand == "Q" || playerHand == "K") {
        playerHand = parseInt(10);}; // end of value conversion
    playerHand = parseInt(playerHand);
    console.log(playerHand);
    isIt = isIt + playerHand; // closes else
  }console.log(isIt); // this ends calculator and tells the value



}; // end of blackjackInspector
