// function Game(){
//   this.x = "xxx";
//   this.o = "ooo";
// };

// Game.prototype.isDiaganol = function() {
//   var x = this.x;
//   var o = this.o;
//   return (  ($('#01').text() + $('#11').text() + $('#22').text() == x) ||
//             ($('#01').text() + $('#11').text() + $('#22').text() == o) ||
//             ($('#02').text() + $('#11').text() + $('#20').text() == x) ||
//             ($('#02').text() + $('#11').text() + $('#20').text() == o) );
// }

// Game.prototype.isColumn = function() {
//   var x = this.x;
//   var o = this.o;
//   return (($("#00").text() + $("#10").text() + $("#20").text() == x) ||
//           ($("#01").text() + $("#11").text() + $("#21").text() == x) ||
//           ($("#02").text() + $("#02").text() + $("#22").text() == x) ||
//           ($("#00").text() + $("#10").text() + $("#20").text() == o) ||
//           ($("#01").text() + $("#11").text() + $("#21").text() == o) ||
//           ($("#02").text() + $("#02").text() + $("#9").text() == o) );
// }

// Game.prototype.isRow = function() {
//   var x = this.x;
//   var o = this.o;
//   return (($("#00").text() + $("#01").text() + $("#02") == x) ||
//           ($("#10").text() + $("#11").text() + $("#12") == x) ||
//           ($("#20").text() + $("#21").text() + $("#22") == x) ||
//           ($("#00").text() + $("#01").text() + $("#02") == o) ||
//           ($("#10").text() + $("#11").text() + $("#12") == o) ||
//            $("#20").text() + $("#21").text() + $("#22") == o) );
// function checkBoard() {
//     return (isDiaganol() || isColumn() || isRow());
//   }

// $(document).ready(function() {
//  console.log( checkBoard() )
// });


jQuery.prototype.ticTacToe = function(opts) {
  
  // Model
  opts = opts || {}; 
  var players = opts.players || {1: "X", 2: "O"};
  //var board = [["","",""]["","",""]["","",""]];
  var winner = null;

  // View
  var view = this;
  view.createBoard = function(){
    for(var i = 0; i < 3; i++){
      this.append("<ol></ol>");
      for(var j = 0; j < 3; j++){
        this.children().eq(i).append($('<li></li>').addClass(""+i+j));
      }
    }
  }


  //Driver code
  view.createBoard();

}


$(document).ready(function(){
  $('.container').ticTacToe();
});






















