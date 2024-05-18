import React from 'react';
import {useParams} from 'react-router-dom';
import Heroes from '../../data';
import './styles.css';

function Details() {
  const {heroButton} = useParams();
  const hero = Heroes.find((hero) => hero.name === heroButton);

  return (
    <div className="container">
      <div className="card">
        <h1 className={`card-title-${hero.type}`}>{hero.name}</h1>
        <img className={`card-image-${hero.type}`} src={hero.src} alt={hero.name}/>
        <p>{hero.description}</p>
        <p>Altura: {hero.height},
          Idade: {hero.age},
          Origem: {hero.origin},
          Raça: {hero.race},
          Tipo: {hero.type}</p>
        <button className={`button-${hero.type}`} onClick={() => window.history.back()}>Voltar</button>
      </div>
    </div>
  );
}

export default Details;