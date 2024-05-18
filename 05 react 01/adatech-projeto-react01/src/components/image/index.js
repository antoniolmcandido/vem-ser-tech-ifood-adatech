/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.css";

const Image = (props) => {
  return (
    <img
      className={props.className}
      src={props.src}
    />
  );
};

export default Image;