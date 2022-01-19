"use strict";

/* 
Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
f(2); // 8
f('Content'); // Error: parameter type is not a Number
*/

function f(n) {
  if (typeof n === "number") {
    console.log(n ** 3);
  } else {
    console.log("Error: parameter type is not a Number");
  }
}

f(2);
f("Content");
