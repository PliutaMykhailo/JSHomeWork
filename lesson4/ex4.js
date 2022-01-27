/* Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
some(arr, function(item, i, arr) {}); 
*/

function some(arr, callback) {
  if (Array.isArray(arr)) {
    if (typeof callback === "function") {
      for (var i = 0; i < arr.length; i = i + 1) {
        if (callback(arr[i], i, arr)) {
          return true;
        }
      }
      return false;
    } else {
      throw new Error("Error: parameter type is not a function");
    }
  } else {
    throw new Error("Error: parameter type is not a array");
  }
}

const arr = [1, 2, 3];

var result = some(arr, function (item, i, arr) {
  return item == 2;
});

console.log(result); // true
