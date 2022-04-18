// 410. Split Array Largest Sum(Hard)


// Given an array nums which consists of non - negative integers and an integer m, you can split the array into m non - empty continuous subarrays.

// Write an algorithm to minimize the largest sum among these m subarrays.

 

// Example 1:

// Input: nums = [7,2,5,10,8], m = 2
// Output: 18
// Explanation:
// There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8],
// where the largest sum among the two subarrays is only 18.
// Example 2:

// Input: nums = [1,2,3,4,5], m = 2
// Output: 9
// Example 3:

// Input: nums = [1,4,4], m = 3
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 106
// 1 <= m <= min(50, nums.length)

// solution 1:

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
 var splitArray = function(nums, m) {
    let len = nums.length;
    let max = 0;
    let sum = 0;
    for (let num of nums) {
        max = Math.max(max, num);
        sum += num;
    }
    let low = max;
    let high = sum;
    while (low < high) {
        let mid = Math.floor((high+low)/2);
        let pieces = split(nums, mid);
        if (pieces > m) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
    function split(nums, mid) {
        let pieces = 1;
        let tempSum = 0;
        for (let num of nums) {
            if (tempSum + num > mid) {
                tempSum = num;
                pieces++;
            } else {
                tempSum += num;
            }
        }
        return pieces;
    }
    
};