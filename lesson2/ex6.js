"use strict";

var arr = [1, 2, 3, 4];

var sum = 0;
var i;
for (i of arr) {
  sum = sum + i;
}
console.log(sum);
