"use strict";

/* 
Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает данный массив в качестве параметров, а затем последовательно выводит на экран его элементы. Обязательно нужно использовать рекурсию. Использовать цикл запрещено. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только не пустой массив.

*Возможно вам понадобится метод [splice](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).*

f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty
*/

function f(n) {
  if (typeof n === "object") {
    var arr = n;
    if (arr.length !== 0) {
      console.log(arr[0]);
      if (arr.length !== 1) {
        arr.splice(0, 1);
        f(arr);
      } else {
        return;
      }
    } else {
      throw new Error("Error: parameter can't be an empty");
    }
  } else {
    throw new Error("Error: parameter type should be an array");
  }
}

f([1, 2, 3]);
