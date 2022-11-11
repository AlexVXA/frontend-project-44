import readlineSync from 'readline-sync';

const greetingsByName = () => {
  console.log('Welcome to the brain games!');

  const userName = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${userName}!`);
};

export default greetingsByName;
