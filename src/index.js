module.exports = function solveSudoku(matrix) {
  //
  let columnWithZeroIdx = [];
  let columnCount = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        for (let num = 1; num < 10; num++) {
          if (variant(i, j, num, matrix)) {
          matrix[i][j] = num;
          if (solveSudoku(matrix)) {
            return matrix;
          } else {
            matrix[i][j] = 0;
          }
        }
      }
      return false;
    }
  }
}
return matrix;
}
    function variant (i, j, num, arr) {
      for (let a = 0; a < arr.length; a++) {
        if (arr[i][a] === num) {
          return false; 
        }
      }

      for (let a = 0; a < arr.length; a++) {
        if (arr[a][j] === num) {
          return false;
        }
        
      }
    }

  
