#!/usr/bin/env node
/* eslint-disable no-restricted-syntax */
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

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

for (const number of riddleNumbers) {
  console.log(`Question: ${number}`);
  const correctAnswer = isEven(number);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}.`
    );
    break;
  }
}

console.log(`Congratulations, ${name}!`);
