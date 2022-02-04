// 84. Largest Rectangle in Histogram

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

// Example 1:


// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:


// Input: heights = [2,4]
// Output: 4
 

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104


/**
 * @param {number[]} heights
 * @return {number}
 */

function Stack() {
    this.vals = [];
}

Stack.prototype.pop = function () {
    return this.vals.pop();
}

Stack.prototype.peek = function () {
    return this.vals[this.vals.length - 1];
}

Stack.prototype.add = function (val) {
    this.vals.push(val)
}

var largestRectangleArea = function (heights) {
    const stack = new Stack();
    stack.add(-1);
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.peek() !== -1 && heights[stack.peek()] >= heights[i]) {
            maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack.peek() - 1))
        }
        stack.add(i);
    }

    while (stack.peek() !== -1) {
        maxArea = Math.max(maxArea, heights[stack.pop()] * (heights.length - stack.peek() - 1));
    }

    return maxArea;
};
