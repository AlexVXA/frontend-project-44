import getRandomNumber from '../helpers/get-random.js';
import starGame from '../game-engine.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return 'no';
  }
  return num > 1 ? 'yes' : 'no';
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question).toString();
  return [question, correctAnswer];
};

const challenge = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => starGame(getQuestionAndAnswer, challenge);
