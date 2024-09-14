import React from "react";
import styles from "./Container.module.css";

const Container = (props) => {
  return (
    <div key={props} className={styles.con}>
      {props.children}
    </div>
  );
};

export default Container;
