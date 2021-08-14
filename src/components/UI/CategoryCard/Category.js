import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import classes from "./category.module.css";
const QuizCategory = (props) => {
  return (
    <Card className={classes.quizCard}>
      <CardMedia
        className={classes.media}
        image="https://images.pexels.com/photos/6990593/pexels-photo-6990593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="Quzi"
      />
      <CardContent className={classes.quizCardContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.quizTitle}
        >
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuizCategory;
