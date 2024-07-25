const ammenities_data: string[] = [
  "Ar condicionado",
  "Garagem",
  "Jardim",
  "Elevador",
  "Piscina",
  "Estacionamento",
  "Wifi",
  "Aceita Animais",
];

const CommonAmenities = () => {
  return (
    <>
      <h4 className="mb-20">Comodidades</h4>
      <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
        {ammenities_data.map((list, i) => (
          <li key={i}>{list}</li>
        ))}
      </ul>
    </>
  );
};

export default CommonAmenities;
