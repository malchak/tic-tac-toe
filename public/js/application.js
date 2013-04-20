
jQuery.prototype.ticTacToe = function(opts) {
  

  // Model
  opts = opts || {}; 
  var players = opts.players || {"1": "O", "2": "X"};
  var board = opts.board || [[null,null,null],[null,null,null],[null,null,null]];
  var game_id = opts.game_id || 0;
  var winner = null;

  var currentPlayer = function(){
    var x = 0;
    var o = 0;
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        if (board[j][i] == "X"){x++}else{o++}
      }
    }
    if (x > o){return "2"}
    if (o > x){return "1"}
  }

  // View
  var view = this;
  view.createBoard = function(){
    for(var i = 0; i < 3; i++){
      this.append("<ol></ol>");
      for(var j = 0; j < 3; j++){
        this.children().eq(i).append($('<li><a></a></li>').addClass(""+i+j));
      }
    }
  }

  view.updatedBoard = function(){
    this.empty();
    for(var i = 0; i < 3; i++){
      this.append($('<ol></ol>'));
      for(var j = 0; j < 3; j++){
        if(board[i][j] === null){
          this.children().eq(i).append($('<li><a></a></li>').addClass(""+i+j));
        } else {
          this.children().eq(i).append($('<li></li>').text(board[i][j]).addClass(""+i+j));
        }
      }
    }
  }

  // Controller
  view.createBoard();
  view.updatedBoard();

  this.on('click', 'a', function(event){
    c = $(event.target).parent().attr("class");
    board[c.charAt(0)][c.charAt(1)] = players[currentPlayer()];
    view.changeTurn();

    $.post('/post', {board: board, game_id: game_id}, function(opts){
      var board = opts[:board];
      var game_id = opts[:game_id];
      view.updateBoard();
    });

  });

}


$(document).ready(function(){

  // $('a.play-game').on('click', function(event){
  //   event.preventDefault();

  //   $.get('/play', function(board){
    var board = [["x",null,"x"],[null,"o",null],[null,"o",null]];
    var game_id = game_id;

    $('.game-container').ticTacToe({board: board, game_id: game_id});

  $.post('/post'{})


}); 

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





















