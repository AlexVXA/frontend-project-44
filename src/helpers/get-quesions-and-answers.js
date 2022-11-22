const getQuestionsAndAnswers = (roundCount, question, correctAnswer) => {
  let i = 0;
  const result = [];

  while (i < roundCount) {
    result[i] = [question, correctAnswer];
    i += 1;
  }
  return result;
};

export default getQuestionsAndAnswers;
