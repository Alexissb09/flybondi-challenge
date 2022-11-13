import { useState } from "react";

import { Flights } from "./Flights";

import Button from "react-bootstrap/Button";

export const SelectDestiny = () => {
  const [origin, setOrigin] = useState(null);
  const [destiny, setDestiny] = useState(null);
  const [budget, setBudget] = useState(null);

  const handleOrigin = (e) => {
    setOrigin(e.target.value);
    console.log(e.target.value);
    console.log(origin);
  };

  const handleDestiny = (e) => {
    setDestiny(e.target.value);
    console.log(e.target.value);
    console.log(destiny);
  };

  const handleBudget = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setBudget(e.target.value)
  }

  return (
    <div>
      <div>
        <h2>De donde salis?</h2>
        <Button
          onClick={handleOrigin}
          value={"COR"}
          type="submit"
          variant="primary"
          size="lg"
        >
          Cordoba
        </Button>{" "}
        <Button
          onClick={handleOrigin}
          value={"EPA"}
          variant="primary"
          size="lg"
        >
          Aeroparque
        </Button>{" "}
      </div>

      <div>
        <h2>Donde queres ir?</h2>
        <Button
          onClick={handleDestiny}
          value={"COR"}
          type="submit"
          variant="primary"
          size="lg"
        >
          Cordoba
        </Button>{" "}
        <Button
          onClick={handleDestiny}
          value={"MDZ"}
          variant="primary"
          size="lg"
        >
          Mendoza
        </Button>{" "}
        <Button
          onClick={handleDestiny}
          value={"BRC"}
          variant="primary"
          size="lg"
        >
          Bariloche
        </Button>{" "}
        {
          origin && destiny ? 

          <div><h2>Cual es tu presupuesto?</h2>
          <form onChange={handleBudget}>
            <input type="number" />
          </form></div> : <p></p>
        }
      </div>

      {destiny && origin && budget ? (
        <Flights destiny={destiny} origin={origin} budget={budget}/>
      ) : (
        <p>Ingresa los datos para ofrecerte los viajes disponibles!</p>
      )}
    </div>
  );
};
