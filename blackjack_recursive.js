function cardCreator(suit, value) {
this.suit = suit;
this.value = value;
}

// clubs, diamonds, hearts, spades
// 0      1         2       3
let cdhs = 0;

function deckCreator() {

console.log("ASDASD");
var deck = [];

for (var i = 0; i < 13; i++) {
  deck[i] = new cardCreator(cdhs, i+1);
    if (i == 12) {
      cdhs = cdhs + 1;
      i = 0;

        if (cdhs < 4) {
          deckCreator();
          
        }break; // at this point all suites have 13 cards
      } //  this closes if i == 12
  } // this closes creator for-loop


console.log(deck);

/*var card1 = new cardCreator("C", 1)
console.log(card1);*/
}

$(".start").click(deckCreator);
