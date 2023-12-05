'use strict';

/* 
	Теоретичні питання
		1. Що таке цикл в програмуванні?

		Цикл, це блок коду який дозволяє виконати повторення виконання функціональної частини коду, яка знаходиться в тілі циклу, деяку кількість раз для отримання певного результату.

		2. Які види циклів є в JavaScript і які їх ключові слова?

		Є цикли які виконують задану кількість ітерацій - "for" і цикли які використовуються при невідомій кількості ітерацій до того моменту, поки не буде відповідності завдання до умови - "while".

		3. Чим відрізняється цикл do while від while?

		Цикл "while" спочатку перевіряє відповідність умови і потім виконує ітерацію. Цикл "do while" спочатку виконує ітерацію, потім перевіряє умову, викристовується коли потрібно виконати першу ітерацію при будь-якій умові хоча б один раз.

		Практичні завдання
		1. Запитайте у користувача два числа. 
		Перевірте, чи є кожне з введених значень числом. 
		Якщо ні, то запитуйте у користувача нове занчення до тих пір, поки воно не буде числом. 
		Виведіть на екран всі цілі числа від меншого до більшого за допомогою циклу for. 
*/

let userNumberFirst;
let userNumberSecond;

do {
	userNumberFirst = prompt('Введіть перше натуральне число');
} while (isNaN(userNumberFirst) || userNumberFirst === null);

do {
	userNumberSecond = prompt('Введіть друге натуральне число');
} while (isNaN(userNumberSecond) || userNumberSecond === null);

userNumberFirst = +userNumberFirst;
userNumberSecond = +userNumberSecond;

if (userNumberFirst >= userNumberSecond) {
	for (let i = userNumberSecond; i <= userNumberFirst; i++) {
		console.log(i);
	}
} else if (userNumberSecond >= userNumberFirst) {
	for (let i = userNumberFirst; i <= userNumberSecond; i++) {
		console.log(i);
	}
}

/*
		2. Напишіть програму, яка запитує в користувача число та перевіряє, 
		чи воно є парним числом. Якщо введене значення не є парним числом, 
		то запитуйте число доки користувач не введе правильне значення.
*/

let enteredUserNumber;

do {
	enteredUserNumber = prompt('Введіть парне число');
} while (isNaN(enteredUserNumber) ||
	enteredUserNumber === null ||
	enteredUserNumber % 2 !== 0 ||
	enteredUserNumber == 0);