


function Game(){
  this.x = "xxx";
  this.o = "ooo";
};

Game.prototype.isDiaganol = function() {
  var x = this.x;
  var o = this.o;
  return (  ($('#1').text() + $('#5').text() + $('#9').text() == x) ||
            ($('#1').text() + $('#5').text() + $('#9').text() == o) ||
            ($('#3').text() + $('#5').text() + $('#7').text() == x) ||
            ($('#3').text() + $('#5').text() + $('#7').text() == o) );
}

Game.prototype.isColumn = function() {
  var x = this.x;
  var o = this.o;
  return (($("#1").text() + $("#4").text() + $("#7").text() == x) ||
          ($("#2").text() + $("#5").text() + $("#8").text() == x) ||
          ($("#3").text() + $("#3").text() + $("#9").text() == x) ||
          ($("#1").text() + $("#4").text() + $("#7").text() == o) ||
          ($("#2").text() + $("#5").text() + $("#8").text() == o) ||
          ($("#3").text() + $("#3").text() + $("#9").text() == o) );
}

Game.prototype.isRow = function() {
  var x = this.x;
  var o = this.o;
  return (($("#1").text() + $("#2").text() + $("#3") == x) ||
          ($("#4").text() + $("#5").text() + $("#6") == x) ||
          ($("#7").text() + $("#8").text() + $("#9") == x) ||
          ($("#1").text() + $("#2").text() + $("#3") == o) ||
          ($("#4").text() + $("#5").text() + $("#6") == o) ||
           $("#7").text() + $("#8").text() + $("#9") == o) );
function checkBoard() {
    return (isDiaganol() || isColumn() || isRow());
  }

$(document).ready(function() {
 console.log( checkBoard() )
});


jQuery.prototype.ticTacToe