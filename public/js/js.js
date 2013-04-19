
jQuery.prototype.jsRacer = function(opts) {
  opts = opts || {};
  var trackLength = opts.trackLength || 10;
  var players     = opts.players || 2;
  var keys        = opts.keys || [16, 13];

  

  // MODEL!
  var keyMap          = {16: 0, 13: 1};
  var positions       = {0: 0, 1: 0};
  var winner          = null;

  
  // VIEW!
  var view = this;
  view.paint = function(){
    for(var i = 0; i < players; i++){
      this.append($('<ul>'));
      for(var j = 0; j < trackLength; j++){
        this.children().last().append($('<li>'));
      }
    }
  }

  view.updatePosition = function(){
    this.find('li').removeClass('active');
    for(var i = 0; i < players; i ++){
      console.log(i, positions[i])
      this.children().eq(i).children().eq([positions[i]]).addClass('active');
    }
  }

  //CONTROLLER!
  view.paint();
  view.updatePosition();
  
  $(document).on('keyup', function(event) {
    var key = event.which;
    var player = keyMap[key];
    positions[player] += 1;

    if (positions[player] >= trackLength) {
      winner = player;
      // stop the game somehow and eat juice
    }

    view.updatePosition();

  });

  this.reset = function(){
    positions = 0;
    winner = null;
  }


  return this;
}



$(document).ready(function() {
  var foo = $('.race-track').jsRacer({
    trackLength: 20
  });
});