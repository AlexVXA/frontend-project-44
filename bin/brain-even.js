#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../src/get-random.js';

console.log('Welcome to the brain games!');

const name = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const riddleNumbers = [
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
];

const isEven = (number) => {
  return number % 2 === 0 ? 'yes' : 'no';
};

console.log(riddleNumbers); // delete it

for (const number of riddleNumbers) {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (isEven(number) === answer) {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
    break;
  }
}

console.log(`Congratulations ${name}!`);
