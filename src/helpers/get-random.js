const getRandomNumber = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export default () => getRandomNumber(1, 100); // return random number from 1 to 100
