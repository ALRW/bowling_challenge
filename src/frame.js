(function () {
   'use strict';
}());

// alternative way to make a constructor, use 'var' to reduce scope
var Frame = function() {
  this.pins = 10;
  this.knockedDownPins = [];
};

Frame.prototype = {
  getPins: function() {
    return this.pins;
  },

  getKnockedDownPins: function() {
    return this.knockedDownPins;
  },

  setKnockedDownPins: function(number) {
    this.knockedDownPins.push(number);
  },

};
