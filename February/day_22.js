// Excel sheet Column number (Easy)


// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
 

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701
 

// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].


/**
 * @param {string} columnTitle
 * @return {number}
 */
    
//     const titleToNumber = function(columnTitle) {
//         return columnTitle.split('').reduce((acc, cur, index) => acc + Math.pow(26, columnTitle.length - index-1) * (cur.charCodeAt() - 64), 0);
//     }
    
    
var titleToNumber = function(s) {
    // initialize sum and index
    let sum = 0;
    let index = 0;
    
     while (s !== "") {
        let c = s.substr(s.length - 1);

        sum += (c.charCodeAt() - 64) * Math.pow(26, index);
        s = s.substr(0, s.length - 1);
        index++
    }
    return sum;
};