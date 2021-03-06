/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic. kj64a
*/

function handValue(hand) {
  let output = 0;
  for (var h = 0; h < hand.length; h++) {
    if (hand[h] === "K" || hand[h] === "Q" || hand[h] === "J") {
      output += 10;
    } else if (hand[h] === "A") {
      output += 1;
    } else {
      output += parseInt(hand[h]);
    }
  }
  if (hand.includes("A") && output < 12) {
    output += 10;
  }
  return output;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
