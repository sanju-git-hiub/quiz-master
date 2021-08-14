import React, { Fragment, useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AppHeader from "./components/UI/Header/HeaderComponent";
import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import QuizContext from "./store/quiz_context";
import "./App.css";

function App() {
  const quizContext = useContext(QuizContext);
  const isQuizActive = quizContext.questions.length > 0;
  return (
    <BrowserRouter>
      <Fragment>
        <AppHeader />
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/take-quiz" exact>
            {isQuizActive ? <QuizScreen /> : <Redirect to="/" />}
          </Route>
          <Route path="*">
            <HomeScreen />
          </Route>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
