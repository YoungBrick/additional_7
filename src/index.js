module.exports = function solveSudoku(matrix) {
 

  function getZeroCords() {
    for (let i = 0; i < 9; i++) {
      let index = matrix[i].indexOf(0);
      if (index != -1) return [i, index];
    }
    return false;
  }

  function isValidRow(num, row) {
    return !matrix[row].includes(num);
  }

  function isValidCol(num, col) {
    for (let i = 0; i < 9; i++) {
      if (num == matrix[i][col]) return false;
    }
    return true;
  }

  function isValidSquare(num, row, col) {
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (num == matrix[i][j]) return false;
      }
    }
    return true;
  }
   
  function isValid(num, row, col) {
    return isValidRow(num, row) && isValidCol(num, col) && isValidSquare(num, row, col);
  }

  function solver() {
   let zeroCords = getZeroCords()
   if (!zeroCords) {
     return true;
   } else {
     let [row, col] = zeroCords;

     for (let num = 1; num <= 9; num++) {
       if (isValid(num, row, col)) {
         matrix[row][col] = num;

         if (solver()) {
           return true;
         } else {
           matrix[row][col] = 0;
         }
       }
     }
     return false;
   }
  }
  solver();
  return matrix;
}
