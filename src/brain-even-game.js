import getRandomNumber from './helpers/get-random.js';
import isEven from './helpers/is-even.js';

const roundCount = 3;
const getQuestionsAndAnswers = () => {
  let i = 0;
  const result = [];

  while (i < roundCount) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question);
    result[i] = [question, correctAnswer];
    i += 1;
  }
  return result;
};

const questionsAndAnswers = getQuestionsAndAnswers();

const challenge = 'Answer "yes" if the number is even, otherwise answer "no"';

export { questionsAndAnswers, challenge };
