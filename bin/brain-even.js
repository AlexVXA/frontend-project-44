#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startGame from '../src/game-engine.js';
import { correctAnswer } from '../src/brain-even-game.js';
import { question } from '../src/brain-even-game.js';

console.log('Welcome to the brain games!');

const userName = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no"');

startGame(question, correctAnswer);
