import { Container, Grid } from "@material-ui/core";
import QuizCard from "../components/UI/QuizCard/QuizCard";
const QuizScreen = () => {
  return (
    <Container>
      <Grid container justifyContent="center" direction="row">
        <Grid item lg={8} xs={12}>
          <QuizCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuizScreen;
