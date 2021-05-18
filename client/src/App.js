import { useState, useEffect} from "react";
import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/SignUp";
import Category from "./components/Category";
import Difficulty from "./components/Difficulty";
import Result from "./components/Result";
import Game from "./components/Game";
import axios from "axios";
import toquestion from "./utility/formatinput";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
const categoryhelper = {
  Mythology: 20,
  General: 9,
  Sports: 21,
  Animals: 27,
  Arts: 25,
  Politics: 24,
  Geography: 22,
  Celebrities: 26,
};
const difficultyhelper = {
  Easy: "easy",
  Medium: "medium",
  Hard: "hard",
};

// const questions = [
// 	{
// 		questionText: 'What is the capital of France?',
// 		answerOptions: [
// 			{ answerText: 'New York', isCorrect: false },
// 			{ answerText: 'London', isCorrect: false },
// 			{ answerText: 'Paris', isCorrect: true },
// 			{ answerText: 'Dublin', isCorrect: false },
// 		],
// 	},
// 	{
// 		questionText: 'Who is CEO of Tesla?',
// 		answerOptions: [
// 			{ answerText: 'Jeff Bezos', isCorrect: false },
// 			{ answerText: 'Elon Musk', isCorrect: true },
// 			{ answerText: 'Bill Gates', isCorrect: false },
// 			{ answerText: 'Tony Stark', isCorrect: false },
// 		],
// 	},
// 	{
// 		questionText: 'The iPhone was created by which company?',
// 		answerOptions: [
// 			{ answerText: 'Apple', isCorrect: true },
// 			{ answerText: 'Intel', isCorrect: false },
// 			{ answerText: 'Amazon', isCorrect: false },
// 			{ answerText: 'Microsoft', isCorrect: false },
// 		],
// 	},
// 	{
// 		questionText: 'How many Harry Potter books are there?',
// 		answerOptions: [
// 			{ answerText: '1', isCorrect: false },
// 			{ answerText: '4', isCorrect: false },
// 			{ answerText: '6', isCorrect: false },
// 			{ answerText: '7', isCorrect: true },
// 		],
// 	},
// ];
function App() {
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [fquestions, setFQuestions] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [pastResult, setpastResult] = useState("");
  const [answered,  setAnswered] = useState(0);;

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (currentQuestion == 20) {
      setShowScore(true);
    }
  }, [currentQuestion]);

  const handleAnswerOptionClick = (isCorrect) => {
        setAnswered(answered+1);;

    if (isCorrect) {
      if (currentQuestion <= 10) {
        setScore(score + 1);
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    const ans = toquestion(questions);

    setFQuestions(ans);
  }, [questions]);

  const fetchQuestions = async () => {
    const tok = await axios.get(
      "https://opentdb.com/api_token.php?command=request"
    );
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple&token=${tok.data.token}`
    );
    setShowScore(true);
    setQuestions(res.data.results);
  };

  const getNextQuestion = (current) => {
    const temp = current;
    currentQuestion((prev) => prev + 1);
  };

  const getPrevQuestion = (current) => {
    const temp = current;
    currentQuestion((prev) => prev - 1);
  };

  const location = useLocation();

  return (
    <div className="App">
      <Switch location={location} key={location.key}>
        {/* <Route
              path="/home"
              render={props => {
                if (this.state.user.status !== "user")
                  return <Redirect to="/signIn" />;
                return (
                  <Category  {...props} />
                );
              }}
            /> */}
        <Route exact path="/login" render={(props) => <Login {...props} />} />

        <Route exact path="/sigup" render={(props) => <SignUp {...props} />} />

        <Route
          exact
          path="/category"
          render={(props) => (
            <Category
              {...props}
              setCategory={setCategory}
              category={category}
              setQuestions={setQuestions}
              setFQuestions={setFQuestions}
              setDifficulty={setDifficulty}
              setScore={setScore}
              score={score}
              setCurrentQuestion={setCurrentQuestion}
              setAnswered={setAnswered}
            />
          )}
        />

        <Route
          exact
          path="/difficulty"
          render={(props) => (
            <Difficulty
              {...props}
              setDifficulty={setDifficulty}
              difficulty={difficulty}
            />
          )}
        />

        <Route
          exact
          path="/game"
          render={(props) => (
            <Game
              {...props}
              getNextQuestion={getNextQuestion}
              getPrevQuestion={getPrevQuestion}
              getQuestions={fetchQuestions}
              setCategory={setCategory}
              setDifficulty={setDifficulty}
              category={category}
              difficulty={difficulty}
              questions={questions}
              currentQuestion={currentQuestion}
              fquestions={fquestions}
              showScore={showScore}
              score={score}
              setCurrent={setCurrentQuestion}
              handleAnswerOptionClick={handleAnswerOptionClick}
              setAnswered={setAnswered}
              answered={answered}
            />
          )}
        />

        <Route
          exact
          path="/result"
          render={(props) => (
            <Result
              {...props}
              score={score}
              setQuestions={setQuestions}
              setFQuestions={setFQuestions}
            />
          )}
        />

        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
