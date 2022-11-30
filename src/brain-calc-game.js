import getRandomNumber from './helpers/get-random.js';
import getCalc from './helpers/get-calc.js';
import startGame from './game-engine.js';

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

const getQuestionAndAnswer = () => {
  const question = getRandomExpression();
  const correctAnswer = getCalc(question).toString();
  return [question, correctAnswer];
};

const challenge = 'What is the result of the expression?';

export default () => startGame(getQuestionAndAnswer, challenge);
