import getRandomNumber from '../helpers/get-random.js';
import startGame from '../index.js';

const getProgression = () => {
  const progLength = getRandomNumber(5, 9);
  const progStep = getRandomNumber(2, 5);
  let currentValue = getRandomNumber(1, 100);
  const result = [currentValue];
  let i = 1;

  while (i <= progLength) {
    currentValue += progStep;
    result[i] = currentValue;
    i += 1;
  }
  return result;
};

const getIncompleteProgression = () => {
  const progression = getProgression();
  const progLength = progression.length - 1;
  const hiddenValue = '..';
  const hiddenValueIndex = getRandomNumber(0, progLength);
  progression[hiddenValueIndex] = hiddenValue;

  return progression.join(' ');
};

const getHiddenValue = (progression) => {
  const arr = progression.split(' ');
  const hiddenValueIndex = arr.indexOf('..');
  if (hiddenValueIndex === 0) {
    const x = Number(arr[1]);
    const y = Number(arr[2]);
    const progStep = y - x;
    return x - progStep;
  }
  if (hiddenValueIndex === arr.length - 1) {
    const x = Number(arr[hiddenValueIndex - 1]);
    const y = Number(arr[hiddenValueIndex - 2]);
    const progStep = x - y;
    return x + progStep;
  }
  const x = Number(arr[hiddenValueIndex - 1]);
  const y = Number(arr[hiddenValueIndex + 1]);
  const progStep = (y - x) / 2;
  return y - progStep;
};

const getQuestionAndAnswer = () => {
  const question = getIncompleteProgression();
  const correctAnswer = getHiddenValue(question).toString();
  return [question, correctAnswer];
};

const challenge = 'What number is missing in the progression?';

export default () => startGame(getQuestionAndAnswer, challenge);
