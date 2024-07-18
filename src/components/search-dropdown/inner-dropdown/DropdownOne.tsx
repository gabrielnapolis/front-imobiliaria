import NiceSelect from "@/ui/NiceSelect"
import PriceRange from "../../common/PriceRange";

const ammenities_data: string[] = ["A/C & Heating", "Garages", "Garden", "Disabled Access", "Swimming Pool", "Parking", "Wifi", "Pet Friendly", "Ceiling Height", "Fireplace", "Play Ground", "Elevator"]

const DropdownOne = ({
   handleBathroomChange,
   handleBedroomChange,
   handleSearchChange,
   handlePriceChange,
   maxPrice,
   priceValue,
   handleResetFilter,
   selectedAmenities,
   handleAmenityChange,
   handleLocationChange,
   handleStatusChange, }: any) => {

   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="row gx-lg-5">
            <div className="col-12">
               <div className="input-box-one mb-35">
                  <div className="label">Estou buscando por...</div>
                  <NiceSelect className="nice-select fw-normal"
                     options={[
                        { value: "apartments", text: "Apartamentos" },
                        { value: "condos", text: "Casas" },
                     ]}
                     defaultCurrent={0}
                     onChange={handleStatusChange}
                     name=""
                     placeholder="" />
               </div>
            </div>
            
            <div className="col-12">
               <div className="input-box-one mb-35">
                  <div className="label">Palavas Chave</div>
                  <input onChange={handleSearchChange} type="text" placeholder="alugar, comprar, casa, apartamento"
                     className="type-input" />
               </div>
            </div>

            <div className="col-12">
               <div className="input-box-one mb-50">
                  <div className="label">Localização</div>
                  <NiceSelect className="nice-select location fw-normal"
                     options={[
                        { value: "washington", text: "São Luís do Maranhã" },
                     ]}
                     defaultCurrent={0}
                     onChange={handleLocationChange}
                     name=""
                     placeholder="" />
               </div>
            </div>

            <div className="col-sm-6">
               <div className="input-box-one mb-40">
                  <div className="label">Quartos</div>
                  <NiceSelect className="nice-select fw-normal"
                     options={[
                        { value: "1", text: "1" },
                        { value: "2", text: "2" },
                        { value: "3", text: "3" },
                        { value: "4", text: "4" },
                     ]}
                     defaultCurrent={0}
                     onChange={handleBedroomChange}
                     name=""
                     placeholder="" />
               </div>
            </div>

            <div className="col-sm-6">
               <div className="input-box-one mb-40">
                  <div className="label">Banheiros</div>
                  <NiceSelect className="nice-select fw-normal"
                     options={[
                        { value: "1", text: "1" },
                        { value: "2", text: "2" },
                        { value: "3", text: "3" },
                        { value: "4", text: "4" },
                     ]}
                     defaultCurrent={0}
                     onChange={handleBathroomChange}
                     name=""
                     placeholder="" />
               </div>
            </div>

            <div className="col-12">
               <h6 className="block-title fw-bold mb-30">Comodidades</h6>
               <ul
                  className="style-none d-flex flex-wrap justify-content-between filter-input">
                  {ammenities_data.map((list, i) => (
                     <li key={i}>
                        <input
                           type="checkbox"
                           name="Amenities"
                           value={list}
                           checked={selectedAmenities.includes(list)}
                           onChange={handleAmenityChange}
                        />
                        <label>{list}</label>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="col-12">
               <h6 className="block-title fw-bold mt-25 mb-15">Valor</h6>
               <div className="price-ranger">
                  <div
                     className="price-input d-flex align-items-center justify-content-between pt-5">
                     <div className="field d-flex align-items-center">
                        <input type="number" className="input-min" value={priceValue[0]} onChange={() => handlePriceChange} />
                     </div>
                     <div className="divider-line"></div>
                     <div className="field d-flex align-items-center">
                        <input type="number" className="input-max" value={priceValue[1]} onChange={() => handlePriceChange} />
                     </div>
                     <div className="currency ps-1">R$</div>
                  </div>
               </div>
               <PriceRange
                  MAX={maxPrice}
                  MIN={0}
                  STEP={1}
                  values={priceValue}
                  handleChanges={handlePriceChange}
               />
            </div>

            <div className="col-12">
               <h6 className="block-title fw-bold mt-45 mb-20">Metros</h6>
               <div className="d-flex align-items-center sqf-ranger">
                  <input type="text" placeholder="Min" />
                  <div className="divider"></div>
                  <input type="text" placeholder="Max" />
               </div>
            </div>
            <div className="col-12">
               <button className="fw-500 text-uppercase tran3s apply-search w-100 mt-40 mb-25">
                  <i className="fa-light fa-magnifying-glass"></i>
                  <span>Filtrar</span>
               </button>
            </div>

            <div className="col-12">
               <div className="d-flex justify-content-between form-widget">
                  <a onClick={handleResetFilter} style={{ cursor: "pointer" }} className="tran3s">
                     <i className="fa-regular fa-arrows-rotate"></i>
                     <span>Resetar Filtro</span>
                  </a>
               </div>
            </div>
         </div>
      </form>
   )
}

export default DropdownOne