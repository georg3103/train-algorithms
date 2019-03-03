'use strict'

function zebraMatrix (n) {
    var arr = [];

    var start = 1;
    var startColumn = 0;
    var endColumn = n - 1;
    var startRow = 0;
    var endRow = n - 1;
    
    // Make empty array (zeroes as a value in cell)
    for (var i = 0; i < n; i++) {
    arr[i] = [];
      for (var j = 0; j < n; j++) {
        arr[i][j] = 0; 
      }
    }
    
    // Fill in num data
    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (var i = startRow; i <= endColumn; i++) {
            arr[startRow][i] = start;
            start++
        }
        startRow++;
        // Right column
        for (let i = startRow; i <= endRow; i++) {
            arr[i][endColumn] = start;
            start++;
        }
        endColumn--;
        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            arr[endRow][i] = start;
            start++;
        }
        endRow--;
        // start column
        for (let i = endRow; i >= startRow; i--) {
            arr[i][startColumn] = start;
            start++;
        }
        startColumn++;
    }
  return arr;
};

module.exports = zebraMatrix;

// zebraMatrix(2); // works
// zebraMatrix(3); // works
// zebraMatrix(4); // works
// zebraMatrix(5); // works