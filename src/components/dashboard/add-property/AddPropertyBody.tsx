"use client";
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo";
import Link from "next/link";
import NiceSelect from "@/ui/NiceSelect";
import NumberNiceSelect from "@/ui/NumberNiceSelect";
import { useState } from "react";
import { addProperty } from "@/app/dashboard/services/api";
import { CreatePropertyDto } from "@/types/createPropertyDto";


export default function AddPropertyBody() {
  const [formData, setFormData] = useState<CreatePropertyDto>({
    name: "",
    description: "",
    price: 0,
    propertyType: "",
    status: "",
    constructionYear: 0,
    mts: 0,
    bed: 0,
    bath: 0,
    kitchen: 0,
    garages: 0,
    ceilingHeight: 0,
    city: "",
    state: "",
    neighborhood: "",
    streetAdress: "",
    security: "",
    pcdAccess: false,
    parking: false,
    garden: false,
    hvac: false,
    playground: false,
    elevator: false,
    swimmimgpool: false,
    furnished: false,
    wifi: false,
    petAllowed: false,
  });

  const amenities: string[] = [
    "Ar-condicionado", // A/C & Heating
    "Piscina", // Swimming Pool
    "Estacionamento", // Parking
    "Jardim", // Garden
    "Acesso para Deficientes", // Disabled Access
    "Aceita Animais", // Pet Friendly
    "Wi-Fi", // Wifi
    "Churrasqueira", // Barbeque
    "Lavanderia", // Laundry
    "Elevador", // Elevator
  ];

  const selectHandler = (e: any) => { };

  return (
    <form>
      <div className="dashboard-body">
        <div className="position-relative">
          <DashboardHeaderTwo title="Adicionar Novo Imóvel" />
          <h2 className="main-title d-block d-lg-none">Adicionar Novo Imóvel</h2>

          {/* Visão Geral */}
          <div className="bg-white card-box border-20">
            <h4 className="dash-title-three">Visão Geral</h4>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="name">Nome do Imóvel*</label>
              <input
                type="text"
                placeholder="Nome do Imóvel"
                name="name"
                value={formData.name}
                onChange={selectHandler}
              />
            </div>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="description">Descrição*</label>
              <textarea
                className="size-lg"
                placeholder="Fale sobre o local..."
                name="description"
                value={formData.description}
                onChange={selectHandler}
              ></textarea>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="price">Preço*</label>
                <input
                  type="text"
                  placeholder="Preço"
                  name="price"
                  value={formData.price}
                  onChange={selectHandler}
                />
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="propertyType">Categoria*</label>
                  <NiceSelect
                    className="nice-select"
                    placeholder="Apartamento, Condominio, Casa"
                    options={[
                      { value: "Apartamento", text: "Apartamento" },
                      { value: "Condominio", text: "Condomínio" },
                      { value: "Casa", text: "Casa" },
                      { value: "Vila", text: "Vila" },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="propertyType"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="status">Venda/Aluguel*</label>
                  <NiceSelect
                    placeholder=""
                    className="nice-select"
                    options={[
                      { value: "Venda", text: "Venda" },
                      { value: "Aluguel", text: "Aluguel" },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="status"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Detalhes */}
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Detalhes</h4>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="mts">Tamanho em metros*</label>
                  <input
                    type="text"
                    placeholder="Ex: 3.210 m2"
                    name="mts"
                    value={formData.mts}
                    onChange={selectHandler}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="bed">Quartos*</label>
                  <NumberNiceSelect
                    placeholder="quartos"
                    className="nice-select"
                    options={[0, 1, 2, 3, 4, 5].map((value) => ({
                      value,
                      text: value,
                    }))}
                    defaultCurrent={0}
                    onChange={(value) => setFormData({ ...formData, bed: Number(value) })}
                    name="bed"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="bath">Banheiros*</label>
                  <NumberNiceSelect
                    placeholder=""
                    className="nice-select"
                    options={[0, 1, 2, 3, 4].map((value) => ({
                      value,
                      text: value,
                    }))}
                    defaultCurrent={0}
                    onChange={(value) =>
                      setFormData({ ...formData, bath: Number(value) })
                    }
                    name="bath"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="kitchen">Cozinhas*</label>
                  <NumberNiceSelect
                    placeholder=""
                    className="nice-select"
                    options={[1, 2, 3].map((value) => ({ value, text: value }))}
                    defaultCurrent={0}
                    onChange={(value) =>
                      setFormData({ ...formData, kitchen: Number(value) })
                    }
                    name="kitchen"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="garages">Garagem</label>
                  <NumberNiceSelect
                    placeholder=""
                    className="nice-select"
                    options={[1, 2].map((value) => ({ value, text: value }))}
                    defaultCurrent={0}
                    onChange={(value) =>
                      setFormData({ ...formData, garages: Number(value) })
                    }
                    name="garages"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="constructionYear">Ano de Construção*</label>
                  <input
                    type="text"
                    placeholder="Ano de Construção"
                    name="constructionYear"
                    value={formData.constructionYear}
                    onChange={selectHandler}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="ceilingHeight">Andar*</label>
                  <NumberNiceSelect
                    placeholder=""
                    className="nice-select"
                    options={Array.from({ length: 26 }, (_, i) => ({
                      value: i + 1,
                      text: i + 1,
                    }))}
                    defaultCurrent={0}
                    onChange={(value) =>
                      setFormData({ ...formData, ceilingHeight: Number(value) })
                    }
                    name="ceilingHeight"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Amenities
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Comodidades</h4>
            <div className="row">
              {amenities.map((amenity) => (
                <div className="col-md-6 mb-30" key={amenity.name}>
                  <div className="dash-input-wrapper">
                    <label htmlFor={amenity.name}>{amenity.label}</label>
                    <input
                      type="checkbox"
                      name={amenity.name}
                      checked={formData[amenity.name]}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Localização */}
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Endereço e Localização</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="city">Cidade*</label>
                  <input
                    type="text"
                    placeholder="Cidade"
                    name="city"
                    value={formData.city}
                    onChange={selectHandler}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="state">Estado*</label>
                  <input
                    type="text"
                    placeholder="Estado"
                    name="state"
                    value={formData.state}
                    onChange={selectHandler}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="neighborhood">Bairro*</label>
                  <input
                    type="text"
                    placeholder="Bairro"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={selectHandler}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="streetAdress">Endereço*</label>
                  <input
                    type="text"
                    placeholder="Endereço"
                    name="streetAdress"
                    value={formData.streetAdress}
                    onChange={selectHandler}
                  />
                </div>
              </div>

              <div className="col-12">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Localização*</label>
                <div className="position-relative">
                  <input type="text" placeholder="XC23+6XC, Moiran, N105" />
                  <button className="location-pin tran3s">
                    {/* <Image src={locationImage} alt="" className="lazy-img m-auto" /> */}
                  </button>
                </div>
                <div className="map-frame mt-30">
                  <div className="gmap_canvas h-100 w-100">
                    <iframe
                      className="gmap_iframe h-100 w-100"
                      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="button-group d-inline-flex align-items-center mt-30">
            <button className="dash-btn-two tran3s me-3">Cadastrar Imóvel</button>
            <Link href="#" className="dash-cancel-btn tran3s">
              Cancelar
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
