// 704. Binary Search(Easy)


// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// solution 1:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var search = function(nums, target) {
	//initialize left and right pointers
    let l = 0, r = nums.length-1;
    while(l <= r){
		//find the middle for each iteration of the while loop since we know the array is sorted
        let middle = Math.floor((l + r) / 2);
		//check if the target number is in the first or second half of the array
		//return the left or right pointer if equals target
        if(target >= nums[middle]){
            l = middle;
            if(nums[l] === target){
                return l;
            }
            if(nums[r] === target){
                return r;
            }
            else{
                l++;
                r--;
            }
        }
        if(target < nums[middle]){
            r = middle - 1;
            if(nums[r] === target){
                return r;
            }
            if(nums[l] === target){
                return l;
            }
            else{
                l++;
                r--;
            }
        }
    }
	//return -1 if not in array
    return -1;
};