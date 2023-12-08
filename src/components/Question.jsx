import React, { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const Card = ({ questions }) => {
  const [btnClick, setBtnClick] = useState(false);

  const handleButton = () => {
    setBtnClick(!btnClick);
  };

  return (
    <div className="card-group">
      <div className="card" key={questions.id}>
        <div className="ques-answer">
          <h5>{questions.question}</h5>
          <button className="btn-minus" onClick={handleButton}>
            {btnClick ? arrowup : arrowdown}
          </button>
        </div>
        {btnClick ? <p>{questions.answer} </p> : ""}
      </div>
    </div>
  );
};

export default Card;
