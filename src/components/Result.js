import React from 'react';
import "./Style.css";

function Result(props) {
  const handleClick = () => {
    props.reset();
  };

  return (
    <div className="container">
      <h2>Final Result :</h2>
      <h2>
        {props.score} out of 5 correct - {(props.score / 5) * 100}%
      </h2>
      <button onClick={handleClick} className="replay">
        Play Again
      </button>
    </div>
  );
}
export default Result;