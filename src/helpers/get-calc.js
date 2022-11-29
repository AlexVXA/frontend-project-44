const getCalc = (str) => {
  const [firstValue, operator, secondValue] = str.split(' ');
  const a = Number(firstValue);
  const b = Number(secondValue);

  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      return 'invalid expression';
  }
};

export default getCalc;
