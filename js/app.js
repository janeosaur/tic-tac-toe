// sanity check
console.log("JS is linked!");

// wait for the DOM to finish loading
$(document).ready(function() {

  // define current player
var currentPlayer = 1;

  // define win possibilities array
var winPossibilities = [
  [a1, a2, a3],
  [a1, b2, c3],
  [a1, b1, c1],
  [a2, b2, c2],
  [a3, b3, c3],
  [a3, b2, c1],
  [b1, b2, b3],
  [b2, a3, c1],
  [c1, c2, c3],
  [c2, b2, a2],
]

  // define reset button function
  function resetGame() {
    $('h3').html('&nbsp')
  }
  // assign reset button to reset button function
  $('.button').on('click', resetGame);

  // define place marker function
  function placeMarker() {
    var xInPlay = [];
    var oInPlay = [];
    // make sure clicked grid is empty
    if ($(this).text() !== 'X' && $(this).text() !== 'O') {
    // alternate user turns
      if (currentPlayer%2 ===  0) {
        $(this).text('X');
        $(this).addClass('classX'); // styling of X marker
        console.log("Player X made a move at",$(this).attr('id'), ". Player O is next");
        xInPlay.push($(this).attr('id')); // *full array won't store
        console.log(xInPlay);
      } else {
        $(this).text('O');
        $(this).addClass('classO'); // styling of O marker
        console.log("Player O made a move at",$(this).attr('id'), ". Player X is next");
        oInPlay.push($(this).attr('id')); // * can't get the full array to store
        console.log(oInPlay);
      }
      currentPlayer+=1;
      } else {    // if player marks a played spot
        console.log("Player must try somewhere else");
        alert("Try somewhere else that's empty")
      }

      // checkWinner();
    }
    //   // **check to see if there's a winner
    //   function checkWinner() {
    //     var j = 1;
    //     while (j<9) {
    //       if ($('h3')[j] === winPossibilities[j]) {
    //         console.log("someone won")
    //       // } else if () {
    //       //    // no one's won, but there's space left
    //       } else {
    //         // game ends in draw
    //         console.log("No one won")
    //         alert("No one won, hit Reset to play again!")
    //       } j++;
    //     }
    // }


  // when a box is clicked, place marker
  $('h3').on('click', placeMarker);

  // game board styling
  $('.col').css('border-color', 'white');

});
