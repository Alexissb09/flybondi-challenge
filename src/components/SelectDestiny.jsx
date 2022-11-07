import { useState } from "react";

import { Flights } from "./Flights";

import Button from "react-bootstrap/Button";

export const SelectDestiny = () => {
  const [destiny, setDestiny] = useState("");
  const [budget, setBudget] = useState(0);

  const handleButton = (e) => {
    setDestiny(e.target.value);
    console.log(e.target.value)
  };

  const handleBudget = (e) => {
    setBudget(e.target.value);
    console.log(e.target.value)
  };

  return (
    <div>
      <div>
        <h2>Donde queres ir?</h2>
        <Button
          onClick={handleButton}
          value={"COR"}
          type="submit"
          variant="primary"
          size="lg"
        >
          Cordoba
        </Button>{" "}
        <Button
          onClick={handleButton}
          value={"MDZ"}
          variant="primary"
          size="lg"
        >
          Mendoza
        </Button>{" "}
        <Button
          onClick={handleButton}
          value={"BRC"}
          variant="primary"
          size="lg"
        >
          Bariloche
        </Button>{" "}
      </div>

      <div>
        <h2>Cual es tu presupuesto?</h2>
        <form onChange={handleBudget}>
          <input type="number" />{" "}
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Flights destiniy={destiny} budget={budget} />
    </div>
  );
};
