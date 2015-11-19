(function () {
   'use strict';
}());

function Game (player) {
  this.player = player || new Player(frame);
  this.frames = [];
}

Game.prototype = {

  newFrame: function() {
    this._storeFrame();
    this.player.frame.resetDefaults();
  },

  getFrames: function() {
    return this.frames;
  },

  _storeFrame: function() {
    this.frames.push(this.player.frame.getKnockedDownPins());
  }

};
