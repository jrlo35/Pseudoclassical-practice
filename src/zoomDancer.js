

var ZoomDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.isZoomed=false;
  this.$node.addClass("zoom-dancer");

}

ZoomDancer.prototype=Object.create(BlinkyDancer.prototype);
ZoomDancer.prototype.constructor=ZoomDancer.prototype;

ZoomDancer.prototype.step = function(){
  BlinkyDancer.prototype.step.call(this);
  if(!this.isZoomed) {
    this.$node.animate({
        width: "20px",
        height: "20px",
        marginLeft: "100px"
    }, this.timeBetweenSteps);
    this.isZoomed = true;
  }
  else {
    this.$node.animate({
        width: "10px",
        height: "10px",
        marginLeft: "0px"
    }, this.timeBetweenSteps);
    this.isZoomed = false;
  }
};
