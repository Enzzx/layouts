var points = 150;
var pointsNeeded = 200;
if (points >= pointsNeeded) {
  console.log("you up a level");
} else if (points >= pointsNeeded * 0.75) {
  console.log("you only need a more bit");
} else {
  var left = pointsNeeded - points + " points";
  console.log("left more " + left + " to you up a level");
} 
