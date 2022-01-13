
// 452. Minimum Number of Arrows to Burst Balloons


// Solution:
// 1: sort all points based on its commencement point
// 2: if the new balloon overlaps with the previous one(s), update the final point. 
// (If the next commencemenrt point is <= the minfinal point, that means all these points are overlapping,
// you can burst all them with one shot)


var findMinArrowShots = function(points) {
  if(points.length === 0) {
    return 0;
  }
  points.sort((a,b) => a[0]-b[0]);
  var count=0;
  var prevEnd = points[0][1];
  for(var i=1; i<points.length; i++) {
    var thisStart = points[i][0];
    var thisEnd = points[i][1];
    if(thisStart <= prevEnd) {
      prevEnd = Math.min(prevEnd, thisEnd);
    } else {
      count++;
      prevEnd = thisEnd;
    }
  }
  count++;
  return count;
};