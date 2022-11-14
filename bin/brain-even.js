#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../src/helpers/get-random.js';

console.log('Welcome to the brain games!');

const userName = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const startBrainEvenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const correctAnswer = isEven(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      break;
    }
  }
};

startBrainEvenGame();
