ColorDancer = function(top, left, timeBetweenSteps) {

  this.colors = ["#33cc33", "#0000ff", "#ff99ff", 
                  "#996633", "#33cccc", "#6600cc"]; 
  Dancer.call(this, top, left, timeBetweenSteps);
  

}

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var colorIndex = Math.floor(Math.random()*6);
  this.$node.animate({
    borderColor: this.colors[colorIndex]
  });

}