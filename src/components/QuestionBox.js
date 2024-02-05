import { useState } from 'react';
import "./Style.css";
import Result from "./Result";

function QuestionBox(props) {

  const [number, setNumber] = useState(0);
  const [highlight, sethighlight] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (e) => {
    setNumber(number + 1);
    sethighlight(false);
    if (e.target.getAttribute("istrue") === "true") {
      setScore(score + 1);
    }
  };

  const highlightText = () => {
    sethighlight(true);
  };

  const removeHighlight = () => {
    sethighlight(false);
  };

  const reset = () => {
    setNumber(0);
    sethighlight(false);
    setScore(0);
  };

  let Questiondisplay;
  if (number < 5) {
    const questionClass = highlight ? "highlighted" : "not-highlighted";
    Questiondisplay = (
      <div className="container">
        <div className="indicator">
          <h3 className="indicator-text">Question: {number + 1} of 5</h3>
        </div>
        <div className="question">
          <h2 className={questionClass}>{props.data[number].text}</h2>
        </div>
        <div className="options-container">
          {props.data[number].options.map((option, index) => (
            <p
              key={index}
              className="option"
              onClick={handleClick}
              istrue={`${option.isCorrect}`}
            >
              {option.text}
            </p>
          ))}
        </div>
        <div className="highlight-buttons">
          <div className="highlight" onClick={highlightText}>
            Highlight
          </div>
          <div className="remove-highlight" onClick={removeHighlight}>
            Remove Highlight
          </div>
        </div>
      </div>
    );
  } else {
    Questiondisplay = <Result score={score} reset={reset} />;
  }

  return <div>{Questiondisplay}</div>;
}



export default QuestionBox;
