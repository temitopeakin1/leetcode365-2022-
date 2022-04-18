// 856. Score of Parentheses(Medium)

// Given a balanced parentheses string s, return the score of the string.

// The score of a balanced parentheses string is based on the following rule:

// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.
 

// Example 1:

// Input: s = "()"
// Output: 1
// Example 2:

// Input: s = "(())"
// Output: 2
// Example 3:

// Input: s = "()()"
// Output: 2
 

// Constraints:

// 2 <= s.length <= 50
// s consists of only '(' and ')'.
// s is a balanced parentheses string.

/**
 * @param {string} s
 * @return {number}
 */
 const scoreOfParentheses = (S) => {
    let stack = [];
    for (let i = 0; i < S.length; i++) {
        if (stack.length != 0) {
            if (S[i] == '(') {
                stack.push(S[i]);
            } else {
                let l = stack[stack.length - 1];
                if (l == '(') {
                    stack.pop();
                    stack.push(1);
                } else {
                    let tmp = 0;
                    while (true) {
                        let end = stack[stack.length - 1];
                        if (end == '(') {
                            stack.pop();
                            stack.push(2 * tmp);
                            break;
                        } else {
                            tmp += end;
                            stack.pop();
                        }
                    }
                }
            }
        } else {
            stack.push(S[i]);
        }
    }
    return stack.reduce((acc, cur) => acc + cur);
};