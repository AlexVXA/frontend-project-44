import getRandomNumber from './helpers/get-random.js';

const getGCDpair = () => {
  const firstValue = getRandomNumber(0, 100);
  const secondValue = getRandomNumber(0, 100);

  return `${firstValue} ${secondValue}`;
};

const getGCD = (x, y) => {
  if (y === 0) return x;
  return getGCD(y, x % y);
};

const getGCDfromQuestion = (value) => {
  const toArray = value.split(' ');
  const x = toArray[0];
  const y = toArray[1];
  const result = getGCD(x, y);

  return result.toString();
};

const roundCount = 3;

const getQuestionsAndAnswers = () => {
  let i = 0;
  const result = [];

  while (i < roundCount) {
    const question = getGCDpair();
    const correctAnswer = getGCDfromQuestion(question);
    result[i] = [question, correctAnswer];
    i += 1;
  }
  return result;
};

const questionsAndAnswers = getQuestionsAndAnswers();

const challenge = 'Find the greatest common divisor of given numbers.';

export { questionsAndAnswers, challenge };
