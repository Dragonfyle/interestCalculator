import React, { useState } from "react";

import Header from "./components/Header/Header";
import InputGroup from "./components/InputGroup/InputGroup";
import Result from "./components/Result/Result";

function App() {
  const [inputParams, setInputParams] = useState({});

  const inputIsValid = inputParams.duration > 0;

  function handleChange(input, label) {
    const shortLabel = label.split(" ").slice(0, 1).join("").toLowerCase();
    setInputParams((prevParams) => ({
      ...prevParams,
      [shortLabel]: +input,
    }));
  }

  return (
    <>
      <Header />
      <InputGroup changeHandler={handleChange}></InputGroup>
      {inputIsValid && <Result inputParams={inputParams} />}
      {!inputIsValid && <p className="center">Incorrect duration</p>}
    </>
  );
}

export default App;
