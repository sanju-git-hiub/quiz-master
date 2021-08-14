import { useContext, useState } from "react";
import QuizContext from "../store/quiz_context";
const useCheck = () => {
  const quizCtx = useContext(QuizContext);
  const qs_list = quizCtx.questions;
  const [correctAns, setCorrectAns] = useState(null);
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState(false);
  const checkAnswer = (index, value) => {
    quizCtx.quizTaken();
    setSubmited(true);
    const submitedQs = qs_list[index];
    const correct_answer = submitedQs.correct_answer;
    setCorrectAns(correct_answer);
    const decodedValue = window.btoa(value);
    console.log(decodedValue, correct_answer);
    if (decodedValue == correct_answer) {
      quizCtx.addScore();
    } else {
      setError(true);
    }
  };
  return { correctAns, submited, error, checkAnswer };
};

export default useCheck;
