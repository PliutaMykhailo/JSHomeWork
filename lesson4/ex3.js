/* Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
every(arr, function(item, i, arr) {}); 
*/

function every(arr, callback) {
  if (Array.isArray(arr)) {
    if (typeof callback === "function") {
      for (var i = 0; i < arr.length; i = i + 1) {
        if (!callback(arr[i], i, arr)) {
          return false;
        }
      }
      return true;
    } else {
      throw new Error("Error: parameter type is not a function");
    }
  } else {
    throw new Error("Error: parameter type is not a array");
  }
}

const arr = [1, 2, 3];

var result = every(arr, function (item, i, arr) {
  return item > 0;
});

console.log(result); // true
