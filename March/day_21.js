// 763. Partition Labels(Medium)


// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

 

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(S) {
    let map = new Map()
    let maxSoFar = -1
    let count = 0
    let res = []
	//Find last seen index for all the unique letters
    for(let i=0;i<S.length;i++){
        if(map.has(S.charAt(i))){
            map.set(S.charAt(i),i)
        }
        else{
            map.set(S.charAt(i),i)
        }
    }
	//Find partitions 
     for(let i=0;i<S.length;i++){
         count++
         maxSoFar = Math.max(maxSoFar,map.get(S.charAt(i)))
         if(i === maxSoFar){
             res.push(count)
             count = 0
         }
    }
   return res 
};