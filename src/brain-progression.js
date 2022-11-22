import getRandomNumber from './helpers/get-random.js';

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
  const progArray = progression.split(' ');
  const hiddenValueIndex = progArray.indexOf('..');
  if (hiddenValueIndex === 0) {
    const postHidden = Number(progArray[1]);
    const subsequent = Number(progArray[2]);
    const progStep = subsequent - postHidden;
    return postHidden - progStep;
  }
  if (hiddenValueIndex === progArray.length - 1) {
    const preHidden = Number(progArray[hiddenValueIndex - 1]);
    const antecedent = Number(progArray[hiddenValueIndex - 2]);
    const progStep = preHidden - antecedent;
    return preHidden + progStep;
  }
  const preHidden = Number(progArray[hiddenValueIndex - 1]);
  const postHidden = Number(progArray[hiddenValueIndex + 1]);
  const progStep = (postHidden - preHidden) / 2;
  return postHidden - progStep;
};

const roundCount = 3;

const getQuestionsAndAnswers = () => {
  let i = 0;
  const result = [];

  while (i < roundCount) {
    const question = getIncompleteProgression();
    const correctAnswer = getHiddenValue(question).toString();
    result[i] = [question, correctAnswer];
    i += 1;
  }
  return result;
};

const questionsAndAnswers = getQuestionsAndAnswers();

const challenge = 'What number is missing in the progression?';

export { questionsAndAnswers, challenge };
