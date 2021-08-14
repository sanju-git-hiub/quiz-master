import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import QuizList from "../components/UI/CategoryCard/CategoryList";
import Modal from "../components/UI/Modal/Modal";
import QuizForm from "../components/Form/QuizForm";
import Loading from "../components/UI/Loader/Loading";
import QuizContext from "../store/quiz_context";
let quizCat = null;
const HomeScreen = () => {
  const [modalisShown, setmodalisShown] = useState(false);
  const [loader, setLoader] = useState(false);
  const quizContext = useContext(QuizContext);
  const history = useHistory();
  useEffect(() => {
    return () => {
      setLoader(false);
      setmodalisShown(false);
    };
  }, []);

  const closeModal = () => {
    setmodalisShown(false);
  };

  const handleOptions = (quizId) => {
    setmodalisShown(true);
    quizCat = quizId;
  };
  const createQuiz = async (options) => {
    setLoader(true);
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${options.amnt}&difficulty=${options.diff}&type=${options.type}&category=${quizCat}&encode=base64`
    );
    const data = await res.json();
    quizContext.fetchQs(data.results);
    history.push("/take-quiz");
  };
  return (
    <Container fixed>
      <QuizList onChoose={handleOptions} />
      {modalisShown && (
        <Modal onClose={closeModal}>
          {loader && <Loading />}
          <QuizForm onSubmit={createQuiz} />
        </Modal>
      )}
    </Container>
  );
};

export default HomeScreen;
