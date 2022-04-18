// 923. 3Sum With Multiplicity
// Medium
// Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.

// As the answer can be very large, return it modulo 109 + 7.

 

// Example 1:

// Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
// Output: 20
// Explanation:
// Enumerating by the values (arr[i], arr[j], arr[k]):
// (1, 2, 5) occurs 8 times;
// (1, 3, 4) occurs 8 times;
// (2, 2, 4) occurs 2 times;
// (2, 3, 3) occurs 2 times.
// Example 2:

// Input: arr = [1,1,2,2,2,2], target = 5
// Output: 12
// Explanation:
// arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
// We choose one 1 from [1,1] in 2 ways,
// and two 2s from [2,2,2,2] in 6 ways.
// Example 3:

// Input: arr = [2,1,3], target = 6
// Output: 1
// Explanation: (1, 2, 3) occured one time in the array so we return 1.
 

// Constraints:

// 3 <= arr.length <= 3000
// 0 <= arr[i] <= 100
// 0 <= target <= 300

//solution

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var threeSumMulti = function(arr, target) {
    const map = new Array()
    
    const factorial = num => {
      let sum = BigInt(1)
      for (let i = num; i > 0; i--) {
        sum *= BigInt(i)
      }
      return sum
    }
    
    // combination
    const c = (n, m) => {
      return factorial(n) / (factorial(m) * factorial(n - m))
    }
    
    for (let i = 0; i < arr.length; i++) {
      if (map[arr[i]]) {
        map[arr[i]]++
      } else {
        map[arr[i]] = 1
      }
    }
    let sum = BigInt(0)
    for (let i = 0; i < map.length; i++) {
      for (let j = i; j < map.length; j++) {
        const k = target - i - j
        if (map[i] && map[j] && map[k] && k >= j && k >= i) {
          if (i === k && j === k) {
            sum += map[i] >= 3 ? c(map[i], 3) : 0n
          } else if (i === j) {
            sum += map[i] >= 2 ? c(map[i], 2) * BigInt(map[k]) : 0n
          } else if (i === k) {
            sum += map[i] >= 2 ? c(map[i], 2) * BigInt(map[j]) : 0n
          } else if (j === k) {
            sum += map[j] >= 2 ? c(map[j], 2) * BigInt(map[i]) : 0n
          } else {
            sum += BigInt(map[i] * map[j] * map[k])
          }
        }
      }
    }
    
    return Number(sum) % (10 ** 9 + 7)
  };