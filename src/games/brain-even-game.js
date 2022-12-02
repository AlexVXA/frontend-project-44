import getRandomNumber from '../helpers/get-random.js';
import startGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const challenge = 'Answer "yes" if the number is even, otherwise answer "no"';

export default () => startGame(getQuestionAndAnswer, challenge);
