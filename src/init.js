$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineUpButton").on("click", function(event){
    var prevTop=$('body').height()-50;
    var prevLeft=0;
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      
      var result=dancer.lineup(20,prevTop,prevLeft)
      prevTop=result[0];
      prevLeft=result[1];
    } 
  

  });
  $('body').mouseover(function(event){
    var $target = $(event.target);
    if($target.hasClass('dancer')){
    
      var targetTop = $target.css('top');
      targetTop = parseInt(targetTop.substring(0, targetTop.length - 2));
      var targetLeft=$target.css('left');
      targetLeft = parseInt(targetLeft.substring(0, targetLeft.length -2));
      var closestDancerTop;
      var closestDancerLeft;
      var closestDistance;
      for(var i=0;i<window.dancers.length;i++){
        var dancer=window.dancers[i];
        var dancerTop=dancer.$node.css('top');
        dancerTop = parseInt(dancerTop.substring(0, dancerTop.length - 2));
        var dancerLeft=dancer.$node.css('left');
        dancerLeft = parseInt(dancerLeft.substring(0, dancerLeft.length - 2));
        if (dancerTop === targetTop && dancerLeft === targetLeft) {
          continue;
        }

        var distance= Math.sqrt(Math.pow(Math.abs(targetTop-dancerTop),2)+Math.pow(Math.abs(targetLeft-dancerLeft),2));
        if(!closestDistance){
          closestDancerTop=dancerTop;
          closestDancerLeft=dancerLeft;
          closestDistance=distance
        }
        else{
          if(distance<closestDistance){
            closestDistance=distance;
            closestDancerTop=dancerTop;
            closestDancerLeft=dancerLeft;
          }

        }   
     }
     $target.css({
      top: closestDancerTop + 20, 
      left: closestDancerLeft + 20
    });
   }
  });
  

});
