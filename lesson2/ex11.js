"use strict";

/* Дан массив с элементами `[2, 5, 9, 15, 0, 4]`. С помощью цикла `for` и оператора `if` выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10. */

var arr = [2, 5, 9, 15, 0, 4];
var i;
var l = arr.length;

for (i = 0; i < l; i++) {
  if (arr[i] > 3 && arr[i] < 10) {
    console.log(arr[i]);
  }
}