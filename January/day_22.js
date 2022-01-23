// 1510. Stone Game IV

// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there are n stones in a pile. On each player's turn, that player makes a move consisting of removing any non-zero square number of stones in the pile.

// Also, if a player cannot make a move, he/she loses the game.

// Given a positive integer n, return true if and only if Alice wins the game otherwise return false, assuming both players play optimally.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: Alice can remove 1 stone winning the game because Bob doesn't have any moves.
// Example 2:

// Input: n = 2
// Output: false
// Explanation: Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).
// Example 3:

// Input: n = 4
// Output: true
// Explanation: n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).
 

// Constraints:

// 1 <= n <= 105


// solution I

/**
 * @param {number} n
 * @return {boolean}
 */
 var winnerSquareGame = function(n) {
    var dp = new Array(n+1).fill(false);
    dp[1] = true; // alice take one stone and win the game
    for(var i = 2; i<=n; i++)
    {
        var canWin = false;
        for(var j = 1; j*j<=i; j++)
        {
            // if alice take j^2, then nothing left for bob, alice win
            if(dp[i - j*j]  == false)
            {
                canWin = true;
                break;
            }
        }
        dp[i] = canWin;
    }
    return dp[n];
 
};


// solution II

// got this solution from somewhere but i found it reasonable

// DFS+Memoization:
// We recursively remove a non-zero square number from piles and check for a permutation such that second player cant win.
// Algo:
// 1.Base conditions,
// ->if (n==0) it means no stones left and player cannot make a move, he/she loses the game.
// ->if(n is a perfect square), Player1 takes al the stones and leaves Player2 with ZERO coins(CheckMate).
// So we have to find a way such that during Player2's chance he is left with/has ZERO coins .
// Here, both the players play optimally , so even if there is one possible permutation Player2 wins we cant choose that way of partition.
// 2.Player1 can take any no.of stones [from int i=1 ; till i x i<n && !res ; i++].
// 3.So at each iteration, Player1 takes i x i no.of coins and check if Player2 cant win with (n-i*i) coins.
// Even one such iteration is enough to win the game[As both play optimally] ,so return TRUE.

var winnerSquareGame = function(n) {
  const memo = new Array(100001).fill(null);

  const dfs = (n) => {
    if (memo[n] != null) return memo[n];
    let res = false;
    if (n == 0 || Math.ceil(Math.sqrt(n)) == Math.floor(Math.sqrt(n)))
      res = true;
    //If there is atleast one way,such that second player can't win. return TRUE
    for (let i = +Math.floor(Math.sqrt(n)); i > 0 && !res; i--)
      if (!dfs(n - i * i)) res = true;
    memo[n] = res;
    return res;
  };
  return dfs(n);
};

