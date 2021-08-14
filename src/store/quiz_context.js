import React, { useState } from "react";
import { categories } from "../constatnts/category";

const QuizContext = React.createContext({
  qzCats: [],
  questions: [],
  score: "",
  isQuizTaken: false,
  fetchQs: () => {},
  checkQs: () => {},
  addScore: () => {},
  quizTaken: () => {},
  resetScore: () => {},
  filterCategory: () => {},
});

export default QuizContext;

export const QuizProvider = (props) => {
  const [qsList, setQsList] = useState([]);
  const [qzCategories, setQzCategories] = useState(categories);
  const [score, setScore] = useState(0);
  const [isQuizTaken, setisQuizTaken] = useState(false);
  const fetchQues = (quizlist) => {
    quizlist.map((quiz) => {
      quiz.incorrect_answers.push(quiz.correct_answer);
    });
    setQsList(quizlist);
  };
  const checkAnsw = (index) => {};
  const scoreCalc = () => {
    setScore((prevScore) => +prevScore + 1);
  };
  const quizTaken = () => {
    if (!isQuizTaken) {
      setisQuizTaken(true);
    }
  };
  const filterCategory = (search) => {
    let filteredElm = qzCategories.filter((x) => x.text == search);
    setQzCategories(filteredElm);
  };
  const resetScore = () => setScore(0);
  const choices = {
    qzCats: qzCategories,
    questions: qsList,
    score: score,
    isQuizTaken: isQuizTaken,
    fetchQs: fetchQues,
    checkQs: checkAnsw,
    addScore: scoreCalc,
    quizTaken: quizTaken,
    resetScore: resetScore,
    filterCategory: filterCategory,
  };
  return (
    <QuizContext.Provider value={choices}>
      {props.children}
    </QuizContext.Provider>
  );
};
