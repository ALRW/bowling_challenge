describe("Game:", function() {
  var game;
  var player;
  var frame;

  beforeEach(function() {
    player = {frame:
      { resetDefaults: function() {},
        getKnockedDownPins: function() {
        return [5,4];
        }
      }
            };
    game = new Game(player);
  });

  describe("Stores scoring logic:", function() {
    it("resets a frame", function() {
      spyOn(player.frame, 'resetDefaults');
      game.newFrame();
      expect(player.frame.resetDefaults).toHaveBeenCalled();
    });

    it("stores a frame's data", function() {
      game.newFrame();
      expect(game.getFrames()).toEqual([[5,4]]);
    });

  });
});
