"use strict";
// console.log(name);
// let name = "Bob";

// let name = "Bob";
// const age = 12;
// name = "Sally";
// age = 34;
// let email;
// email = "userEmail";
// console.log(email);
// const lastName;
// console.log(lastName)
// console.log(name);
// console.log(age);
// email = "user@gmai.com"; // var email = "user@gmai.com"
// console.log(email);
// const number = 12.54;
// const result = number % 1; // 0.539999999999991
// const roundedResult = result.toFixed(2); // 0.54
// console.log(roundedResult);
// const PI_FOR_CIRCLE = 3.14;
// const userName = "Bob";
// const userEmail = "user@gmail.com";
// let userAge = 12;
// const TIMER_DELAY = 60;

// let counterAfterComma = number.toString().split(".").length; // 12,54 => "12.54" => ["12", "54"]  => 2
// console.log(counterAfterComma);

// const number = 25.35;
// const convertedNumber = number.toLocaleString("uk-UA"); // 25,35
// const result = number * 2;
// console.log(result);

// const name = "Bob";
// console.log(name.toUpperCase().length);

// console.log(convertedNumber);

// const name = "Bob";
// const age = 12;

// String = '', ' ' 'q', '1'
// Number = 12, 12.5, 0.5, -1, -12.5
// null = null
// undefined = undefined
// Boolean = true, false

// Object = {} = number
// Array = []

// NaN

// const array = [1, 2, 3, 4, 5];

// # Модуль 1. Занятя 1.

// ## Example 1 - Базові математичні операції

// Виведи на екран загальну кількість яблук і винограду. Різницю я та винограду

// ```js
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes; // 47 + 135 = 182
// console.log(total);
// const diff = apples - grapes; // 47 - 135 = -88
// console.log(diff);
// ```

// ## Example 3 - Пріоритет операторів

// Розбери пріоритет операторів
// `result`.

// ```js
// const result = (108 + 223) - 2 * 5; // * => 25 + => 35 - => 13 = => 2
// console.log(result);
// ```

// ## Example 4 - Клас Math

// Напиши код який виводить в консоль округлення вверх / вниз.Використовуй методи`Math.floor()`,
// `Math.ceil()` і`Math.round()`.
// Math.ceil;
// Math.floor;
// Math.round;
// Math.pow
// Math.sqrt

// ```js
// const value = 27.002;
// console.log(Math.ceil(value)); // 28
// console.log(Math.floor(value)); // 27
// console.log(Math.round(value)); // 28
// console.log(Math.pow(value, 3)); // 829.008
// ```

// ## Example 5 - Шаблонні рядки

// Склади фразу`A has B bots in stock`, де A, B - це змінні

// ```js
// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```
// ## Example 6 - Оператори порівняння і приведення типів

// Яким буде результат виконання коду?

// ```js
// console.log(5 > 4); // true false

// console.log(10 >= "7"); // console.log(10 >= 7)
// console.log(10 >= "7px"); // console.log(10 >= 7)

// console.log("2" > "1"); // "2" > "1" // true 'q' '2' 'true'

// console.log('2' < '12');

// console.log("4" == 4); // == // === // true // 4 == 4

// console.log("6" === 6);

// const numberFromUser = Number(prompt("Enter number")); // "6"

// console.log(numberFromUser === 6); // 6 === 6 // true

// console.log("false" === false);

// console.log(1 == true); // 1 == 1 // true

// console.log(1 === true);

// console.log("0" == false); // 0 == 0 // true

// console.log('0' === false);

// console.log("Papaya" < "papaya");

// console.log("Papaya" === "papaya");

// console.log(undefined == null); // 0 == 0 // true

// console.log(undefined === null);
// console.log(NaN === NaN); // false
// ```

// ## Example 7 - Опертор % та методы рядків

// Напиши код який переводить значення`totalMinutes`(кількість хвилин) в формат
//  `HH:MM`

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```
// ## Example 8 - Логічні оператори

// Яким буде результат виразу

// && - name === 'user' && login === 'admin' // всі true, зупиняється тоді коли будь - яка дасть false
// || - name === 'user' || login === 'admin' // перший true який знайдемо , або останій flase в ланцюжку

// ```js
// console.log(true && 3); // 3

// console.log(false && 3);

// console.log(true && 4 && "kiwi"); // kiwi

// 0
// ''
// false
// null
// undefined
// NaN
// -0

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(false || true || 7);

// console.log(null || 2 || undefined);

// console.log(1 && null && 2);

// console.log((1 && null && 2) > 0); // null > 0

// console.log(null || (2 && 3) || 4); // 2 && 3 => null || 3 || 4 => 3
// ```

// Number.parseInt()

// console.log(Number("12.54000000"));

// # Модуль 1. Заняття 2. Розгалуження. Цикли

// ## Example 1 - Ввід користувача та розгалуження

// if () {

// } else {

// }

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// if () {

// } else if () {

// } else if () {

// } else {

// }

// switch (key) {
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;

//     default:
//         break;
// }

// Використовуючи конструкцію if...else та prompt напишіть код що буде питатися в користувача
// "Яка офіційна назва JavaScript".Якщо користувач вводить `ECMAScript` то показувати alert з повідомленням`"Вірно!"`
// в іншому випадку - "Не знаєте? ECMAScript"

// const userInput = prompt("Яка офіційна назва JavaScript");

// confirm("Are you ready ?");

// if (userInput === "ECMAScript") {
//   alert("Вірно");
// } else {
//   alert("Не знаєте? ECMAScript");
// }

// ## Example 2 - Показувати час(if...else)

// Напишіть код для відображення годин і хвилин в консоль браузера в вигляді рядка в форматі "14 год 26 хв"
// Якщо значення хвилин "0" тоді показувати лише "14 год"

// ```js
// const hours = 14;
// const minutes = 26;
// let timeString;
// if (minutes > 0) {
//   timeString = `${hours} год ${minutes} хв`;
// } else {
//   timeString = `${hours} год`;
// }
// ```

// ## Example 3 - Розгалуження

// Напишіть код що виводить в консоль рядок "Це додатнє число" якщо користувач ввів в prompt число що більше за 0
// Якщо користувач ввів 0 то рядок "Це нуль". Якщо користувач ввів відємне число виводити на екран рядок "Це відємне число"

// ```js
// const userInput = prompt("Введіть число");
// // > < >= <= === ==
// if (userInput > 0) {
//   console.log("Це додатнє число");
// } else if (userInput < 0) {
//   console.log("Це відємне число");
// } else if (Number(userInput) === 0) {
//   // "0" === 0
//   console.log("Це нуль");
// } else {
//   console.log("Користувач ввів не число");
// }

// switch (true) {
//   case userInput > 0:
//     console.log("Це додатнє число");
//     break;
//   case userInput < 0:
//     console.log("Це відємне число");
//     break;
//   case Number(userInput) === 0:
//     console.log("Це нуль");
//     break;
//   default:
//     console.log("Користувач ввів не число");
//     break;
// }

// ```

// ## Example 4 - if...else і логічні оператори

// Напишіть код що буде виводити в консоль браузера рядок в залежності від значення змінної "hours"

// Якщо занчення зміної `hours`:

// - меньше `17`, виводимо рядок `"Pending"`
// - більше чи доріврнює `17` і меньше чи дорівнює 24, виводимо рядок `"Expires"`
// - більше `24` , виводимо рядок `"Overdue"`

// ```js
// const hours = 0;

// if (hours < 17) {
//   alert(`${hours} is pending`);
// } else if (hours >= 17 && hours <= 24) {
//   alert("Expires");
// } else {
//   alert("Overdue");
// }

// ```

// ## Example 5 - Дедлайн здачі проекта(if...else)

// Напиши код для відображення часу дедлайна здачі проекта. Використовуй if else

// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Ще не скоро )"`

// ```js
const daysUntilDeadline = 2;

// if (daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Післязавтра");
// } else {
//   console.log("Ще не скоро )");
// }
// ```

// ## Example 6 - Переписати задачу 5 на Switch
// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сьогодні");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Післязавтра");
//     break;
//   default:
//     console.log("Ще не скоро )");
//     break;
// }
// ## Example 7 - Цикл for

// змінна що відповідає за старт циклу
// умова що відповідає за припинення циклу
// код який наближає закінчення циклу

// for (let i = 1; i < 10; i += 1) {
//   console.log(i);
// }

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i += 1;
// }
// let i = 0;
// i++; console.log(i) // 0
// console.log(i) // 1
// ++i; console.log(i) // 1

// let i = 0;
// i = i + 1; // 1
// i += 1;
// i++;

// i - +1;
// i--;
// i = i - 1;

// i = 1 => 1 < 10 => console.log(1) => i + 1
// i = 2 => 2 < 10 => console.log(2) => i + 1
// 3
// 4
// 5
// 6
// 7
// 8
// i = 8 => 8 < 10 => console.log(8) => i + 1
// i = 10 => 10 < 10 ///

// Написати цикл що виводить в консоль числа від меньшого до більшого в діапазоні від min до max
// але лише ті що кратні 5-ти

// ```js
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }
// ```

// ## Example 8
//  Написати гру камінь - ножиці - папір
// Де компютер загадує своє значення
// Користувач вводить свій варіант
// І потім ми бачимо хто переміг

// 1) Дізнатися варіант компютера
// 2) Дізнатися варіант користувача
// 3) Перевірити і визначити переможця

// console.log(Math.random()); // min = 0 max 1
// let computerChoise = "";
// const number = Math.random();
// if (number < 0.33) {
//   computerChoise = "камінь";
// } else if (number >= 0.33 && number <= 0.66) {
//   computerChoise = "ножиці";
// } else {
//   computerChoise = "папір";
// }

// let userChoise = prompt("Введіть свій варіант");

// if (userChoise === computerChoise) {
//   console.log("Нічия");
// } else if (
//   (userChoise === "ножиці" && computerChoise === "папір") ||
//   (userChoise === "камінь" && computerChoise === "ножиці") ||
//   (userChoise === "папір" && computerChoise === "камінь")
// ) {
//   console.log("Виграв юзер");
// } else {
//   console.log(`Виграв компютер і він вибрав ${computerChoise}`);
// }
