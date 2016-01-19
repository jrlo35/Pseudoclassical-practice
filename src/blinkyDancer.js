var BlinkyDancer = function(top, left, timeBetweenSteps){
  
  
  Dancer.call(this, top, left, timeBetweenSteps);

};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.$node.toggle();

}