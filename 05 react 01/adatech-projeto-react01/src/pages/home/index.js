import React, {useState} from "react";
import "./styles.css";
import Card from "../../components/card";
import Heroes from "../../data";

function Home() {
  const [heroes, setHeroes] = useState(Heroes);

  const [newHero, setNewHero] = useState({
    name: "",
    height: "",
    age: "",
    origin: "",
    race: "",
    type: "",
    description: "",
    src: "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setNewHero((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHeroes([...heroes, newHero]);
    setNewHero({
      name: "",
      height: "",
      age: "",
      origin: "",
      race: "",
      type: "",
      description: "",
      src: "",
    });
  };

  return (
    <div className="container">
      <div className="cards">
        {heroes.map((hero) => (
          <Card
            name={hero.name}
            src={hero.src}
            description={hero.description}
            text={'Detalhes'}
            heroButton={hero.name}
            type={hero.type}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newHero.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="height">Altura:</label>
          <input
            type="text"
            id="height"
            name="height"
            value={newHero.height}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Idade:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={newHero.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="origin">Origem:</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={newHero.origin}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="race">Raça:</label>
          <input
            type="text"
            id="race"
            name="race"
            value={newHero.race}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type">Tipo:</label>
          <select
            id="type"
            name="type"
            value={newHero.type}
            onChange={handleInputChange}
            required
          >
            <option value="">Escolha um</option>
            <option value="hero">Herói</option>
            <option value="villain">Vilão</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={newHero.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="src">URL da Imagem:</label>
          <input
            type="url"
            id="src"
            name="src"
            value={newHero.src}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Inserir</button>
      </form>
    </div>
  )
}

export default Home;