/*
Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
*/

function filter(arr, callback) {
  if (Array.isArray(arr)) {
    if (typeof callback === "function") {
      var newArr = [];
      for (var i = 0; i < arr.length; i = i + 1) {
        if (callback(arr[i], i, arr)) {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    } else {
      throw new Error("Error: parameter type is not a function");
    }
  } else {
    throw new Error("Error: parameter type is not a array");
  }
}

const arr = [1, 2, 3];

var result = filter(arr, function (item, i, arr) {
  return item > 2;
});

console.log(result);
