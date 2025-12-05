// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

// function makeNumberRoot(array) {
//     const squareNum = array.map(num => (num ** 2));
//     console.log(squareNum)
// }

// makeNumberRoot(numbers)

// Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// function takeOnlyValues(arr) {
//     return arr.flatMap(item => item.values);
// }

// console.log(takeOnlyValues(data));

// Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// function isAnyTeenager(arr) {
//     return arr.some(man => man.age < 20);
// }

// console.log(isAnyTeenager(people))

// Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// function isNumEven(arr) {
//     return arr.every(num => num % 2 === 0)
// }

// console.log(isNumEven(numbers));

// Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// function findFirstOddNumber(arr) {
//     return arr.find(num => num % 2 !== 0);
// }

// console.log(findFirstOddNumber(numbers));

// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// function sortNumbers(arr) {
//     return arr.toSorted((a, b) => a - b)
// }

// console.log(sortNumbers(numbersArray));

// Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// function sortFruits(arr) {
//     return arr.sort();
// }

// console.log(sortFruits(stringArray));

// Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// function sortByAge(arr) {
//     return arr.toSorted((a, b) => (a.age - b.age))
// }

// console.log(sortByAge(users));

// Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// function findAdults(arr) {
//     return arr.filter(person => person.age > 20)
// }

// console.log(findAdults(user));

// Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// function sumNumbers(arr) {
//     return arr.reduce((acc, current) => acc + current, 0)
// }

// console.log(sumNumbers(numbers));

// class Calculator {
//   constructor(initialValue = 0) {
//     this.value = initialValue;
//   }
//   number(num) {
//     this.value = num;
//     return this;
//   }
//   getResult() {
//     return this.value;
//   }
//   add(num) {
//     this.value += num;
//     return this;
//   }
//   subtract(num) {
//     this.value -= num;
//     return this;
//   }
//   divide(num) {
//     if (num === 0) {
//       throw new Error('Cannot divide by zero!');
//     }
//     this.value /= num;
//     return this;
//   }
//   multiply(num) {
//     this.value *= num;
//     return this;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// // Завдання 12:
// // Напиши клас Client який створює об'єкт з властивостями login email.
// // Оголоси приватні властивості #login #email, доступ до яких зроби
// // через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#email = email;
//     this.#login = login;
//   }
//   get email() {
//     return this.#email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }
//   getEmployee;
//   etails() {
//     return {
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }
