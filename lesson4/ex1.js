/*
Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
*/

function forEach(arr, callback) {
  if (Array.isArray(arr)) {
    if (typeof callback === "function") {
      for (var i = 0; i < arr.length; i = i + 1) {
        callback(arr[i], i, arr);
      }
    } else {
      throw new Error("Error: parameter type is not a function");
    }
  } else {
    throw new Error("Error: parameter type is not a array");
  }
}

const arr = [1, 2, 3];

forEach(arr, function (item, i, arr) {
  console.log("number: " + item + ", index: " + i + ", array:", arr);
});
