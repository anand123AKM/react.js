import React, { useState } from "react";
import ErrrorMessage from "./ErrrorMessage";
import Food from "./food";
import "./app.css";
import Container from "./Container";
import InputFood from "./Input";

const App = () => {
  let [foodApi, setfoodApi] = useState([]);

  const onKeyDowm = (event) => {
    if (event.key === "Enter") {
      let newfooditemm = event.target.value;
      event.target.value = "";
      let newfoodApi = [...foodApi, newfooditemm];
      setfoodApi(newfoodApi);
    }
  };

  return (
    <div className="main">
      <Container>
        <h1 className="col2">Healthy-Food </h1>
        <InputFood handleInput={onKeyDowm}></InputFood>
        <ErrrorMessage fooditems={foodApi}></ErrrorMessage>
        <Food fooditems={foodApi} />
      </Container>
    </div>
  );
};

export default App;
