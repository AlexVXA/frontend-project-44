/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';
import getUsernameAndSayHello from './cli.js';

const startGame = (questionsAndAnswers, challenge) => {
  const userName = getUsernameAndSayHello();
  console.log(challenge);
  for (const questionAndAnswer of questionsAndAnswers) {
    const question = questionAndAnswer[0];
    const correctAnswer = questionAndAnswer[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
