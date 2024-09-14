import React from "react";

const ErrrorMessage = ({ fooditems }) => {
  return (
    <div>
      <>
        {" "}
        {fooditems.length === 0 && (
          <h3 style={{ fontSize: "20px" }}>i am hungry !!!</h3>
        )}
      </>
    </div>
  );
};

export default ErrrorMessage;
