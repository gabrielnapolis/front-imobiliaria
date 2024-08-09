"use client";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo";
import Link from "next/link";
import { CreatePropertyDto } from "@/types/createPropertyDto";
import {
  addProperty,
  getCitys,
} from "@/app/dashboard/services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { InputMask } from "@react-input/mask";

export default function AddPropertyBody() {
  const [cities, setCities] = useState<any[]>([]);
  const [selectedState, setSelectedState] = useState<string>("");

  const schema = yup.object({
    name: yup.string().required("Informe o nome do imóvel."),
    description: yup.string().required("Informe a descrição do imóvel."),
    price: yup.number().required().typeError("Informe o preço."),
    propertyType: yup.string().required("Informe e descrição do imóvel."),
    status: yup.string().required(),
    mts: yup
      .number()
      .required()
      .typeError("Informe tamanho do imóvel em metros."),
    city: yup.string().required("Informe a cidade"),
    state: yup.string().required("Informe o estado"),
    neighborhood: yup.string().required("Informe o bairro"),
    streetAdress: yup.string().required("Informe o endereço"),
    bed: yup.number().required().typeError("Selecione."),
    bath: yup.number().required().typeError("Selecione."),
    kitchen: yup.number().required().typeError("Selecione."),
    garages: yup.number().required().typeError("Selecione."),
    ceilingHeight: yup
      .number()
      .required()
      .typeError("Informe pé direito em metros."),
    constructionYear: yup.number().required().typeError("Selecione."),
    security: yup.string().required("Informe a segurança"),
    floors: yup.number().required().typeError("Selecione."),
    hvac: yup.boolean().required().default(false),
    garden: yup.boolean().required().default(false),
    playground: yup.boolean().required().default(false),
    elevator: yup.boolean().required().default(false),
    swimmimgpool: yup.boolean().required().default(false),
    parking: yup.boolean().required().default(false),
    pcdAccess: yup.boolean().required().default(false),
    furnished: yup.boolean().required().default(false),
    wifi: yup.boolean().required().default(false),
    petAllowed: yup.boolean().required().default(false),
    gym: yup.boolean().required().default(false),
    grill: yup.boolean().required().default(false),
  });

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<CreatePropertyDto>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    const response = await addProperty(data);
    console.log(data);
    if (response && response.error) {
      toast.error("Erro ao cadastrar", {
        position: "top-center",
        hideProgressBar: true,
        theme: "colored",
      });
    } else {
      toast.success("Imóvel cadastrado com sucesso!", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: true,
      });
      reset();
      clearErrors();
    }
  };

  useEffect(() => {
    if (selectedState) {
      getCitys(selectedState).then((data) => {
        const cityNames = data.map((city: any) => city.nome);
        setCities(cityNames);
      });
    }
  }, [selectedState]);

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeaderTwo title="Adicionar Novo Imóvel" />
        <h2 className="main-title d-block d-lg-none">Adicionar Novo Imóvel</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Visão Geral */}
          <div className="bg-white card-box border-20">
            <h4 className="dash-title-three">Visão Geral</h4>
            <div className="dash-input-wrapper mb-30">
              <label>Nome do Imóvel*</label>
              <input
                type="text"
                placeholder="Nome do Imóvel"
                {...register("name")}
              />
              <p className="form_error">{errors.name?.message}</p>
            </div>
            <div className="dash-input-wrapper mb-30">
              <label>Descrição*</label>
              <textarea
                className="size-lg"
                placeholder="Fale sobre o local..."
                {...register("description")}
              ></textarea>
              <p className="form_error">{errors.description?.message}</p>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label>Preço*</label>
                <input placeholder="Preço" {...register("price")} />
                <p className="form_error">{errors.price?.message}</p>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label>Tipo do Imóvel*</label>
                  <select className="nice-select" {...register("propertyType")}>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Condominio">Condominio</option>
                    <option value="Casa">Casa</option>
                    <option value="Vila">Vila</option>
                  </select>
                  <p className="form_error">{errors.propertyType?.message}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label>Venda/Aluguel*</label>
                  <select className="nice-select" {...register("status")}>
                    <option value="Aluguel">Aluguel</option>
                    <option value="Venda">Venda</option>
                  </select>
                  <p className="form_error">{errors.status?.message}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label>Status*</label>
                  <select className="nice-select">
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                  {/* <p className="form_error">{errors.name?.message}</p> */}
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
                  <label>Tamanho em metros*</label>
                  <input
                    type="float"
                    placeholder="Ex: 3.210 m2"
                    {...register("mts")}
                  />
                  <p className="form_error">{errors.mts?.message}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label>Segurança</label>
                  <input
                    placeholder="Ex: Câmera, Vigia"
                    {...register("security")}
                  />
                  <p className="form_error">{errors.security?.message}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label>Pé Direito</label>
                  <input
                    type="float"
                    placeholder="Ex: 250m"
                    {...register("ceilingHeight")}
                  />
                  <p className="form_error">{errors.ceilingHeight?.message}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label>Ano de Construção*</label>
                  <select
                    className="nice-select"
                    {...register("constructionYear")}
                  >
                    <option value="">-</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                  <p className="form_error">
                    {errors.constructionYear?.message}
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label>Quartos*</label>
                  <select className="nice-select" {...register("bed")}>
                    <option value="">-</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                  </select>
                  <p className="form_error">{errors.bed?.message}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label>Banheiros*</label>
                  <select className="nice-select" {...register("bath")}>
                    <option value="">-</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                  </select>
                  <p className="form_error">{errors.bath?.message}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label>Cozinhas*</label>
                  <select className="nice-select" {...register("kitchen")}>
                    <option value="">-</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                  </select>
                  <p className="form_error">{errors.kitchen?.message}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label>Garagem</label>
                  <select className="nice-select" {...register("garages")}>
                    <option value="">-</option>
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                  </select>
                  <p className="form_error">{errors.garages?.message}</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label>Andar*</label>
                  <select className="nice-select" {...register("floors")}>
                    <option value="">-</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                  </select>
                  <p className="form_error">{errors.floors?.message}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fotos e Vídeos */}
          {/* <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Anexar Fotos e Vídeos</h4>
            <div className="dash-input-wrapper mb-20">
              <label>Arquivos*</label>

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
          </div> */}

          {/* Comodidades */}
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three m0 pb-5">Selecionar Comodidades</h4>
            <ul className="style-none d-flex flex-wrap filter-input">
              <li>
                <input type="checkbox" {...register("hvac")} />
                <label>Ar-condicionado</label>
              </li>
              <li>
                <input type="checkbox" {...register("swimmimgpool")} />
                <label>Piscina</label>
              </li>
              <li>
                <input type="checkbox" {...register("garden")} />
                <label>Jardim</label>
              </li>
              <li>
                <input type="checkbox" {...register("pcdAccess")} />
                <label>Acesso para Deficientes</label>
              </li>
              <li>
                <input type="checkbox" {...register("petAllowed")} />
                <label>Aceita Animais</label>
              </li>
              <li>
                <input type="checkbox" {...register("wifi")} />
                <label>Wi-Fi</label>
              </li>
              <li>
                <input type="checkbox" {...register("grill")} />
                <label>Churrasqueira</label>
              </li>
              <li>
                <input type="checkbox" {...register("furnished")} />
                <label>Lavanderia</label>
              </li>
              <li>
                <input type="checkbox" {...register("elevator")} />
                <label>Elevador</label>
              </li>
              <li>
                <input type="checkbox" {...register("gym")} />
                <label>Academia</label>
              </li>
              <li>
                <input type="checkbox" {...register("playground")} />
                <label>Playground</label>
              </li>
              <li>
                <input type="checkbox" {...register("parking")} />
                <label>Estacionamento</label>
              </li>
            </ul>
          </div>

          {/* Endereço e Localização */}
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Endereço e Localização</h4>
            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-25">
                  <label>Endereço*</label>
                  <input
                    type="text"
                    placeholder="Av, Rua, Quadra, Lote, N°"
                    {...register("streetAdress")}
                  />
                  <p className="form_error">{errors.streetAdress?.message}</p>
                </div>
              </div>
              <div className="dash-input-wrapper mb-30">
                <label>Bairro</label>
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register("neighborhood")}
                />
                <p className="form_error">{errors.neighborhood?.message}</p>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label>CEP*</label>
                  {/* <input type="number" placeholder="01153-000 " onChange={(e) => handleCepAddress(e.target.value)} /> */}
                  <InputMask
                    mask="_____-___"
                    replacement={{ _: /\d/ }}
                    placeholder="Informe seu CEP"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label>Estado*</label>
                  <select
                    className="nice-select"
                    {...register("state")}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="">Selecione o estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="MA">Maranhão</option>
                    <option value="GO">Goiás</option>
                    <option value="MG">Minas Gerais</option>
                  </select>
                  <p className="form_error">{errors.state?.message}</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label>Cidade*</label>
                  <select className="nice-select" {...register("city")}>
                    <option value="">Selecione a cidade</option>
                    {cities.map((city:any) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <p className="form_error">{errors.city?.message}</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="dash-input-wrapper mb-25">
                <label>Localização*</label>
                <div className="position-relative">
                  <input
                    type="text"
                    placeholder="Insira a localização do Google Maps"
                  />
                  <button className="location-pin tran3s">
                    {/* <Image src={locationImage} alt="" className="lazy-img m-auto" /> */}
                  </button>
                </div>
                {/* <div className="map-frame mt-30">
                  <div className="gmap_canvas h-100 w-100">
                    <iframe
                      className="gmap_iframe h-100 w-100"
                      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="button-group d-inline-flex align-items-center mt-30">
            <button className="dash-btn-two tran3s me-3" type="submit">
              Cadastrar Imóvel
            </button>
            <Link
              href="/dashboard/properties-list"
              className="dash-cancel-btn tran3s"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
