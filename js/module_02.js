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
