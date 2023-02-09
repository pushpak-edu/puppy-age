import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StrictMode } from 'react';

import "./styles.css";

function App() {

  const [inputPuppyAge, setInputPuppyAge] = React.useState("");
  const [result, setResult] = React.useState("");

  return (
    <div className="App">

      <p className="title">The Puppy Age by (Pushpak - 591)</p>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Puppy Ages :
          </p>
        </p>
        <input
          className="buttonStyle"
          onChange={(e) => setInputPuppyAge(e.target.value)}
          value={inputPuppyAge}
          type="text">
        </input>
      </div>

      <div>
        <button className="buttonStyle"
          onClick={() => setResult("Your doggie is " + inputPuppyAge * 7 + " years old in dog years!")}
          type="button">Submit</button>
      </div>


      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Your Puppy Age calculation is :
          </p>
        </p>
        <p className="buttonStyle">
          {result}
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, rootElement);
