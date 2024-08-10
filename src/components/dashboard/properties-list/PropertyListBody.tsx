"use client";

import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import Image from "next/image";
import { getAllProperties } from "@/app/imoveis/actions";
import { PropertyType } from "@/data/inner-data/PropertyType";
import { useState, useEffect } from "react";
import DeleteModal from "@/modals/DeleteModal";
import icon_1 from "@/assets/images/dashboard/icon/icon_18.svg";
import icon_2 from "@/assets/images/dashboard/icon/icon_19.svg";
import icon_3 from "@/assets/images/dashboard/icon/icon_20.svg";
import icon_4 from "@/assets/images/dashboard/icon/icon_21.svg";
import icon_5 from "@/assets/images/icon/icon_46.svg";

const PropertyListBody = () => {
  const [listData, setListData] = useState<PropertyType[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);

  const handleDeleteClick = (id: any) => {
    setDeleteItemId(id);
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setDeleteItemId(null);
  };

  const formatPrice = (price: number): string => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  
  useEffect(() => {
    getAllProperties().then((data) => {
        setListData(data);
    });
  }, []); 

  const selectHandler = (e: any) => {};

  return (
    <>
      <div className="dashboard-body">
        <div className="position-relative">
          <DashboardHeaderTwo title="Imóveis Cadastrados" />
          <div className="d-sm-flex align-items-center justify-content-between mb-25">
            <div className="fs-16">
              Mostrando <span className="color-dark fw-500">1–5</span> of{" "}
              <span className="color-dark fw-500">40</span> resultados
            </div>
            <div className="d-flex ms-auto xs-mt-30">
              <div className="short-filter d-flex align-items-center ms-sm-auto">
                <div className="fs-16 me-2">Ordenar por:</div>
                <NiceSelect
                  className="nice-select"
                  options={[
                    { value: "1", text: "Mais Novo" },
                    { value: "4", text: "Preço Menos" },
                    { value: "5", text: "Preço Maior" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder=""
                />
              </div>
            </div>
          </div>

          <div className="bg-white card-box p0 border-20">
            <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
              <table className="table property-list-table">
                <thead>
                  <tr>
                    <th scope="col">Título</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Venda/Aluguel</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
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
                            <div className="address">
                              {item.state},{item.city}
                            </div>
                            <strong className="price color-dark">
                              {formatPrice(item.price)}
                            </strong>
                          </div>
                        </div>
                      </td>
                      <td>{item.propertyType}</td>
                      <td>{item.classification}</td>
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
                              <Link
                                className="dropdown-item"
                                href={`/detalhes/${item.id}`}
                                target="_blank"
                              >
                                <Image
                                  src={icon_1}
                                  alt=""
                                  className="lazy-img"
                                />{" "}
                                Visualizar
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" href="#">
                                <Image
                                  src={icon_2}
                                  alt=""
                                  className="lazy-img"
                                />{" "}
                                Compartilhar
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" href="#">
                                <Image
                                  src={icon_3}
                                  alt=""
                                  className="lazy-img"
                                />{" "}
                                Editar
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="#"
                                onClick={() => handleDeleteClick(item.id)}
                                 data-bs-target="#deleteModal"
                              >
                                <Image
                                  src={icon_4}
                                  alt=""
                                  className="lazy-img"
                                />{" "}
                                Deletar
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <ul className="pagination-one d-flex align-items-center justify-content-center style-none pt-40">
            <li className="me-3">
              <Link href="#">1</Link>
            </li>
            <li className="selected">
              <Link href="#">2</Link>
            </li>
            <li>
              <Link href="#">3</Link>
            </li>
            <li>
              <Link href="#">4</Link>
            </li>
            <li>....</li>
            <li className="ms-2">
              <Link href="#" className="d-flex align-items-center">
                Última <Image src={icon_5} alt="" className="ms-2" />
              </Link>
            </li>
          </ul>
        </div>

        {showDeleteModal && (
            <DeleteModal id={deleteItemId as number} handleCloseModal={handleCloseModal}/>
        )}
      </div>
    </>
  );
};

export default PropertyListBody;
