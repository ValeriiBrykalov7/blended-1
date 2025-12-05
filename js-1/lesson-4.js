//  1 - отримай body елемент і виведи його в консоль;
const bodyEL = document.querySelector('body');
console.log(bodyEL);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector('#title');
console.log(titleEl);

// 3 - отримай елемент class="list" і виведи його в консоль;

const listEL = document.querySelector('.list');
console.log(listEL);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopicElements = document.querySelectorAll('[data-topic]');
console.log(dataTopicElements);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const firstDataTopicEl = document.querySelector('[data-topic]');
console.log(firstDataTopicEl);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

console.log(dataTopicElements[dataTopicElements.length - 1]);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const neighbour = titleEl.nextElementSibling;
console.log(neighbour);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const allHeaders = document.querySelectorAll('h3');
console.log(allHeaders);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

allHeaders.forEach(el => el.classList.add('active'));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navigation = document.querySelector('[data-topic="navigation"]');
console.log(navigation);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navigation.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

navigation.querySelector('p').textContent = 'Я змінив тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = 'manipulation';
const manipulation = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(manipulation);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

manipulation.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedHeader = document.querySelector('.completed');
console.log(completedHeader);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

completedHeader.parentElement.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const pElem = document.createElement('p');
pElem.textContent = "Об'єктна модель документа (Document Object Model)";
const container = document.querySelector('.container');
container.insertBefore(pElem, listEL);

// 18 - додай новий елемент списку у кінець списка, його заголовок це -
// "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево -
// це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
//  тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const liElem = document.createElement('li');
const h3Elem = document.createElement('h3');
const pElem2 = document.createElement('p');
h3Elem.textContent = 'Властивість innerHTML';
pElem2.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
liElem.appendChild(h3Elem);
liElem.appendChild(pElem2);
listEL.insertAdjacentElement('beforeend', liElem);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

listEL.insertAdjacentHTML(
  'beforeend',
  `  
    <li>
      <h3>Властивість innerHTML</h3>
      <p>
        Ще один спосіб створити DOM-елементи і помістити їх в дерево -
        це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
      </p>
    </li>
  `
);
// 20 - очисти список

listEL.innerHTML = '';

// Завдання 2:
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numContainer = document.querySelector('.number-container');

function numberTemplate() {
  const randomNum = randomNumber();
  const item = `<div class="number ${
    randomNum % 2 === 0 ? 'even' : 'odd'
  }">${randomNum}</div>`;
  return item;
}

function numbersTemplate() {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(numberTemplate());
  }

  numContainer.innerHTML = arr.join('');
}

numbersTemplate();

// Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення.
// Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const formEl = document.querySelector('.js-contact-form');
const inputEl = document.querySelector('.js-username-input');
const spanEl = document.querySelector('.js-username-output');

inputEl.addEventListener('input', e => {
  const value = inputEl.value.trim();

  if (value.length < 6) {
    inputEl.classList.toggle('error');
  } else {
    inputEl.classList.toggle('success');
  }
  spanEl.textContent = value;
  if (value === '') {
    spanEl.textContent = 'Anonymous';
  }
});

inputEl.addEventListener('focus', () => {
  if (inputEl.value.trim() === '') {
    inputEl.style.outline = '3px solid red';
  } else {
    inputEl.style.outline = '3px solid lime';
  }
});

inputEl.addEventListener('blur', () => {
  if (inputEl.value.trim() === '') {
    inputEl.style.outline = '3px solid red';
  } else {
    inputEl.style.outline = '3px solid lime';
  }
});

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const inputValue = formData.get('userName');
  const checkboxValue = Boolean(formData.get('accept'));

  if (inputValue.trim() !== '' && checkboxValue) {
    console.log({ username: inputValue });
  } else {
    alert('Спробуйте ще раз');
  }
  e.target.reset();
  spanEl.textContent = 'Anonymous';
});

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const square = document.querySelector('.box');
const decrease = document.querySelector('.js-decrease');
const increase = document.querySelector('.js-increase');

let sizes = 50;
console.log(sizes);

decrease.addEventListener('click', () => {
  sizes -= 20;
  square.style.width = `${sizes}px`;
  square.style.height = `${sizes}px`;
});

increase.addEventListener('click', () => {
  sizes += 20;
  square.style.width = `${sizes}px`;
  square.style.height = `${sizes}px`;
});
