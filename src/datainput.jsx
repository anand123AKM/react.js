import React from "react";
import Item from "./item";
import "bootstrap/dist/css/bootstrap.min.css";

const Food = ({ fooditems }) => {
  return (
    <div>
      <ul className={`list-group`}>
        {fooditems.map((item) => (
          <Item key={item} foodit={item}></Item>
        ))}
      </ul>
    </div>
  );
};

export default Food;
