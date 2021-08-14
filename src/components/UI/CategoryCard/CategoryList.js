import { useContext } from "react";
import { Grid } from "@material-ui/core";
import QuizCategory from "./Category";
import QuizContext from "../../../store/quiz_context";
const QuizList = (props) => {
  const QzCatCtx = useContext(QuizContext);
  const categories = QzCatCtx.qzCats;
  return (
    <Grid container spacing={3}>
      {categories.map((item) => (
        <Grid
          item
          lg={3}
          md={3}
          sm={6}
          xs={12}
          key={item.val}
          onClick={props.onChoose.bind(null, item.val)}
        >
          <QuizCategory text={item.text} />
        </Grid>
      ))}
    </Grid>
  );
};

export default QuizList;
