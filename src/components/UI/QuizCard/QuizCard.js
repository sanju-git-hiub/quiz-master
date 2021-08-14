import React, { useContext, useState, useEffect } from "react";
import { useHistory, Prompt } from "react-router-dom";
import { Button, Chip } from "@material-ui/core";
import QuizTabPanel from "./QuizTabPanel";
import QuizContext from "../../../store/quiz_context";
import classes from "./quiz.module.css";
import FaceIcon from "@material-ui/icons/Face";
import Modal from "../../UI/Modal/Modal";
import ShowRank from "../../UI/ShowRank/ShowRank";
import Counter from "./Counter";

const QuizCard = () => {
  const quizCtx = useContext(QuizContext);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [timeOver, setTimeOver] = useState(false);
  const [quizFinish, setQuizFinish] = useState(false);
  const { score, isQuizTaken, questions } = quizCtx;
  const totalQs = questions.length;
  const totalTime = questions.length * 15;
  const handleFinish = () => {
    setQuizFinish(true);
    setShowModal(true);
  };
  const resetQuiz = () => {
    history.replace("/");
  };
  const handleCountEnd = () => {
    setTimeOver(true);
    setShowModal(true);
  };
  useEffect(() => {
    return () => {
      setShowModal(false);
      setTimeOver(false);
      quizCtx.resetScore();
    };
  }, []);
  return (
    <React.Fragment>
      <Prompt
        when={isQuizTaken && !showModal}
        message="Are you sure you want to leave?"
      />

      <Chip icon={<FaceIcon />} label={`Score ${score} - ${totalQs}`} />
      <hr />
      <Counter
        totalTime={totalTime}
        onCountStops={handleCountEnd}
        isQuizFinshed={quizFinish}
      />
      <QuizTabPanel />
      {isQuizTaken && (
        <Button
          variant="contained"
          color="primary"
          className={classes.qsNext}
          onClick={handleFinish}
        >
          Check My Rank
        </Button>
      )}
      <hr />
      {showModal && (
        <Modal onClose={resetQuiz}>
          <ShowRank score={score} total={totalQs} timeOver={timeOver} />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default QuizCard;
