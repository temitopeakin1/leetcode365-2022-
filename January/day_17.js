// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.






// solution

var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    
    if (words.length != pattern.length) return false;

    const pat_map = new Map();
    const words_map = new Map();
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const pat = pattern.charAt(i);

        if (pat_map.has(pat) && pat_map.get(pat) != word) return false;
        if (words_map.has(word) && words_map.get(word) != pat) return false;
            
        pat_map.set(pat, word);
        words_map.set(word, pat);
    }
    
    return true;
};