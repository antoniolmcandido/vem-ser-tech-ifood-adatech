import React from "react";
import Name from '../name'
import './styles.css';
import Image from "../image";
import Description from "../description";
import Button from "../button";

const Card = ({name, src, description, heroButton, type}) => {
  return (
    <div className="card">
      <Image
        src={src}
        className={`card-image-${type}`}
      />
      <Name name={name}/>
      <Description description={description}/>

      <div className="buttons">
        <Button text={'Remover'} heroButton={heroButton} type={type}/>
        <Button text={'Detalhes'} heroButton={heroButton} type={type}/>
      </div>
    </div>
  );
};

export default Card; 