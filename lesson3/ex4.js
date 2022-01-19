"use strict";

/* 
Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
*/

var f = function (n) {
  if (typeof n === "number") {
    if (n > 0 && n < 8) {
      switch (n) {
        case 1:
          console.log("Воскресенье");
          break;
        case 2:
          console.log("Понедельник");
          break;
        case 3:
          console.log("Вторник");
          break;
        case 4:
          console.log("Среда");
          break;
        case 5:
          console.log("Четверг");
          break;
        case 6:
          console.log("Пятница");
          break;
        case 7:
          console.log("Суббота");
          break;
      }
    } else {
      throw new Error("Error: parameter should be in the range of 1 to 7");
    }
  } else {
    throw new Error("Error: parameter type is not a Number");
  }
};

f(1);
f(2);
f(8);
f("1");
