import getRandomNumber from './helpers/get-random.js';

const isPrime = (num) => {
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
  return 'no';
};

const roundCount = 3;

const getQuestionsAndAnswers = () => {
  let i = 0;
  const result = [];

  while (i < roundCount) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isPrime(question).toString();
    result[i] = [question, correctAnswer];
    i += 1;
  }
  return result;
};

const questionsAndAnswers = getQuestionsAndAnswers();

const challenge =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

export { questionsAndAnswers, challenge };
