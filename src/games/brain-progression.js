import getRandomNumber from '../helpers/get-random.js';
import getRandomFromRangeOf from '../helpers/get-random-from-range.js';
import startGame from '../index.js';

const challenge = 'What number is missing in the progression?';

const getLength = () => getRandomFromRangeOf(5, 10); // https://disk.yandex.ru/i/-cwbT1etAjGkug
const getProgStep = () => getRandomFromRangeOf(2, 5); // progr step are chosen randomly from 2 to 5

const getProgression = (length, step, number) => {
  const result = [];
  for (let i = number; result.length < length; i += step) {
    result.push(i);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression(getLength(), getProgStep(), getRandomNumber());
  const hiddenValueIndex = getRandomFromRangeOf(0, progression.length - 1);
  const answer = progression[hiddenValueIndex].toString();
  progression[hiddenValueIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => startGame(getQuestionAndAnswer, challenge);
