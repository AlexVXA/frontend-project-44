/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';
import getUsernameAndSayHello from './cli.js';

const startGame = (questionsAndAnswers, challenge) => {
  let i = questionsAndAnswers.length;
  const userName = getUsernameAndSayHello();
  console.log(challenge);
  for (const questionAndAnswer of questionsAndAnswers) {
    const [question, correctAnswer] = questionAndAnswer;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i -= 1;
      if (i === 0) {
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
