"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo";
import Link from "next/link";
import { CreatePropertyDto } from "@/types/createPropertyDto";
import { addProperty } from "@/app/dashboard/services/api";
import { useEffect, useState } from "react";

export default function AddPropertyBody() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<CreatePropertyDto>({
    defaultValues: {
      hvac: false,
      garden: false,
      playground: false,
      elevator: false,
      swimmimgpool: false,
      parking: false,
      pcdAccess: false,
      furnished: false,
      wifi: false,
      petAllowed: false,
      gym: false,
      grill: false,
    },
  });

  const onSubmit: SubmitHandler<CreatePropertyDto> = async (formData) => {
    //console.log(formData);
    try {
      const response = await addProperty(formData);
      console.log(response);
    } catch {}
  };

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
                {...register("name", {
                  required: "Insira o nome do imóvel",
                })}
              />
              <p className="text-danger">
                <ErrorMessage errors={errors} name="name" />
              </p>
            </div>
            <div className="dash-input-wrapper mb-30">
              <label>Descrição*</label>
              <textarea
                className="size-lg"
                placeholder="Fale sobre o local..."
                {...register("description", {
                  required: "Insira a descrição do imóvel",
                })}
              ></textarea>
              <p className="text-danger">
                <ErrorMessage errors={errors} name="description" />
              </p>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label>Preço*</label>
                <input
                  type="float"
                  placeholder="Preço"
                  {...register("price", { setValueAs: (v) => parseFloat(v) , required:"Insira o preço do imóvel"})}
                />
                <p className="text-danger">
                  <ErrorMessage errors={errors} name="price" />
                </p>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label>Categoria*</label>
                  <select className="nice-select" {...register("propertyType")}>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Condominio">Condominio</option>
                    <option value="Casa">Casa</option>
                    <option value="Vila">Vila</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Venda/Aluguel*</label>
                  <select className="nice-select" {...register("status")}>
                    <option value="Aluguel">Aluguel</option>
                    <option value="Venda">Venda</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Status*</label>
                  <select className="nice-select">
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
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
                  <input
                    type="float"
                    placeholder="Ex: 3.210 m2"
                    {...register("mts", { setValueAs: (v) => parseFloat(v) })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Segurança</label>
                  <input
                    placeholder="Ex: Câmera, Ronda 24h"
                    {...register("security")}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Pé Direito</label>
                  <input
                    type="float"
                    placeholder="Ex: 3.210 m2"
                    {...register("ceilingHeight", {
                      setValueAs: (v) => parseFloat(v),
                    })}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Ano de Construção*</label>
                  <select
                    className="nice-select"
                    {...register("constructionYear", {
                      setValueAs: (v) => parseInt(v),
                    })}
                  >
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
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Quartos*</label>
                  <select
                    className="nice-select"
                    {...register("bed", { setValueAs: (v) => parseInt(v) })}
                  >
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Banheiros*</label>
                  <select
                    className="nice-select"
                    {...register("bath", { setValueAs: (v) => parseInt(v) })}
                  >
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Cozinhas*</label>
                  <select
                    className="nice-select"
                    {...register("kitchen", { setValueAs: (v) => parseInt(v) })}
                  >
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Garagem</label>
                  <select
                    className="nice-select"
                    {...register("garages", { setValueAs: (v) => parseInt(v) })}
                  >
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                  </select>
                </div>
              </div>

              <div className="col-md-3">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Andar*</label>
                  <select
                    className="nice-select"
                    {...register("floors", { setValueAs: (v) => parseInt(v) })}
                  >
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
                </div>
              </div>
            </div>
          </div>

          {/* Fotos e Vídeos */}
          {/* <div className="bg-white card-box border-20 mt-40">
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
                  <label htmlFor="">Endereço*</label>
                  <input
                    type="text"
                    placeholder="Av, Rua, Quadra, Lote, N°"
                    {...register("streetAdress")}
                  />
                </div>
              </div>
              <div className="dash-input-wrapper mb-30">
                <label>Bairro</label>
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register("neighborhood")}
                />
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
                  <select className="nice-select" {...register("state")}>
                    <option value="SP">São Paulo</option>
                    <option value="MA">Maranhão</option>
                    <option value="GO">Goiás</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Cidade*</label>
                  <select className="nice-select" {...register("city")}>
                    <option value="SP">São Paulo</option>
                    <option value="MA">Maranhão</option>
                    <option value="GO">Goiás</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Localização*</label>
                <div className="position-relative">
                  <input
                    type="text"
                    placeholder="Insira a localização do Google Maps"
                  />
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
            <button className="dash-btn-two tran3s me-3" type="submit">
              Cadastrar Imóvel
            </button>
            <Link href="#" className="dash-cancel-btn tran3s">
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
