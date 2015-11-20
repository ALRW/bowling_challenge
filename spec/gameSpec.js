// describe("Game:", function() {
//   var game;
//   var player;
//   var frame;
//
//
//   describe("Stores scoring logic:", function() {
//     beforeEach(function() {
//       player = {frame:
//         { resetDefaults: function() {},
//           getKnockedDownPins: function() {
//             return [5,4];
//           },
//           getMaxPins: function() {
//             return 10;
//           }
//         }
//               };
//       game = new Game(player);
//     });
//
//     it("resets a frame", function() {
//       spyOn(player.frame, 'resetDefaults');
//       game.newFrame();
//       expect(player.frame.resetDefaults).toHaveBeenCalled();
//     });
//
//     it("stores a frame's data", function() {
//       game.newFrame();
//       expect(game.getFrames()).toEqual([[5,4]]);
//     });
//   });
//
//   describe("Edge cases:", function() {
//     beforeEach(function() {
//       player = {frame:
//        { resetDefaults: function() {},
//         getKnockedDownPins: function() {
//         return [10];},
//         getMaxPins: function() {
//           return 10;
//         }}};
//         game = new Game(player);
//     });
//
//     it("resets a frame following a strike", function() {
//       game.newFrame();
//       expect(game.getFrames()).toEqual([[10]]);
//     });
//   });
// });
