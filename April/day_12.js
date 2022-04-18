// 289. Game of Life
// Medium
// Share
// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
// Example 1:

// Input: board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
// Example 2:


// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]
 

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.
 

// Follow up:

// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    const mapofLife = []; // stores count of live neighbours at row,col.
    for(let row=0;row<board.length;row++){
        const temp = [];
        for(let col=0;col<board[row].length;col++){
            const cnt = getLiveCellCount(board,row,col);            
            temp.push(cnt);                      
        }
        mapofLife.push(temp);
    }
    for(let row=0;row<mapofLife.length;row++){      
      for(let col=0;col<mapofLife[row].length;col++){
        const cnt = mapofLife[row][col]; 
        //here we check what needs to be done based on question.
        if(cnt === 3){
          board[row][col] = 1;
        }
        else if(cnt<2){
          board[row][col] = 0;
        }
        else if(cnt>3){
          board[row][col] = 0;
        }           
      }      
    }  
    return board;
  };
  
  // this returns the count of its neighbours.
  function getLiveCellCount(board,row,col){
    let cnt=0; 
    const maxRows = board.length;
    const maxCols = board[row].length;
    if(row-1>=0){ // if above row exists
        if(board[row-1][col] === 1) cnt++;
        if(col-1>=0 && board[row-1][col-1] === 1) cnt++;
        if(col+1<maxCols && board[row-1][col+1] === 1) cnt++;
    }
    if(row+1<maxRows){ //if below row exists
        if(board[row+1][col] === 1) cnt++;
        if(col-1>=0 && board[row+1][col-1] === 1) cnt++;
        if(col+1<maxCols && board[row+1][col+1] === 1) cnt++;
    }
    if(col-1>=0 && board[row][col-1]===1){ // if left col exists
        cnt++;
    }
    if(col+1<maxCols && board[row][col+1]===1){ //if right col exists
        cnt++;
    }    
    return cnt;
  }
