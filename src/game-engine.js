import readlineSync from 'readline-sync';
import getRandomNumber from './helpers/get-random.js';
import isEven from './helpers/is-even.js';

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const correctAnswer = isEven(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      break;
    }
  }
};

export default startGame;
