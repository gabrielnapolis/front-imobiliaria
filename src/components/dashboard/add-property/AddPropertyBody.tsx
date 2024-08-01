"use client";
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo";
import Link from "next/link";
import NiceSelect from "@/ui/NiceSelect";
import NumberNiceSelect from "@/ui/NumberNiceSelect";

const AddPropertyBody = () => {
  const selectHandler = (e: any) => {};

  const amenities: string[] = [
    "Ar-condicionado", // A/C & Heating
    "Garagens", // Garages
    "Piscina", // Swimming Pool
    "Estacionamento", // Parking
    "Jardim", // Garden
    "Acesso para Deficientes", // Disabled Access
    "Aceita Animais", // Pet Friendly
    "Pé Direito", // Ceiling Height
    "Geladeira", // Refrigerator
    "Wi-Fi", // Wifi
    "Churrasqueira", // Barbeque
    "Lavanderia", // Laundry
    "Secadora", // Dryer
    "Elevador", // Elevator
  ];

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeaderTwo title="Adicionar Novo Imóvel" />
        <h2 className="main-title d-block d-lg-none">Adicionar Novo Imóvel</h2>

        {/* Visão Geral */}
        <div className="bg-white card-box border-20">
          <h4 className="dash-title-three">Visão Geral</h4>
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Nome da Propriedade*</label>
            <input type="text" placeholder="Nome da Propriedade" />
          </div>
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Descrição*</label>
            <textarea
              className="size-lg"
              placeholder="Fale sobre o local..."
            ></textarea>
          </div>
          <div className="row align-items-end">
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Categoria*</label>
                <NiceSelect
                  className="nice-select"
                  options={[
                    { value: "Apartamento", text: "Apartamento" },
                    { value: "Condominio", text: "Condomínio" },
                    { value: "Casa", text: "Casa" },
                    { value: "Vila", text: "Vila" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Listado em*</label>
                <NiceSelect
                  className="nice-select"
                  options={[
                    { value: "1", text: "Todos" },
                    { value: "2", text: "Venda" },
                    { value: "3", text: "Aluguel" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Preço*</label>
                <input type="text" placeholder="Preço" />
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
                <label htmlFor="">Tamanho em metros*</label>
                <input type="text" placeholder="Ex: 3.210 m2" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Quartos*</label>
                <NumberNiceSelect
                  className="nice-select"
                  options={[
                    { value: 1, text: 0 },
                    { value: 2, text: 1 },
                    { value: 3, text: 2 },
                    { value: 4, text: 3 },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Banheiros*</label>
                <NumberNiceSelect
                  className="nice-select"
                  options={[
                    { value: 1, text: 0 },
                    { value: 2, text: 1 },
                    { value: 3, text: 2 },
                    { value: 4, text: 3 },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Cozinhas*</label>
                <NumberNiceSelect
                  className="nice-select"
                  options={[
                    { value: 1, text: 0 },
                    { value: 2, text: 1 },
                    { value: 3, text: 2 },
                    { value: 4, text: 3 },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Garagem</label>
                <NumberNiceSelect
                  className="nice-select"
                  options={[
                    { value: 1, text: 1 },
                    { value: 2, text: 2 },
                    { value: 3, text: 3 },
                    { value: 4, text: 4 },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Ano de Construção*</label>
                <input type="text" placeholder="Ano de Construção" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Andar*</label>
                <NumberNiceSelect
                  className="nice-select"
                  options={[
                    { value: 1, text: 1 },
                    { value: 2, text: 2 },
                    { value: 3, text: 3 },
                    { value: 4, text: 4 },
                    { value: 5, text: 5 },
                    { value: 6, text: 6 },
                    { value: 7, text: 7 },
                    { value: 8, text: 8 },
                    { value: 9, text: 9 },
                    { value: 10, text: 10 },
                    { value: 11, text: 11 },
                    { value: 12, text: 12 },
                    { value: 13, text: 13 },
                    { value: 14, text: 14 },
                    { value: 15, text: 15 },
                    { value: 16, text: 16 },
                    { value: 17, text: 17 },
                    { value: 18, text: 18 },
                    { value: 19, text: 19 },
                    { value: 20, text: 20 },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fotos e Vídeos */}
        <div className="bg-white card-box border-20 mt-40">
          <h4 className="dash-title-three">Anexar Fotos e Vídeos</h4>
          <div className="dash-input-wrapper mb-20">
            <label htmlFor="">Arquivos*</label>

            <div className="attached-file d-flex align-items-center justify-content-between mb-15">
              <span>PorpertyImage_01.jpg</span>
              <Link href="#" className="remove-btn">
                <i className="bi bi-x"></i>
              </Link>
            </div>
            <div className="attached-file d-flex align-items-center justify-content-between mb-15">
              <span>PorpertyImage_02.jpg</span>
              <Link href="#" className="remove-btn">
                <i className="bi bi-x"></i>
              </Link>
            </div>
          </div>
          <div className="dash-btn-one d-inline-block position-relative me-3">
            <i className="bi bi-plus"></i>
            Upload File
            <input type="file" id="uploadCV" name="uploadCV" placeholder="" />
          </div>
        </div>

        {/* Comodidade */}
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

        {/* Endereço e Localização */}
        <div className="bg-white card-box border-20 mt-40">
          <h4 className="dash-title-three">Endereço e Localização</h4>
          <div className="row">
            <div className="col-12">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Endereço*</label>
                <input type="text" placeholder="Av, Rua, Quadra, Lote, N°" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">País*</label>
                <NiceSelect
                  className="nice-select"
                  options={[{ value: "1", text: "Brasil" }]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">CEP*</label>
                <input type="number" placeholder="01153-000 " />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Estado*</label>
                <NiceSelect
                  className="nice-select"
                  options={[
                    { value: "1", text: "Maine" },
                    { value: "2", text: "Tokyo" },
                    { value: "3", text: "Delhi" },
                    { value: "4", text: "Shanghai" },
                    { value: "5", text: "Mumbai" },
                    { value: "6", text: "Bangalore" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Cidade*</label>
                <NiceSelect
                  className="nice-select"
                  options={[
                    { value: "1", text: "Boston" },
                    { value: "2", text: "Tokyo" },
                    { value: "3", text: "Delhi" },
                    { value: "4", text: "Shanghai" },
                    { value: "5", text: "Mumbai" },
                    { value: "6", text: "Bangalore" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
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

        <div className="button-group d-inline-flex align-items-center mt-30">
          <button className="dash-btn-two tran3s me-3">Cadastrar Imóvel</button>
          <Link href="#" className="dash-cancel-btn tran3s">
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyBody;
