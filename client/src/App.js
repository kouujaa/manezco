import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import jwtDecoder from "jwt-decode";
import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/SignUp";
import Category from "./components/Category";
import Difficulty from "./components/Difficulty";
import Result from "./components/Result";
import Game from "./components/Game";
import axios from "axios";
import toquestion from "./utility/formatinput";
import UserContext from "./contexts/userContext";
import { withCookies } from "react-cookie";

function App({ cookies }) {
  const [user, setUser] = useState("");
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [fquestions, setFQuestions] = useState([]);
  const [answered, setAnswered] = useState(0);

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (currentQuestion === 20) {
      setShowScore(true);
    }
  }, [currentQuestion]);

  const handleAnswerOptionClick = (isCorrect) => {
    setAnswered(answered + 1);

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
  const logOut = () => {
    cookies.remove("token", { path: "/" });
    window.location = "/login";
  };

  useEffect(() => {
    try {
      const jwt = cookies.get("token");
      const user = jwtDecoder(jwt);
      setUser({ user });
    } catch (err) {
      console.log(err.message);;;
    }
  });

  const location = useLocation();

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <div className="App">
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route
              exact
              path="/login"
              render={(props) => {
                if (user) return <Redirect to="/category" />;
                return <Login {...props} />;
              }}
            />

            <Route
              exact
              path="/signup"
              render={(props) => {
                if (user) return <Redirect to="/category" />;
                                                                return <SignUp {...props} />;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              ;
              }}
            />

            <Route
              exact
              path="/category"
              render={(props) => {
                if (!user) return <Redirect to="/login" />;
                return (
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
                );
              }}
            />

            <Route
              exact
              path="/difficulty"
              render={(props) => {
                if (!user) return <Redirect to="/login" />;
                return (
                  <Difficulty
                    {...props}
                    setDifficulty={setDifficulty}
                    difficulty={difficulty}
                  />
                );
              }}
            />

            <Route
              exact
              path="/game"
              render={(props) => {
                if (!user) return <Redirect to="/login" />;
                return (
                  <Game
                    {...props}
                    // getNextQuestion={getNextQuestion}
                    // getPrevQuestion={getPrevQuestion}
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
                );
              }}
            />

            <Route
              exact
              path="/result"
              render={(props) => {
                if (!user) return <Redirect to="/login" />;
                return (
                  <Result
                    {...props}
                    score={score}
                    setQuestions={setQuestions}
                    setFQuestions={setFQuestions}
                    logOut={logOut}
                  />
                );
              }}
            />

            <Redirect from="/" to="/login" />
          </Switch>
        </AnimatePresence>
      </div>
    </UserContext.Provider>
  );
}

export default withCookies(App);
