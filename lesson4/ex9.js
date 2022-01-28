/*
Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
*/

function arrayFill(item, length) {
  if (
    typeof item === "number" ||
    typeof item === "string" ||
    typeof item === "object" ||
    Array.isArray(item)
  ) {
    if (typeof length === "number") {
      var arr = [];
      for (var i = 0; i < length; i++) {
        arr.push(item);
      }
      return arr;
    } else {
      throw new Error("Error: parameter2 type is not a number");
    }
  } else {
    throw new Error(
      "Error: parameter1 type is not a number/string/object/array"
    );
  }
}

console.log(arrayFill("x", 5));
