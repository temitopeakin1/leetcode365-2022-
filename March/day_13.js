// Valid Parenthesis (Easy)


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// solution 1:

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = s => {
    if (s.length < 1) 
        return false
    let arr = []
    let valid = false
    //loop through the array
    for (let i=0; i<s.length; i++) {
        if (s[i]==='(') arr.push(')')
            else if(s[i]==='{') arr.push('}')
                     else if(s[i]==='[') arr.push(']')
        else {
            if(arr.pop() != s[i]) { valid = false; break; }
            else valid = true
        }
    }
    return (valid && arr.length===0)
};