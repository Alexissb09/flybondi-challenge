import { useState, useEffect } from "react";
import data from "../../dataset.json";

export const Flights = ({ destiny, budget }) => {
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    const searchFlight = data.filter(
      (flight) => flight.price <= budget && flight.destination == destiny
    );
    setFlight(searchFlight);
  }, [flight]);

  console.log(flight);

  return (
    <div>
      {searchFlight.map((flight) => {
        <FlightCard flight={flight} />;
      })}
    </div>
  );
};
