// 169. Majority Element
// Easy

// 8716

// 315

// Add to List

// Share
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function(nums){
    const obj = {}
    nums.forEach(num =>  !obj[num] ? obj[num] = 1 : obj[num]++)
    return Number(Object.keys(obj).find(key => obj[key] === Object.values(obj).reduce((initial, num) => num > initial ? num : initial, 0)))
}