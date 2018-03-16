




var card1 = { suit: "clubs", value: "A" }
var card2 = { suit: "clubs", value: "A" }
var card3 = { suit: "clubs", value: "A" }
var card4 = { suit: "clubs", value: "A" }
var card5 = { suit: "clubs", value: "K" }
var card6 = { suit: "clubs", value: "7" }

//var player = [card1, card2, card3, card4];
var player = [];
player.push(card1);
player.push(card2);
player.push(card3);
player.push(card4);
player.push(card5);
player.push(card6);

console.log(player);


var x = player;
document.getElementsByClassName("start")[0].onclick = blackjackInspector(x);
console.log("RETURNED VALUE The value of hand is now: " + y);

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
