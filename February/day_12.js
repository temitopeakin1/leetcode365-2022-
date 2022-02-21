// 127. Word Ladder
// Hard

// 7480

// 1616

// Add to List

// Share
// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

// Constraints:

// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList,
    stack=[beginWord], stack2=[endWord], seen=new Set(), depth=1) {
  if (!wordList.includes(endWord)) return 0
  const dict = new Set(wordList)
  let len = endWord.length
  while(stack2.length>0) {
      let sz = stack.length
      for(let i=0;i<sz;i++) {
          const curr = stack.shift()
          if (stack2.includes(curr)) return depth
          if (seen.has(curr)) continue
          seen.add(curr, true)
          for(let le=0;le<len;le++) {
              const arr = curr.split('')
              for (let letterIndex=97;letterIndex<123;letterIndex++) {
                  arr[le] = String.fromCharCode(letterIndex)
                  const new1 = arr.join('')
                  if (dict.has(new1)) {
                      stack.push(new1)
                  }
              }
          }   
      };
      depth++
      [stack, stack2] = [stack2, stack];
  }
  return 0
};