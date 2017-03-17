$(function() {
//   $('.box').click(function() {
//     $(this).text('O'); //this only selects one box if .box selects all the boxes. .text('0') sets text value. ('') without parameter will take a value
//
//   }); //end of .box click
// }); //end of document ready


//  freezing
//   $('.box').click(function() {
//     var value = $(this).text();
//     if(value === '') {
//       $(this).text('O');
//     }
//   });
// });

//make player variable
  var player = 'O';

  $('.box').click(function() {
    var value = $(this).text();
    if (value === '') { //if unoaccupied
      $(this).text(player);
      $(this).addClass('clicked');

      console.log('check win condition');
      if (playerWin2(player)) {
        console.log('beginning of condition');
        $('.status').text('Player ' + player + ' wins');
        $('.gameboard').addClass('gameover');
        console.log('check player2 condition');
      } else if (isDraw()) {
        $('.status').text('Draw');
        $('.gameboard').addClass('gameover');
        console.log('player1 condition');
      }
      //alternate the player
      console.log('change player');

      if (player === 'O') {
        player = 'X';
      } else { //assumed is X
        player = 'O';
      }
    }
  }); //end of .box click

  var isDraw = function() {
    var boadValues = $.makeArray($('.box').map(function() {
      return $(this).text();
    }));
    // console.log('isDraw: board values', boardValues);
    // return boardValues.reduce(function(isDraw, value) {
    //   return isDraw && (value !== '')
    // }, true);

    // using every:
    return boardValues.every(function(value) {
      return value.length > 0;
    });
    // Easier way:
    // return $('.box').text().length === 9;
  }; // End of isDraw

  var winnningCombos = [
    [2, 5, 8],
    [3, 4, 5],
    [0, 1, 2],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
  ];

  var playerWin2 = function(player) {
    var values = $.makeArray($('.box').map(function() {
      return $(this).text();
    }));
    // If player occuppies all 3 cells of any winning combo
    return winningCombos.some(function(combo) {
      // If all 3 cells of a combo are occupied by player
      return combo.every(function(position) {
        // If a cell is occupied by player
        return values[position] === player;
      });
    });
  };
  var playerWin = function(player){
     var cell1 = $('#1').text() === player;
     var cell2 = $('#2').text() === player;
     var cell3 = $('#3').text() === player;
     var cell4 = $('#4').text() === player;
     var cell5 = $('#5').text() === player;
     var cell6 = $('#6').text() === player;
     var cell7 = $('#7').text() === player;
     var cell8 = $('#8').text() === player;
     var cell9 = $('#9').text() === player;

     //possible wins in the game
     if (cell2 && cell5 && cell8 ||
         cell4 && cell5 && cell6 ||
         cell1 && cell5 && cell9 ||
         cell3 && cell5 && cell7 ||
         cell1 && cell2 && cell3 ||
         cell7 && cell8 && cell9 ||
         cell1 && cell4 && cell7 ||
         cell3 && cell6 && cell9) {
        return true;
     } else{
       return false;
     }
  }; // End of playerWin function

}); // End of document ready
