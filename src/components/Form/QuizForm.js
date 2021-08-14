import { useState, useRef } from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";
import classes from "./form.module.css";
const QuizForm = (props) => {
  const [selectValue, setselectValue] = useState({
    diff: "any",
    type: "any",
  });
  const noQuiz = useRef();
  const handleChange = (e) => {
    setselectValue((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitedValues = {
      amnt: noQuiz.current.value,
      diff: selectValue.diff === "any" ? "" : selectValue.diff,
      type: selectValue.type === "any" ? "" : selectValue.type,
    };
    props.onSubmit(submitedValues);
  };
  return (
    <Paper
      component="form"
      className={classes.formWrapper}
      onSubmit={handleSubmit}
      elevation={0}
    >
      <FormControl className={classes.formControl} variant="outlined">
        <TextField
          id="outlined-basic"
          type="number"
          defaultValue={2}
          InputProps={{ inputProps: { min: 2, max: 25 } }}
          label="Number of Questions"
          variant="outlined"
          required
          inputRef={noQuiz}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel>Pick Difficulty</InputLabel>
        <Select
          defaultValue={"any"}
          name="diff"
          onChange={handleChange}
          className={classes.formSelect}
          label="Pick Difficulty"
        >
          <MenuItem value={"any"}>Random</MenuItem>
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel>Pick Type</InputLabel>
        <Select
          defaultValue={"any"}
          name="type"
          className={classes.formSelect}
          label="Pick Type"
          onChange={handleChange}
        >
          <MenuItem value={"any"}>Any Type</MenuItem>
          <MenuItem value={"multiple"}>Multiple Choice</MenuItem>
          <MenuItem value={"boolean"}>True / False</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Take Quiz
      </Button>
    </Paper>
  );
};

export default QuizForm;
