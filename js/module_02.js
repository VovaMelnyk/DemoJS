// const result = 1 + 2 * 3 - 8

// # Модуль 2. Заняття 3. Масиви

// ## Example 1 - Базові операції з масивом

// Створити масив `genres` з елементами «Jazz» и «Blues»
// Додайте «Рок - н - ролл» в кінець масиву
// Виведіть в консоль перший елемент
// Виведіть в консоль останній елемент
// Видаліть перший елемент
// Вставте  «Country» та  «Reggy» в початок масиву

// ```js
// const genres = ["Jazz", "Blues"];
// genres.push("Rock-n-Roll");
// console.log(genres[genres.length - 1]);
// genres.shift();
// genres.unshift("Country", "Reggy");
// genres.splice(0, 0, "Country", "Reggy");
// console.log(genres.splice(0, 1));
// console.log(genres.slice(1));
// console.log(genres);

// ```

// ## Example 2 - Масиви і рядки

// Напиши код для розрахунку площі прямокутника зі сторонами, значення яких зберігаються в рядку

// ```js
// const values = "8 11";
// const array = values.split(" ");
// const result = array[0] * array[1];
// console.log(result);
// // ```

// const numbers = [1, 2, 3, 4, 5];
// numbers[5] = 6;
// numbers[20] = 7;
// console.log(numbers[15]);
// // numbers[1] = 20;
// console.log(numbers);

// ## Example 3 - Перебор масиву

// Напишіть код для перебору масиву циклом for для кожного елементу виведіть в консоль рядок в форматі
// 'номер елементу: значення елементу'

// ```js
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (let fruit of fruits) {
//   const index = fruits.indexOf(fruit) + 1;
//   console.log(`${index}: ${fruit}`);
// }
// ```

// ## Example 4 - Масиви  та цикли

// Напишіть скрипт який виводить в консоль імя та телефон кожного користувача

// ```js
// const names = "Jacob,William,Solomon,Artemis";
// const phones = "089001234567,089001112233,0890055566377,0890055566300";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// console.log(namesArr);
// console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }
// ```

// ## Example 5 - Массивы и строки

// Напишіть скрипт що розвертає рядок в зворотньому напрямку

// ```js
// const string = "Welcome to the future";
// const arr = string.split(" ");
// const reversed = arr.reverse();
// const reversedString = reversed.join(" ");
// console.log(reversedString);
// ```

// ## Example 6 - Пошутк елемента масиву

// Напиши код для пошуку елемента в масиві і виведіть його в консоль

// ```js

// const numbers = [17, 2, 94, 1, 23, 37];
// let min = numbers[0];
// for (let number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }
// 1
// min = 17
// number = 17
// 17 < 17 // false

// 2
// min = 17
// number = 2
// 2 < 17 // true
// min = 2

// 3
// min = 2
// number = 94
// 94 < 2

// 4
// min = 2
// number = 1
// 1 < 2 // true
// console.log(min); // 1
// min = 1
// ```

// # Модуль 2. Заняття 4. Функції

// ## Example 1 - Меньше з чисел

// Напиши ф-ю яка буде повертати меньше з двох чисел "a" та "b"

// function min(a, b) {
//   if (a < b) {
//     return a;
//   }
//   if (a > b) {
//     return b;
//   }
//   return b;
// }

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }

// function min(a, b) {
//   let result;
//   if (a < b) {
//     result = a;
//   } else if (a > b) {
//     result = b;
//   } else {
//     result = a;
//   }
//   return result;
// }

// function min(a, b) {
//   return a < b ? a : b;
// }

// ```js
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// console.log(min(0.1, 1 / 10)); // 1

// ```

// ## Example 2 - Площа прямокутника

// Напиши ф - ю`getRectArea(dimensions)`яка буде рахувати площу прямокутника зі сторонами, значення яких
// буде записано в `dimensions` в форматі рядка

// ```js
// function getRectArea(dimensions) {
//   const numbers = dimensions.split(" ");
//   const result = numbers[0] * numbers[1];
//   return result;
// }

// function getRectArea(dimensions) {
//   const numbers = dimensions.split(" ");
//   return numbers[0] * numbers[1];
// }

// function getRectArea(dimensions) {
//   const numbers = dimensions.split(" ");
//   console.log(numbers);
//   return (Number(numbers[0]) + Number(numbers[1])) * 2;
// }

// console.log(getRectArea("8 11"));
// ```

// ## Example 3 - Показ елементів в консоль

// Напиши ф - ю`logItems(items)` що отримує масив та використовує цикл і для кожного елементу виводить
// `<номер елемента> - <значеня елемента>` Нумерація починається з 1

// ```js
// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
// ```

// ## Example 4 - Пошук найбільшого елементу

// Напишіть ф-ю `findLargestNumber(numbers)` яка шукає саме більше число в масиві

// ```js
// function findLargestNumber(numbers) {
//   let acc = numbers[0];
//   for (let number of numbers) {
//     const index = numbers.indexOf(number);
//     if (acc < number) {
//       acc = number;
//     }
//   }
//   return acc;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// console.log(findLargestNumber([-2, 0, 3, 5, 7])); // 7

// ```

// ## Example 5 - Середнє значення

// Напиши ф-ю `calAverage()` яка приймає будь-яку кількість аргументів і повертає їх середнє значення

// ```js
// function calAverage() {
//   const array = Array.from(arguments);
//   let total = 0;
//   for (let element of array) {
//     total += element;
//   }
//   return total / array.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// ```

// ## Example 6 - Форматування часу

// Напиши ф-ю `formatTime(minutes)` яка перетворює значення `minutes` в рядок формату "HH:MM"

// ```js

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const minutesValue = minutes % 60;

//   const formatedHours = hours < 10 ? `0${hours}` : hours;
//   const formatedMinutes = minutesValue < 10 ? `0${minutesValue}` : minutesValue;

//   return `${formatedHours}:${formatedMinutes}`;
// }

// function formatValue(number) {
//   return number < 10 ? `0${number}` : number;
// }

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const minutesValue = minutes % 60;

//   const formatedHours = formatValue(hours);
//   const formatedMinutes = formatValue(minutesValue);

//   return `${formatedHours}:${formatedMinutes}`;
// }

// function formatTime(minutes, callback) {
//   const hours = Math.floor(minutes / 60);
//   const minutesValue = minutes % 60;

//   const formatedHours = callback(hours);
//   const formatedMinutes = callback(minutesValue);

//   return `${formatedHours}:${formatedMinutes}`;
// }

// console.log(formatTime(70, formatValue)); // "01:10"
// console.log(formatTime(450), formatValue); // "07:30"
// console.log(formatTime(1441), formatValue); // "24:01"
// ```

// ## Example 7 - Колекції курсів (includes, indexOf, push ...)

// Напишіть ф - ї для роботи з колекціями курсів`courses`

// - `addCourse(name)` - додає курс в кінець колекції
// - `removeCourse(name)` - видаляє курс з колекції
// - `updateCourse(oldName, newName)` - міняє назву курсу на нову

// ```js
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     return `У Вас уже є такий курс`;
//   }
//   courses.push(name);
// }

// const removeCourse = function (name) {
//   if (!courses.includes(name)) {
//     return "Курс з такою назвою відсутній";
//   }
//   const courseIndex = courses.indexOf(name);
//   courses.splice(courseIndex, 1);
// };

// const updateCourse = function (oldName, newName) {
//   if (!courses.includes(oldName)) {
//     return "Курс з такою назвою відсутній";
//   }
//   const courseIndex = courses.indexOf(oldName);
//   courses.splice(courseIndex, 1, newName);
// };

// console.log(addCourse("Express"));
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'У Вас уже є такий курс'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse("Vue")); // 'Курс з такою назвою відсутній'

// console.log(updateCourse("Express", "NestJS"));
// updateCourse("Express", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// ```

// function calcSum(array) {
//   let total = 0;
//   for (let element of array) {
//     total += element;
//   }
//   return total;
// }

// function reduceArray(array) {
//   const result = array.reduce(function (total, element) {
//     return (total += element);
//   }, 0);
//   return result;
// }

// console.log(reduceArray([1, 2, 3, 4])); // 10
