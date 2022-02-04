
// 438. Find All Anagrams in a String


// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
 

// Constraints:

// 1 <= s.length, p.length <= 3 * 10^4
// s and p consist of lowercase English letters.


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    const pCharCount = p.split('').reduce((chars, next) => {
        if(!chars[next]) {
            chars[next] = 1
        } else {
            chars[next] += 1
        }
        return chars
    }, {})
    
    let leftIndex = 0
    let rightIndex = 0
    let results = []
    let windowSize = p.length
    const isAtWindowSize = (leftIndex, rightIndex, pattern) => {
        return rightIndex - leftIndex === pattern.length - 1
    }
    const decrementCharCountIf = (predicate, pCharCount, char) => {
        if(!!predicate(pCharCount, char)){
            pCharCount[char]--
        }
    }
    const incrementCharCountIf = (predicate, pCharCount, char) => {
        if(!!predicate(pCharCount, char)){
            pCharCount[char]++
        }
    }
    const isCharInPattern = (pCharCount, char) => {
        return typeof pCharCount[char] === 'number'
    }
    const isAnagram = (pCharCount) =>{
        const isZero = (num) => { return num === 0}
        
        return Object.values(pCharCount).every(isZero)
    }
    const addToResults = (results, index) => {
        results.push(index)
    }
    const createWindow = () => {
        for(rightIndex; rightIndex - leftIndex < windowSize; rightIndex++){
            decrementCharCountIf(isCharInPattern, pCharCount, s[rightIndex])
            if(isAtWindowSize(leftIndex,rightIndex,p)){
                if(isAnagram(pCharCount)){
                    addToResults(results, leftIndex)
                }
            }   
        }    
    }
    
    const moveLeftIndex = () => {
        const charAtLeftIndex = s[leftIndex]
        incrementCharCountIf(isCharInPattern, pCharCount, charAtLeftIndex)
        leftIndex += 1
    }
    const moveRightIndex = () => {
        const charAtRightIndex = s[rightIndex]
        decrementCharCountIf(isCharInPattern, pCharCount, charAtRightIndex)
        rightIndex += 1    
    }
    const slideWindow = () => {
        while(rightIndex < s.length){
            moveLeftIndex()
            moveRightIndex()
            if(isAnagram(pCharCount)){
                addToResults(results, leftIndex)
            }        
        }
    }
    
    createWindow()
    slideWindow()
    return results
};


//Solution II

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    const l = p.length;
    const res = [];
    
    //Create map for target string => 'p';
    let map = new Map();
    for (const c of p) {
        if (!map.has(c)) map.set(c, 1);
        else map.set(c, map.get(c) + 1)
    }
    
    //Move the right edge of the 'door' until length equals to l;
    for (let i = 0; i < l; i++) {
        if (map.has(s[i])) map.set(s[i], map.get(s[i]) - 1);
    }
    
    //Check first 'door';
    if (isMatch(map)) res.push(0);
    
    //Move the 'door' to right side step by step and check;
    for (let i = l; i < s.length; i++) {
        if (map.has(s[i])) map.set(s[i], map.get(s[i]) - 1);
        if (map.has(s[i - l])) map.set(s[i - l], map.get(s[i - l]) + 1);
        if (isMatch(map)) res.push(i - l + 1);
    } 
    
    //Validation check;
    function isMatch(map) {
        for (const [k, v] of map) {
            if( v !== 0 ) return false; 
        }
        return true;
    }
    return res;
};