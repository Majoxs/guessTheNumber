'use strict';

const guessTheNumber = function () {

   const isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
   };
   const randomNumber = Math.floor(Math.random() * 100) + 1;

   const compare = function (randomNumber) {

      let userNumber = prompt('Угадай число от 1 до 100');

      if (userNumber === null) {
         alert('Игра окончена.');
         return;
      } else if (isNumber(userNumber)) {
         if (userNumber < randomNumber) {
            alert('Загаданное число больше');
         } else if (userNumber > randomNumber) {
            alert('Загаданное число меньше');
         } else if (userNumber == randomNumber) {
            alert('Поздравляю, Вы угадали!!!');
            return;
         }
      } else {
         alert('Введи число!');
      }

      console.log('Число пользователя: ' + userNumber, typeof userNumber);
      console.log('Загаданное число: ' + randomNumber, typeof randomNumber);

      compare(randomNumber);
   }
   compare(randomNumber);
}

guessTheNumber();