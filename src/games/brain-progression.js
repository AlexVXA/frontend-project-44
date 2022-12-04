import getRandomNumber from '../helpers/get-random.js';
import startGame from '../index.js';

const progLength = () => getRandomNumber(5, 10); // https://disk.yandex.ru/i/-cwbT1etAjGkug
const intialNumber = () => getRandomNumber(1, 100);
const progStep = () => getRandomNumber(2, 5); // progr step are chosen randomly from this range

const getProgression = (length, step, number) => {
  const result = [];
  for (let i = number; result.length < length; i += step) {
    result.push(i);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression(progLength(), progStep(), intialNumber());
  const hiddenValueIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[hiddenValueIndex].toString();
  progression[hiddenValueIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const challenge = 'What number is missing in the progression?';

export default () => startGame(getQuestionAndAnswer, challenge);
