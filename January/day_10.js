// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

const addBinary = (a, b) => {
    const arrA = a.split("").reverse();
    const arrB = b.split("").reverse();
    let carry = 0;
    let answer = [];
    let idx = 0;
    const len = a.length > b.length ? a.length : b.length;
  
    while (idx < len) {
      const x = arrA[idx] ? +arrA[idx] : 0;
      const y = arrB[idx] ? +arrB[idx] : 0;
      const sum = carry + x + y;
      carry = Math.floor(sum / 2);
      answer.unshift(sum % 2);
      idx++;
    }
  
    if (carry > 0) answer.unshift(carry);
  
    return answer.join("");
  };
