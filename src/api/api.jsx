import axios from "axios";

const decodeHtmlEntities = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.documentElement.textContent;
};

export const fetchQuizData = async (amount, category, difficulty) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const response = await axios.get(url);
  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  return response.data.results.map((data) => ({
    ...data,
    question: decodeHtmlEntities(data.question),
    answers: shuffleArray(data.incorrect_answers.concat(data.correct_answer)).map(answer => decodeHtmlEntities(answer)),
  }));
};