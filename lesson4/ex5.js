/* Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc); */

function reduce(arr, callback, acc) {
  if (Array.isArray(arr)) {
    if (typeof callback === "function") {
      if (typeof acc === "string" || typeof acc === "number") {
        var sum = acc;
        for (var i = 0; i < arr.length; i = i + 1) {
          callback(sum, arr[i], i, arr);
          sum = sum + arr[i];
        }
        return sum;
      } else {
        throw new Error("Error: parameter type is not a string or a number");
      }
    } else {
      throw new Error("Error: parameter type is not a function");
    }
  } else {
    throw new Error("Error: parameter type is not a array");
  }
}

const arr = [1, 2, 3];
const acc = 0;

var result = reduce(arr, function (acc, item, i, arr) {}, acc);

console.log(result);
