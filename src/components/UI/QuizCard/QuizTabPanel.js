import React, { useMemo, useContext } from "react";
import { Typography } from "@material-ui/core";

import QuizChoice from "./QuizChoice";
import classes from "./quiz.module.css";
import QuizContext from "../../../store/quiz_context";
const QuizTabPanel = () => {
  const quizContext = useContext(QuizContext);
  const qs_list = useMemo(() => quizContext.questions);
  return (
    <React.Fragment>
      {qs_list.map((question, index) => (
        <div className={classes.quizCard} key={index}>
          <div className={classes.qusHead}>
            <div className={classes.qsNo}>{index + 1}</div>
            <h3
              dangerouslySetInnerHTML={{
                __html: `${window.atob(question.question)}`,
              }}
            ></h3>
          </div>
          <QuizChoice array={question.incorrect_answers} itemIndex={index} />
        </div>
      ))}
    </React.Fragment>
  );
};
export default React.memo(QuizTabPanel);
