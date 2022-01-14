"use strict";

// Отсортировать массив по возрастанию.
// [1,2,3,4,5,6]

var arr = [6, 5, 4, 3, 2, 1];
var arrNew = [];
var i;
var j;
var l = arr.length - 1;

for (j = 0; j < arr.length; j++) {
  for (i = 0; i < l; i++) {
    if (arr[i] < arr[i + 1]) {
      var save = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = save;
    }
  }

  arrNew[j] = arr[i];
  l = l - 1;
}

console.log(arrNew);
