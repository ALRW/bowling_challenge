describe("Frame:", function() {
  var frame;
  var player;
  var number;
  
  beforeEach(function() {
    frame = new Frame();
    player = { roll: function(number) {
      return 5;
    }};
  });

  describe("initialized state", function() {
    it("starts with 10 pins", function() {
      expect(frame.getPins()).toEqual(10);
    });
    it("can store knocked down pins", function() {
      expect(frame.knockedDownPins).toEqual([]);
    });
  });

  describe("during play", function() {
    it("stores knocked down pins", function() {
      frame.setKnockedDownPins(player.roll(number));
      expect(frame.getKnockedDownPins()[0]).toEqual(5);
    });
  });
});
