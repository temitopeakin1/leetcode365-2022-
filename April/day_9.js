// 347. Top K Frequent Elements
// Medium

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

//solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let v of nums) {
        if(!map.has(v)) {
            map.set(v, 1);
        } else {
            map.set(v, map.get(v) + 1);
        }
    }
    
    let array = [];
    for(let [key, value] of map) {
        array.push([key, value]);
    }
    array.sort(function(a,b) {
        return b[1] - a[1];
    })
    let result = [];
    for(let i = 0; i < k; i++) {
        result.push(array[i][0]);
    }
    return result;
};
   