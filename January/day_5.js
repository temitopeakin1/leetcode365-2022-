// Palindrome Partitioning

// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.


var partition = function(s) {
 
    const result = [];
    const len=s.length;
    const partitioning = (curList,curIndex) => {  
        if(curIndex >= len){ result.push(curList); return; } 
        for(let i=curIndex; i<len; i++){
            let currentSubstr = s.substring(curIndex, i+1);
            if(isPalindrome(currentSubstr)){             
                partitioning([...curList,currentSubstr], i+1);
            }
        }  
    }
    
    partitioning([],0);
    return result;
}

function isPalindrome(str){
    let start = 0;
    let end = str.length - 1;
    while(start < end){
            if(str.charAt(start) != str.charAt(end)) return false;
            start++;
            end--;
    }
    return true;
}