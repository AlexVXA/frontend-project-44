import getRandomNumber from './helpers/get-random.js';

const getProgression = () => {
  const progLength = getRandomNumber(5, 10);
  const progStep = getRandomNumber(2, 5);
  const hiddenValueIndex = getRandomNumber(1, progLength);
  console.log(`hvi: ${hiddenValueIndex}   pl: ${progLength}`);
  const initialNumber = getRandomNumber(1, 100);
  let result = initialNumber;
  let currentValue = result;
  let i = 1;

  while (i <= progLength) {
    if (i === hiddenValueIndex) {
      currentValue += progStep;
      result += ' ..';
      i += 1;
    }
    currentValue += progStep;
    result += ` ${currentValue}`;
    i += 1;
  }
  return result;
};

const a = getProgression();
console.log(a);

const getHiddenValue = (progression) => {
  const progArray = progression.split(' ');
  const hiddenValueIndex = progArray.indexOf('..');
  let result = 0;
  if (hiddenValueIndex === 0) {
    const postHidden = progArray[hiddenValueIndex + 1];
    const subsequent = progArray[hiddenValueIndex + 2];
    const progStep = subsequent - postHidden;
    result = postHidden - progStep;
  }
  if (hiddenValueIndex === progArray.length - 1) {
    const preHidden = progArray[hiddenValueIndex - 1];
    const antecedent = progArray[hiddenValueIndex - 2];
    const progStep = preHidden - antecedent;
    result = preHidden + progStep;
  } else {
    const preHidden = progArray[hiddenValueIndex - 1];
    const postHidden = progArray[hiddenValueIndex + 1];
    const progStep = (postHidden - preHidden) / 2;
    console.log(`s: ${progStep}`);
    result = postHidden - progStep;
  }
  return result.toString();
};

console.log(getHiddenValue(a));
