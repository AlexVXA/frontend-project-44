import readlineSync from 'readline-sync';
import getUsernameAndSayHello from './cli.js';

const startGame = (GetQuestionAndAnswer, challenge) => {
  const userName = getUsernameAndSayHello();
  console.log(challenge);
  for (let i = 1; i < 3; i += 1) {
    const questionAndAnswer = GetQuestionAndAnswer;
    const question = questionAndAnswer[0];
    const correctAnswer = questionAndAnswer[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === 3) {
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
