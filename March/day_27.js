// 1337. The K Weakest Rows in a Matrix (Easy)

// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

 

// Example 1:

// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 2
// - Row 1: 4
// - Row 2: 1
// - Row 3: 2
// - Row 4: 5
// The rows ordered from weakest to strongest are [2,0,3,1,4].
// Example 2:

// Input: mat =
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]],
// k = 2
// Output: [0,2]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 1
// - Row 1: 4
// - Row 2: 1
// - Row 3: 1
// The rows ordered from weakest to strongest are [0,2,3,1].
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 2 <= n, m <= 100
// 1 <= k <= m
// matrix[i][j] is either 0 or 1.

// Solution 1:

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(M, K) {
    let y = M.length, x = M[0].length,
        heap = new Int16Array(K+2), hix = 1,
         ans = new Uint8Array(K)
    heap[0] = 32767
    const heapify = val => {
        let i = hix, par = i >> 1, temp
        heap[hix++] = val
        while (heap[par] < heap[i]) {
            temp = heap[par], heap[par] = heap[i], heap[i] = temp
            i = par, par = i >> 1
        }
    }
    const extract = () => {
        let max = heap[1], left, right, temp,
            i = 1, child = heap[3] > heap[2] ? 3 : 2
        heap[1] = heap[--hix], heap[hix] = 0
        while (heap[i] < heap[child]) {
            temp = heap[child], heap[child] = heap[i], heap[i] = temp
            i = child, left = i << 1, right = left + 1
            child = heap[right] > heap[left] ? right : left
        }
        return max
    }
    const find = row => {
        let left = 0, right = x
        while (left <= right) {
            let mid = left + right >> 1
            if (row[mid] > 0) left = mid + 1
            else right = mid - 1
        }
        return left
    }
    for (let i = 0; i < y; i++) {
        heapify((find(M[i]) << 7) + i)
        if (hix > K + 1) extract()
    }
    while(hix) ans[hix-2] = extract() & (1 << 7) - 1
    return ans
};