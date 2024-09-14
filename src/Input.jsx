import React from "react";
import styles from "./Input.module.css";

const InputFood = ({ handleInput }) => {
  return (
    <input
      type="text"
      className={styles.InputFood}
      placeholder="input food items here"
      id="input"
      onKeyDown={handleInput}
    />
  );
};

export default InputFood;
