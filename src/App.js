import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";


function App() {
  const [lightMode, setLightMode] = useState(false);
  const handletoggleMode = () => {
    setLightMode(!lightMode);

    document.body.style.backgroundColor = lightMode ? "white" : "#716d6e";
  };

  return (
    <>
      <div className="title">
        <div className="title-container">
          <h1>Quiz App</h1>
          <button onClick={handletoggleMode} className="toggle">
            {lightMode ? "Light🌙" : "Dark🔆"}
          </button>
        </div>
      </div>
      <QuestionBox data={questions} />
    </>
  );
}

export default App;
