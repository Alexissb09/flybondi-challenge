export const FlightCard = ({ flight }) => {
  return (
    <div>
      <p>
        <strong>Dia: </strong>
        {flight.data}
      </p>
      <p>
        <strong>Origen: </strong>
        {flight.origin}
      </p>
      <p>
        <strong>Destino: </strong>
        {flight.destination}
      </p>
      <p>
        <strong>Precio: </strong>
        {flight.price}
      </p>
      <p>
        <strong>Disponibilidad: </strong>
        {flight.availability}
      </p>
    </div>
  );
};
