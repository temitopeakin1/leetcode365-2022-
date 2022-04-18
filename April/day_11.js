// 1260. Shift 2D Grid
// Easy

// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

// Example 1:
// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// Output: [[9,1,2],[3,4,5],[6,7,8]]
// Example 2:


// Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
// Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
// Example 3:

// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
// Output: [[1,2,3],[4,5,6],[7,8,9]]
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m <= 50
// 1 <= n <= 50
// -1000 <= grid[i][j] <= 1000
// 0 <= k <= 100

//solution 1

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */


 var shiftGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const N = [m * n];
    let arr = Array(N);
  
    // flatten the 2D grid to 1D array using conditionals
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        arr[i * n + j] = grid[i][j];
      }
    }
  
    k = k % N;
    arr = [...arr.slice(N - k), ...arr.slice(0, N - k)];
  
    // convert 1D array back to 2D grid
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        grid[i][j] = arr[i * n + j];
      }
    }
  
    return grid;
  };
  
  
  var shiftGrid = function (grid, k) {
      //Store each array length for later
      let tmp = grid[0].length;
      // flat array to insert last to first and pop last
      grid = grid.flat();
      //  last element tracker
      let last = grid[grid.length - 1];
      // Enter loop and add last element to first and delete last
      while (k) {
          grid.unshift(last);
          grid.pop();
          last = grid[grid.length - 1];
          k--;
      }
      // Answer array to change array to 2D matrix
      let answer = [];
      let container = [];
      let counter = 0;
      // Everytime container.length is fulfilled with original 2D matrix count, push
      // to answer array and reset counter to keep track
      for (let i = 0; i < grid.length; i++) {
          container.push(grid[i]);
          counter++;
          if (counter === tmp) {
              answer.push(container);
              container = [];
              counter = 0;
          }
      }
      return answer;
  };
