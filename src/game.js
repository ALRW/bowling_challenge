(function () {
   'use strict';
}());

var frames;
var length;
var bonusScores;

function Game (player) {
  this.frames = [];
  this.bonusScores = [];
}

Game.prototype = {
  getFrames: function(){
    return this.frames;
  },
  storeScores: function(array){
    this.frames.push(array);
  },
  runningScore: function(){
    var flattened = [].concat.apply([],this.frames);
    return flattened.reduce(function(a,b) {return a + b;});
  },

  _frameLength: function(){
    return this.frames.length;
  },

  calculateBonusScore: function(){
      if (this._isStrike()) {
        this.bonusScores.push(this.frames[this._frameLength() -1][0] + this.frames[this._frameLength() -1][1]);
      }
      else if (this._isSpare()){
        this.bonusScores.push(this.frames[this._frameLength() - 1][0]);
      }
  },

  getBonusScores: function(){
    return this.bonusScores;
  },

  _isSpare: function(){
    return (this.frames[this._frameLength() - 2][0] +
      this.frames[this._frameLength() - 2][1] === 10);
  },

  _isStrike: function(){
    return (this.frames[this._frameLength() - 2][0] === 10);
  }


};
