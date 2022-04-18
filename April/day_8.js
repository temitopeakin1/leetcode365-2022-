// 703. Kth Largest Element in a Stream
// Easy

// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Implement KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
//  Example 1:

// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8
// Constraints:

// 1 <= k <= 104
// 0 <= nums.length <= 104
// -104 <= nums[i] <= 104
// -104 <= val <= 104
// At most 104 calls will be made to add.
// It is guaranteed that there will be at least k elements in the array when you search for the kth element.

//solution

/**
 * @param {number} k
 * @param {number[]} nums
 */
 function binSearch(array, term, comparator = (a, b) => a - b) {
    let lo = 0;
    let hi = array.length - 1;
    while (lo <= hi) {
      let mid = Math.floor((hi + lo) / 2);
      let comp = comparator(array[mid], term);
      if (comp < 0) {
        lo = mid + 1;
      } else if (comp > 0) {
        hi = mid - 1;
      } else {
        // found, return the index
        return mid;
      }
    }
    // not found, return the index at which the value should be
    return lo;
  }
  
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  var KthLargest = function KthLargest(k, nums) {
    this.k = k;
    this.nums = [];
  
    // insert all the elements
    while (nums.length) {
      this.add(nums.pop());
    }
  };
  
  /**
   * @param {number} val
   * @return {number}
   */
  KthLargest.prototype.add = function (val) {
    const idx = binSearch(this.nums, val);
  
    // insert element
    this.nums.splice(idx, 0, val);
  
    // remove leftmost element if window is larger than k
    if (this.nums.length === this.k + 1) {
      this.nums.shift();
    }
  
    // the first element is the element at k
    // if there are less than k elements we return the closest one
    return this.nums[0];
  };
  
  /** 
   * Your KthLargest object will be instantiated and called as such:
   * var obj = new KthLargest(k, nums)
   * var param_1 = obj.add(val)
   */