// 59. Spiral Matrix II
// Medium
// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

// Example 1:


// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]
 

// Constraints:

// 1 <= n <= 20

//solution

/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        let inner = new Array(n);
        inner.fill(0);
        result.push(inner);
    }
    let start = 0;
    let end = n - 1;
    let top = 0;
    let bottom = n - 1;
    let value = 1;
    while (start <= end && top <= bottom) {
        for (let i = start; i <= end; i++) {
            result[top][i] = value;
            value++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result[i][end] = value ;
            value++;
        }
        end--;
        if (start <= end) {
            for (let i = end; i >= start; i--) {
                result[bottom][i] = value ;
                value++;
            }
            bottom--;
        }
        if (top <= bottom) {
            for (let i = bottom; i >= top; i--) {
                result[i][start] = value;
                value++;
            }
            start++;
        }
    }
    return result;
};