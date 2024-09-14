import React from "react";
import styles from "./item.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Item = (props) => {
  const click = () => {
    alert(`${props.foodit} being bought !! `);
  };
  return (
    <div>
      <li className={`list-group-item`}>
        <span className={styles.col3}>{props.foodit}</span>
        <button
          style={{ marginLeft: "10px" }}
          type="button"
          className={`btn btn-info `}
          onClick={click}
        >
          <span>BUY</span>
        </button>
      </li>
    </div>
  );
};

export default Item;
