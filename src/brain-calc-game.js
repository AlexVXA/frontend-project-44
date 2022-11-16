import getRandomNumber from './helpers/get-random.js';

const operators = ['-', '+', '*'];

const getRandomOperator = (operators) => {
  const initialIndex = 0;
  const lastIndex = operators.length - 1;
  return operators[getRandomNumber(initialIndex, lastIndex)];
};

const getRandomExpression = () => {
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const randomExpression = `${firstOperand} ${getRandomOperator(
    operators,
  )} ${secondOperand}`;

  return randomExpression.toString();
};

const getQuestionsAndAnswers = 

const question = getRandomExpression();

const correctAnswer = eval(question);
