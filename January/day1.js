// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums.
// You are asked to burst all the balloons.
// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array,
// then treat it as if there is a balloon with a 1 painted on it.

// Return the maximum coins you can collect by bursting the balloons wisely.

 // Example 1:

// Input: nums = [3,1,5,8]
// Output: 167
// Explanation:
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
// Example 2:

// Input: nums = [1,5]
// Output: 10
 

// Constraints:

// n == nums.length
// 1 <= n <= 500
// 0 <= nums[i] <= 100

//use of dynamic programming

var maxCoins = function(nums) {
    const dp = new Array(nums.length).fill(0).map(a => new Array(nums.length).fill(0));
    
    let n = dp.length;
    
    if(!n) return 0;
    
    for(let k = 0; k < dp.length; k++) {
        let i = 0;
        let j = k;
        while(i < n) {
            for(let l = i; l < i + k+1; l++) {  
                const left = dp[i] && dp[i][l-1] || 0;
                const right = dp[l+1] && dp[l+1][j] || 0;
                const self = (nums[i-1] === undefined ? 1 : nums[i-1]) * nums[l] * (nums[j+1] === undefined ? 1 : nums[j+1]);
                dp[i][j] = Math.max(dp[i][j], left + right + self);
            }
            i++;
            j++;
        }
        n--;
    }

    return dp[0][dp[0].length-1];
    
};