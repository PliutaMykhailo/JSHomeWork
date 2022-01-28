/*
Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.

Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив

```javascript
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
*/

function f(arr) {
  if (Array.isArray(arr)) {
    var sum = 0;
    var arrNew = arr.flat(Infinity);
    for (var i = 0; i < arrNew.length; i = i + 1) {
      if (typeof arrNew[i] === "number" || typeof arrNew[i] === "object") {
        sum = sum + arrNew[i];
      } else {
        throw new Error("Error: value type is not a number or an object");
      }
    }
    return sum;
  } else {
    throw new Error("Error: parameter type is not a array");
  }
}

const arr = [
  [
    [1, 2],
    [1, 2],
  ],
  [
    [2, 1],
    [1, 2],
  ],
];
console.log(f(arr)); // 12

const arr2 = [[[[[1, 2]]]]];
console.log(f(arr2)); // 3

const arr3 = [[[[[1, 2]]], 2], 1];
console.log(f(arr3)); // 6

const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0

const arr5 = [[[[[], 3]]]];
console.log(f(arr5)); // 3
