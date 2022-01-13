"use strict";

var arr = [1, 2, 3, 4];
var sum = 0;
var i;

for (i of arr) {
  if (i > 3) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
}

console.log(sum);
