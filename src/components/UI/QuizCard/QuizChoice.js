import React, { useMemo, useState } from "react";
import {
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
  Button,
} from "@material-ui/core";
import classes from "./quiz.module.css";
import useCheck from "../../../hooks/useCheck";
const shuffle = (array) => {
  var counter = array.length,
    temp,
    index;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

const QuizChoice = (props) => {
  const [value, setValue] = useState("");
  const shuffleArray = useMemo(() => shuffle(props.array), props.array);
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  const { submited, correctAns, error, checkAnswer } = useCheck();
  const handleCheck = () => {
    if (value !== null) {
      checkAnswer(props.itemIndex, value);
    }
  };
  return (
    <React.Fragment>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
          className={classes.choiceRadio}
        >
          {shuffleArray.map((choice, index) => (
            <FormControlLabel
              value={window.atob(choice)}
              control={<Radio />}
              label={window.atob(choice)}
              disabled={submited && !!value}
              className={`${classes.choiceLabel} 
              ${
                error && window.btoa(value) === choice ? classes.errorSel : null
              } 
              ${submited && choice === correctAns ? classes.correctSel : null}`}
              key={index}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.qsNext}
        onClick={handleCheck}
      >
        Check Answer
      </Button>
    </React.Fragment>
  );
};

export default React.memo(QuizChoice);
