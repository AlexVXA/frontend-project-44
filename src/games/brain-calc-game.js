import getRandomNumber from '../helpers/get-random.js';
import startGame from '../index.js';

const operators = ['-', '+', '*'];

const getRandomOperator = (arr) => {
  const initialIndex = 0;
  const lastIndex = arr.length - 1;
  return arr[getRandomNumber(initialIndex, lastIndex)];
};

const getRandomExpression = () => {
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const operator = getRandomOperator(operators);
  const randomExpression = `${firstOperand} ${operator} ${secondOperand}`;

  return randomExpression.toString();
};

const getCalc = (str) => {
  const [firstValue, operator, secondValue] = str.split(' ');
  const a = Number(firstValue);
  const b = Number(secondValue);

  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      throw new Error('invalid expression');
  }
};

const getQuestionAndAnswer = () => {
  const question = getRandomExpression();
  const correctAnswer = getCalc(question).toString();
  return [question, correctAnswer];
};

const challenge = 'What is the result of the expression?';

export default () => startGame(getQuestionAndAnswer, challenge);
