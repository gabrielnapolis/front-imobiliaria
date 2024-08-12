"use client"
import NiceSelect from "@/ui/NiceSelect";
import Image from "next/image"
import Link from "next/link"
import ListingDropdownModal from "@/modals/ListingDropdownModal";

import titleShape from "@/assets/images/shape/title_shape_02.svg"
import bannerImg from "@/assets/images/assets/ils_07.svg"

const DropdownFive = ({
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
      <>
         <div className="inner-banner-one inner-banner bg-pink z-1 pt-160 lg-pt-140 pb-140 xl-pb-100 md-pb-80 position-relative">
            <div className="container">
               <div className="title-one text-center mb-55 xl-mb-30 lg-mb-20 wow fadeInUp">
                  <h3>Encontre o seu  <span>Imovel<Image src={titleShape} alt="" className="lazy-img" /></span></h3>
                  <p className="fs-24 mt-xs">Possumíos mais de 3.000 imóvies.</p>
               </div>
               <div className="row">
                  <div className="col-xxl-10 m-auto">
                     <div className="search-wrapper-one layout-one bg position-relative">
                        <div className="bg-wrapper border-0">
                           <form onSubmit={(e) => e.preventDefault()}>
                              <div className="row gx-0 align-items-center">
                                 <div className="col-lg-4">
                                    <div className="input-box-one border-left">
                                       <div className="label">Estou buscando por...</div>
                                       <NiceSelect className="nice-select"
                                          options={[
                                             { value: "apartmentos", text: "Apartamentos" },
                                             { value: "casas", text: "Casas" },
                                             { value: "condos", text: "Condomínos" },
                                          ]}
                                          defaultCurrent={0}
                                          onChange={handleStatusChange}
                                          name=""
                                          placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-xl-5 col-lg-4">
                                    <div className="input-box-one border-left">
                                       <div className="label">Localização</div>
                                       <NiceSelect className="nice-select location"
                                          options={[
                                             { value: "slz", text: "São Luis, MA" },
                                             { value: "Senador Canedo", text: "Senador Canedo, GO" },

                                          ]}
                                          defaultCurrent={0}
                                          onChange={handleLocationChange}
                                          name=""
                                          placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-xl-3 col-lg-4">
                                    <div className="input-box-one md-mt-10">
                                       <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                                          <Link href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn sm rounded-circle tran3s text-uppercase fw-500 d-inline-flex align-items-center justify-content-center me-3">
                                             <i className="fa-light fa-sliders-up"></i>
                                          </Link>
                                          <button onClick={ handleSearchChange}className="fw-500 text-uppercase tran3s search-btn w-auto m0">Buscar</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <Image src={bannerImg} alt="" className="lazy-img shapes w-100 illustration" />
         </div>
         <ListingDropdownModal
            handleSearchChange={handleSearchChange}
            handleBedroomChange={handleBedroomChange}
            handleBathroomChange={handleBathroomChange}
            handlePriceChange={handlePriceChange}
            maxPrice={maxPrice}
            priceValue={priceValue}
            handleResetFilter={handleResetFilter}
            selectedAmenities={selectedAmenities}
            handleAmenityChange={handleAmenityChange}
            handleLocationChange={handleLocationChange}
            handleStatusChange={handleStatusChange}
         />
      </>
   )
}

export default DropdownFive
