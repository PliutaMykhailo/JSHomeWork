"use strict";

/* 
Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет. Если чётное — функция возвращает `true`, если нечётное — `false`. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

*Чётные числа могут делится на 2 без остатка.*

isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number
 */

function isEven(n) {
  if (typeof n === "number") {
    var result = n % 2 == 0 ? true : false;
    console.log(result);
  } else {
    throw new Error("Error: parameter type is not a Number");
  }
}

isEven(3);
isEven(4);
isEven("Content");
