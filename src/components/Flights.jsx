import { useState, useEffect } from "react";
import data from "../../dataset.json";
import { Spinner } from "react-bootstrap";
import { FlightCard } from "./FlightCard";

import styles from "./flights.module.css";

export const Flights = ({ destiny, origin, budget }) => {
  const [flight, setFlight] = useState(null);
  const [flightReturn, setFlightReturn] = useState(null);

  useEffect(() => {
    const foundFlight = data.find(
      (element) =>
        element.origin == origin &&
        element.destination == destiny &&
        element.price <= budget / 2
    );

    foundFlight ? (
      setFlight(foundFlight)
    ) : (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">No hay vuelos disponibles</span>
      </Spinner>
    );

    console.log(foundFlight);
  }, [origin, destiny, budget]);

  useEffect(() => {
    const foundFlightReturn = data.find(
      (element) =>
        element.origin == destiny &&
        element.destination == origin &&
        element.price <= budget / 2 && 
        element.data > flight.data
    );

    foundFlightReturn ? (
      setFlightReturn(foundFlightReturn)
    ) : (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">No hay vuelos disponibles de vuelta</span>
      </Spinner>
    );
  }, [flight]);

  return (
    <div>
      {flight && flightReturn ? (
        <div className={styles.container}>
          <div>
            <p className={styles.typeFlight}>
              <strong>Viaje de ida</strong>{" "}
            </p>
            <FlightCard flight={flight} />
          </div>
          <div>
            <p className={styles.typeFlight}>
              <strong>Viaje de vuelta</strong>
            </p>
            <FlightCard flight={flightReturn} />
          </div>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">
            No hay vuelos disponibles
          </span>
        </Spinner>
      )}
    </div>
  );
};
