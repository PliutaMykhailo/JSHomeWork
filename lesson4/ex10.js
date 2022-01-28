/*
Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
*/

function reverse(arr) {
  if (Array.isArray(arr)) {
    if (arr.length !== 0) {
      var arrNew = [];
      for (var i = arr.length - 1; i > -1; i = i - 1) {
        arrNew.push(arr[i]);
      }
      return arrNew;
    } else {
      throw new Error("Error: array cannot be empty");
    }
  } else {
    throw new Error("Error: parameter type is not an array");
  }
}

const arr = [3, 2, 1];

console.log(reverse(arr));
