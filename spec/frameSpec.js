describe("Frame:", function() {
  var frame;
  var player;
  var randomNumber;

  beforeEach(function() {
    frame = new Frame();
    randomNumber = 5;
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
      frame.setKnockedDownPins(randomNumber);
      expect(frame.getKnockedDownPins()[0]).toEqual(5);
    });
    it("reduces the number of remaining pins", function(){
      frame.setKnockedDownPins(randomNumber);
      expect(frame.pins).toEqual(frame.MAX_PINS - randomNumber);
    });
    it("records a whole frame", function(){
      frame.setKnockedDownPins(randomNumber);
      frame.setKnockedDownPins(randomNumber);
      expect(frame.knockedDownPins).toEqual([5,5]);
      expect(frame.pins).toEqual(0);
    });
    it("can reset", function(){
      frame.resetDefaults();
      expect(frame.pins).toEqual(frame.MAX_PINS);
      expect(frame.knockedDownPins).toEqual([]);
    });
  });
});
