import getRandomNumber from './helpers/get-random.js';
import isEven from './helpers/is-even.js';

const question = getRandomNumber(1, 100);
const correctAnswer = isEven(question);

export { question, correctAnswer };
