// (function () {
//    'use strict';
// }());
//
// var frame;
//
// function Game (player) {
//   this.player = player || new Player(frame);
//   this.frames = [];
//   frame = this.player.frame;
//   this.FRAME_LENGTH = 2;
// }
//
// Game.prototype = {
//
//   newFrame: function() {
//     if(this.frames.length === 9) {
//     }
//     else if(this._isFrameOver) {
//       this._storeFrame();
//       frame.resetDefaults();
//   }},
//
//   getFrames: function() {
//     return this.frames;
//   },
//
//   _storeFrame: function() {
//     this.frames.push(frame.getKnockedDownPins());
//   },
//
//   _isFrameOver: function() {
//     return (frame.getKnockedDownPins()[0] === frame.getMaxPins() ||
//     frame.getKnockedDownPins().length === this.FRAME_LENGTH);
//   }
//
// };
