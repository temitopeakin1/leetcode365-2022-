// 680. Valid Palindrome II(Easy)
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(str, split = false){
    let r = str.length-1;
    for(let i=0; i < str.length / 2; i++, r--){
      if(str[i] !== str[r]){
        if(split) return false
          return validPalindrome(str.slice(i, r), true) ||
          validPalindrome(str.slice(i + 1, r + 1), true)
      }    
    }
    return true;
  };