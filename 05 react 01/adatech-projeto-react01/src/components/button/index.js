import React from "react";
import "./styles.css";

const Button = ({text, heroButton, type}) => {

  const handleClick = () => {
    window.location.href = `/details/${heroButton}`;
  };

  return (
    <button className={`button-${type}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
