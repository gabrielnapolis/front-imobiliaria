"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import icon_1 from "@/assets/images/dashboard/icon/icon_18.svg";
import icon_2 from "@/assets/images/dashboard/icon/icon_19.svg";
import icon_3 from "@/assets/images/dashboard/icon/icon_20.svg";
import icon_4 from "@/assets/images/dashboard/icon/icon_21.svg";
import { useEffect, useState } from "react";
import { getAllProperties, getPropertiesByID } from "@/app/imoveis/actions";
import { PropertyType } from "@/data/inner-data/PropertyType";

export default function PropertyTableBody ()  {
   const [listData, setListData] = useState<PropertyType[]>([]);

   const formatPrice = (price: number): string => {
     return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
   };

  useEffect(() => {
    getAllProperties().then((data) => {
      setListData(data);
    });
  });

  return (
    <tbody className="border-0">
      {listData.map((item) => (
        <tr key={item.id}>
          <td>
            <div className="d-lg-flex align-items-center position-relative">
              <div className="ps-lg-4 md-pt-10">
                <Link
                  href="#"
                  className="property-name tran3s color-dark fw-500 fs-20 stretched-link"
                >
                  {item.name}
                </Link>
                <div className="address">{item.state}, {item.city}</div>
                <strong className="price color-dark">
                  {formatPrice(item.price)}
                </strong>
              </div>
            </div>
          </td>
          <td>{item.propertyType}</td>
          <td>
            <div className={`property-status ${item.status}`}>
              {item.status}
            </div>
          </td>
          <td>
            <div className="action-dots float-end">
              <button
                className="action-btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span></span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" href="#">
                    <Image src={icon_1} alt="" className="lazy-img" />{" "}
                    Visualizar
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <Image src={icon_2} alt="" className="lazy-img" />{" "}
                    Compartilhar
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <Image src={icon_3} alt="" className="lazy-img" /> Editar
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <Image src={icon_4} alt="" className="lazy-img" /> Deletar
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

