const amenities: string[] = [
   "Ar-condicionado", // A/C & Heating
   "Garagens",                      // Garages
   "Piscina",                       // Swimming Pool
   "Estacionamento",                // Parking
   "Jardim",                        // Garden
   "Acesso para Deficientes",       // Disabled Access
   "Aceita Animais",   // Pet Friendly
   "Pé Direito",                // Ceiling Height
   "Geladeira",                     // Refrigerator
   "Wi-Fi",                         // Wifi
   "Churrasqueira",                 // Barbeque
   "Lavanderia",                    // Laundry
   "Secadora",                      // Dryer
   "Elevador"                       // Elevator
];

const SelectAmenities = () => {
   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three m0 pb-5">Selecionar Comodidades</h4>
         <ul className="style-none d-flex flex-wrap filter-input">
            {amenities.map((amenity, index) => (
               <li key={index}>
                  <input type="checkbox" name="Amenities" value={index} />
                  <label>{amenity}</label>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default SelectAmenities
