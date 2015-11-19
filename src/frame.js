(function () {
   'use strict';
}());

// alternative way to make a constructor, use 'var' to reduce scope
var Frame = function() {
  this.MAX_PINS = 10;
  this.pins = this.MAX_PINS;
  this.knockedDownPins = [];
};




Frame.prototype = {
  getPins: function() {
    return this.pins;
  },

  reducePins: function(number){
    this.pins -= number;
  },

  getKnockedDownPins: function() {
    return this.knockedDownPins;
  },

  setKnockedDownPins: function(number) {
    this.knockedDownPins.push(number);
    this.reducePins(number);
  },

  resetDefaults: function(){
    this.pins = this.MAX_PINS;
    this.knockedDownPins = [];
  }
};
