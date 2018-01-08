'use strict';

var TEST_LIST = [1, 7, 3, 5, 9];

var findSmallest = function (arr) {
    var smallest = arr[0];
    var smallestIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};

var selectionSort = function (arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        var smallest = findSmallest(arr);
        newArr.push(arr[smallest]);
        arr.splice(smallest, 1);
    }
    return newArr;
}

selectionSort(TEST_LIST);