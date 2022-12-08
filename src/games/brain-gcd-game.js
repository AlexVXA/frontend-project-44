import getRandomNumber from '../helpers/get-random.js';
import startGame from '../index.js';

const challenge = 'Find the greatest common divisor of given numbers.';

const getPair = () => `${getRandomNumber()} ${getRandomNumber()}`;

const getGCD = (x, y) => {
  if (y === 0) return x;
  return getGCD(y, x % y);
};

const getGCDfromQuestion = (value) => {
  const [x, y] = value.split(' ');
  const result = getGCD(x, y);

  return result.toString();
};

const getQuestionAndAnswer = () => {
  const question = getPair();
  const correctAnswer = getGCDfromQuestion(question);
  return [question, correctAnswer];
};

export default () => startGame(getQuestionAndAnswer, challenge);
