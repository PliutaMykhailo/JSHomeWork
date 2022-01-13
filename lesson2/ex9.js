"use strict";

// Отсортировать массив по убыванию.
// [6,5,4,3,2,1]

var arr = [1, 2, 3, 4, 5, 6];
var arrNew = [];
var i;
var l;

l = arr.length;

for (i of arr) {
  l = l - 1;
  arrNew[l] = i;
}

console.log(arrNew);
