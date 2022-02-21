// 560. Subarray Sum Equals K
// Medium

// 12127

// 378

// Add to List

// Share
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    if(nums === null || nums.length === 0) {
        return 0;
    }
    
    let sum = 0;
    let cumulativeSums = new Map();
    let count = 0;
    
    nums.forEach(num => {
        sum += num;
        if (sum === k) count++;
        if (cumulativeSums.has(sum - k)) count += cumulativeSums.get(sum - k);
        
        let thisCount = cumulativeSums.has(sum) ? cumulativeSums.get(sum) : 0;
        cumulativeSums.set(sum, thisCount + 1);
    })
    
    return count;
}

