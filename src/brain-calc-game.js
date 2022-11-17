import getRandomNumber from './helpers/get-random.js';

const operators = ['-', '+', '*'];

const getRandomOperator = (arr) => {
  const initialIndex = 0;
  const lastIndex = arr.length - 1;
  return arr[getRandomNumber(initialIndex, lastIndex)];
};

const getRandomExpression = () => {
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const randomExpression = `${firstOperand} ${getRandomOperator(
    operators,
  )} ${secondOperand}`;

  return randomExpression.toString();
};

const roundCount = 3;

const getQuestionsAndAnswers = () => {
  let i = 0;
  const result = [];

  while (i < roundCount) {
    const question = getRandomExpression();
    const correctAnswer = eval(question).toString();
    result[i] = [question, correctAnswer];
    i += 1;
  }
  return result;
};

const questionsAndAnswers = getQuestionsAndAnswers();

const challenge = 'What is the result of the expression?';

export { questionsAndAnswers, challenge };
