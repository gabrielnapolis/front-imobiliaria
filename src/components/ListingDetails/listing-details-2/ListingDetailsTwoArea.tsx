"use client";

import CommonLocation from "../listing-details-common/CommonLocation";
import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList";
import { useEffect, useState } from "react";
import Image from "next/image";
import icon_1 from "@/assets/images/icon/icon_47.svg";
import icon_2 from "@/assets/images/icon/icon_48.svg";
import icon_3 from "@/assets/images/icon/icon_49.svg";
import icon_4 from "@/assets/images/icon/icon_50.svg";
import icon_5 from "@/assets/images/icon/icon_51.svg";

const ListingDetailsTwoArea = ({ params }: { params: { property: any } }) => {
  const [property, setProperty] = useState<any>(params.property);

  const formatPrice = (price: number): string => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    setProperty(property);
  }, []);

  return (
    <div className="listing-details-one theme-details-one bg-pink pt-120 lg-pt-100 pb-150 xl-pb-120">
      <div className="video-wrapper">
        <video
          preload=""
          muted={true}
          playsInline={true}
          autoPlay={true}
          loop={true}
        >
          <source
            src="https://creativegigstf.com/video/intro_4.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="container">
        <div className="bg-white shadow4 border-20 p-40 mt-70 lg-mt-50 mb-60">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="property-titlee">{property.name}</h3>
              <div className="d-flex flex-wrap mt-10">
                <div className="list-type text-uppercase mt-15 me-3 bg-white text-dark fw-500text-uppercase border-20">
                  {property.status}
                </div>
                <div className="address mt-15">
                  <i className="bi bi-geo-alt"></i> {property.streetAdress}
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <div className="d-inline-block md-mt-40">
                <div className="price color-dark fw-500">
                  Preço:{formatPrice(property.price)}
                </div>

                <ul className="style-none d-flex align-items-center action-btns">
                  <li className="me-auto fw-500 color-dark">
                    <i className="fa-sharp fa-regular fa-share-nodes me-2"></i>
                    Compartilhar
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="property-feature-list border-top mt-70 lg-mt-50 pt-60 lg-pt-30 pb-30 lg-pb-10">
            <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
              <li>
                <Image src={icon_1} alt="" className="lazy-img icon" />
                <span className="fs-20 color-dark">m2 {property.mts}</span>
              </li>
              <li>
                <Image src={icon_2} alt="" className="lazy-img icon" />
                <span className="fs-20 color-dark">
                  Quartos . {property.bed}
                </span>
              </li>
              <li>
                <Image src={icon_3} alt="" className="lazy-img icon" />
                <span className="fs-20 color-dark">
                  Banheiros . {property.bath}
                </span>
              </li>
              <li>
                <Image src={icon_4} alt="" className="lazy-img icon" />
                <span className="fs-20 color-dark">
                  Cozinha . {property.kitchen}
                </span>
              </li>
              <li>
                <Image src={icon_5} alt="" className="lazy-img icon" />
                <span className="fs-20 color-dark">
                  Tipo . {property.propertyType}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <div className="property-overview bg-white shadow4 border-20 p-40 mb-50">
              <h4 className="mb-20">Visão Geral</h4>
              <p className="fs-20 lh-lg">{property.description}</p>
            </div>
            <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
              <h4 className="mb-20">Características</h4>

              <div className="accordion-style-two mt-45">
                <CommonPropertyFeatureList
                  params={{
                    property: property,
                  }}
                />
              </div>
            </div>

            <div className="property-location mb-50">
              <CommonLocation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsTwoArea;
