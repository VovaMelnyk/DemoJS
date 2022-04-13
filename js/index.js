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

console.log("first");

// Яким буде результат виразу

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// ```

// Number.parseInt()

// console.log(Number("12.54000000"));

// # Модуль 1. Заняття 2. Розгалуження. Цикли

// ## Example 1 - Ввід користувача та розгалуження

// Використовуючи конструкцію if...else та prompt напишіть код що буде питатися в користувача
// "Яка офіційна назва JavaScript".Якщо користувач вводить `ECMAScript` то показувати alert з повідомленням`"Вірно!"`
// в іншому випадку - "Не знаєте? ECMAScript"

// ## Example 2 - Показувати час(if...else)

// Напишіть код для відображення годин і хвилин в консоль браузера в вигляді рядка в форматі "14 год 26 хв"
// Якщо значення хвилин "0" тоді показувати лише "14 год"

// ```js
// const hours = 14;
// const minutes = 26;
// let timestring;
// ```

// ## Example 3 - Розгалуження

// Напишіть код що виводить в консоль рядок "Це додатнє число" якщо користувач ввів в prompt число що більше за 0
// Якщо користувач ввів 0 то рядок "Це нуль". Якщо користувач ввів відємне число виводити на екран рядок "Це відємне число"

// ```js
// const userInput = prompt('Введите число');
// ```

// ## Example 4 - if...else і логічні оператори

// Напишіть код що буде виводити в консоль браузера рядок в залежності від значення змінної "hours"

// Якщо занчення зміної `hours`:

// - меньше `17`, виводимо рядок `"Pending"`
// - більше чи доріврнює `17` і меньше чи дорівнює 24, виводимо рядок `"Expires"`
// - більше `24` , виводимо рядок `"Overdue"`

// ```js
// const hours = 10;
// ```

// ## Example 5 - Дедлайн здачі проекта(if...else)

// Напиши код для відображення часу дедлайна здачі проекта. Використовуй if else

// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Ще не скоро )"`

// ```js
// const daysUntilDeadline = 5;
// ```

// ## Example 6 - Переписати задачу 5 на Switch

// ## Example 7 - Цикл for

// Написати цикл що виводить в консоль числа від меньшого до більшого в діапазоні від min до max
// але лише ті що кратні 5-ти

// ```js
// const max = 100;
// const min = 20;
// ```

// ## Example 8
//  Написати гру камінь - ножиці - папір
// Де компютер загадує своє значення
// Користувач вводить свій варіант
// І потім ми бачимо хто переміг
