// 662. Maximum Width of Binary Tree (Medium)

// Given the root of a binary tree, return the maximum width of the given tree.

// The maximum width of a tree is the maximum width among all levels.

// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

// It is guaranteed that the answer will in the range of a 32-bit signed integer.

 

// Example 1:


// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
// Example 2:


// Input: root = [1,3,2,5,null,null,9,6,null,7]
// Output: 7
// Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
// Example 3:


// Input: root = [1,3,2,5]
// Output: 2
// Explanation: The maximum width exists in the second level with length 2 (3,2).
 

// Constraints:

// . The number of nodes in the tree is in the range [1, 3000].
// . -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var widthOfBinaryTree = function(root) {
    const queue = [{
        root,
        pos: BigInt(0),
    }];
    let maxWidth = BigInt(0);

    while (queue.length) {
        const length = queue.length;
        let min = BigInt(0);
        let pos = BigInt(0), currentRoot;

        for (let i = 0; i < length; i += 1) {
            const data = queue.shift();
            pos = data.pos;
            currentRoot = data.root;

            if(i === 0) min = pos;

            if (currentRoot.left) {
                queue.push({root: currentRoot.left, pos: BigInt(pos * BigInt(2))});
            }
            if (currentRoot.right) {
                queue.push({root: currentRoot.right, pos: BigInt(pos * BigInt(2) + BigInt(1))});
            }
        }

        const levelWidth = (pos - min + BigInt(1)) || BigInt(0);

        maxWidth = levelWidth > maxWidth ? levelWidth : maxWidth;
    }

    return maxWidth;
};