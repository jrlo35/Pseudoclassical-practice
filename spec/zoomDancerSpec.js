describe("zoomDancer", function() {

  var zoomDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    zoomDancer = new ZoomDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(zoomDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(zoomDancer.$node, 'toggle');
    zoomDancer.step();
    expect(zoomDancer.$node.toggle.called).to.be.true;
  });

  it("should have a step function that makes the size fluctuate", function() {
    sinon.spy(zoomDancer.$node, 'width');
    sinon.spy(zoomDancer.$node, 'height');
    zoomDancer.step();
    expect(zoomDancer.$node.width.called).to.be.true;
    expect(zoomDancer.$node.height.called).to.be.true;

  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(zoomDancer, "step");
      expect(zoomDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(zoomDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(zoomDancer.step.callCount).to.be.equal(2);
    });
  });
});
