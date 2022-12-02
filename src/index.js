import readlineSync from 'readline-sync';
import getUsernameAndSayHello from './cli.js';

const startGame = (getQuestionAndAnswer, challenge) => {
  const userName = getUsernameAndSayHello();
  console.log(challenge);
  for (let i = 3; i > 0; i -= 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const [question, correctAnswer] = questionAndAnswer;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === 1) {
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
