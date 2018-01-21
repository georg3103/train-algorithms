'use strict'

var zebraMatrix = function (n) {
    var arr = [];
    var start = 0;
    var end = n*n;
    var rows = 0;
    var col = 0;
    var lap = n;
    
    // Make empty array (zeroes as a value in cell)
    for (var i = 0; i < n; i++) {
    arr[i] = [];
      for (var j = 0; j < n; j++) {
        arr[i][j] = 0; 
      }
    }
    
    // Fill in num data
    while (start <= end) {
        for (var j = 0; j < lap; j++) {
            if(start >= end) {
                return;
            }
            start++
            arr[rows][col] = start;
            col++;
        }
        col--;
        rows++;
        for (var i = 0; i < col; i++) {
            if(start >= end) {
                return;
            }
            start++;
            arr[rows][col] = start;
            rows++;
        }
        rows--;
        col--;
        for (var i = 0; i < rows; i++) {
            if(start >= end) {
                return;
            }
            start++;
            arr[rows][col] = start;
            col--;
        }
        rows--;
        col++;
        for (var j = 0; j <= rows; j++) {
            if(start >= end) {
                return;
            }
            start++
            arr[rows][col] = start;
            rows--;
        }
        // next lap
        rows++;
        col++;
        lap = lap - 2;
    };
};
    
zebraMatrix(2); // works
zebraMatrix(3); // works
zebraMatrix(4); // does not work
zebraMatrix(5); // does not work