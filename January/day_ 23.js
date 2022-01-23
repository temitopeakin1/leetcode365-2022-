// 1291. Sequential Digits

// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

 

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]
 

// Constraints:

// 10 <= low <= high <= 10^9

// Solution

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
 var sequentialDigits = function(low, high) {
    const digits = '123456789';
    const ans = [];
    
    const minLen = low.toString().length;
    const maxLen = high.toString().length;
    
    for (let windowSize = minLen; windowSize <= maxLen; ++windowSize) {
        for (let i = 0; i + windowSize <= digits.length; ++i) {
            const num = parseInt(digits.substring(i, i + windowSize));
            
            if (num >= low && num <= high) {
                ans.push(num);
            }
        }
    }
    
    
    return ans;
};

// solution II


var sequentialDigits = function(low, high) {
    
    let l = low.toString().length,
        h = high.toString().length,
        str = "123456789",
        result = [];
      
    for (let i=l; i<=h;i++){
        for (let j=0;j<10-i;j++){
            console.log("hello")
            let num = parseInt(str.substring(j, j + i));
            if (num >= low && num <= high){
                result.push(num);
                
            }
            
        }
        
    }
    return result;

};