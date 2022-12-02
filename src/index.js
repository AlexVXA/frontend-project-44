import readlineSync from 'readline-sync';

const startGame = (getQuestionAndAnswer, challenge) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(challenge);
  const roundCount = 3;
  for (let i = roundCount; i > 0; i -= 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
