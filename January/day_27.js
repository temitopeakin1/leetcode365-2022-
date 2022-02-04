// 421. Maximum XOR of Two Numbers in an Array

// Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.

 

// Example 1:

// Input: nums = [3,10,5,25,2,8]
// Output: 28
// Explanation: The maximum result is 5 XOR 25 = 28.
// Example 2:

// Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
// Output: 127
 

// Constraints:

// 1 <= nums.length <= 2 * 105
// 0 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */
 let findMaximumXOR = (A, max = 0) => {
    let root = {};                                 // \U0001f332 trie
    for (let x of A) {
        let xor = 0;
        let cur = root,                            // \U0001f440 current path in trie for inserting binary representation of x
            alt = root;                            // \U0001f914 alternative path for pre-existing values in trie
        for (let i = 31; 0 <= i; --i) {
            let p = 0 < (x & (1 << i)) ? 1 : 0,    // \U0001f699 direction p and opposite \U0001f697 direction q
                q = p ^ 1;
            cur = cur[p] = cur[p] || {};           // \U0001f699 add direction p to \U0001f440 current path (as needed)
            if (alt[q])
                alt = alt[q], xor ^= (1 << i);     // \U0001f697 diff direction q for \U0001f914 alternative path (\U0001f4b0 greedily take this path whenever possible)
            else
                alt = alt[p];                      // \U0001f699 same direction p for \U0001f914 alternative path
        }
        max = Math.max(max, xor);                  // \U0001f3af max xor
    }
    return max;
};