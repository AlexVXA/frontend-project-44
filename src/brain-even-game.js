import getRandomNumber from './helpers/get-random.js';
import isEven from './helpers/is-even.js';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const challenge = 'Answer "yes" if the number is even, otherwise answer "no"';

export { getQuestionAndAnswer, challenge };
