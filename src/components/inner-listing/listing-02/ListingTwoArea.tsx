"use client"
import Image from "next/image"
import Link from "next/link"
import ReactPaginate from "react-paginate"
import NiceSelect from "@/ui/NiceSelect"
import UseShortedProperty from "@/hooks/useShortedProperty"
import DropdownOne from "@/components/search-dropdown/inner-dropdown/DropdownOne"
import icon from "@/assets/images/icon/icon_46.svg"
import { useState } from "react"
import titleShape from "@/assets/images/shape/title_shape_02.svg"
import bannerImg from "@/assets/images/assets/ils_07.svg"

const ListingTwoArea =  ({ style }: any) => {
   const tab_title: string[] = ["Comprar", "Alugar",];
   const [propertyList, setPropertyList ] =useState([]);
   const itemsPerPage = 8;
   const page = "listing_3";
   const {
      itemOffset,
      sortedProperties,
      currentItems,
      pageCount,
      handlePageClick,
      handleBathroomChange,
      handleBedroomChange,
      handleSearchChange,
      handlePriceChange,
      maxPrice,
      priceValue,
      resetFilters,
      selectedAmenities,
      handleAmenityChange,
      handleLocationChange,
      handleStatusChange,
      handleClassificationChange,
      handleTypeChange
   } =  UseShortedProperty({propertyList, itemsPerPage, page });
   console.log("currentItems listing 2 current items , property list",currentItems,propertyList,sortedProperties)
   const handleResetFilter = () => {
      resetFilters();
   };
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
   <>
      <div className="inner-banner-one inner-banner bg-pink z-1 pt-160 lg-pt-140 pb-140 xl-pb-100 md-pb-80 position-relative">
         <div className="container">
         <div className="title-one text-center mb-55 xl-mb-30 lg-mb-20 wow fadeInUp">
                     <h3>Encontre o seu  <span>Imovel<Image src={titleShape} alt="" className="lazy-img" /></span></h3>
                     <p className="fs-24 mt-xs">Possumios mais de 3000 propriedade.</p>
                  </div>
            <div className="row">
               <div className="col-xxl-10 m-auto">
                  <div className="search-wrapper-one layout-one mt-60 lg-mt-40 position-relative">
                  <div className="bg-wrapper p0 border-0 rounded-0">
                     <div className="tab-content">
                        <div className={`tab-pane show ${activeTab === 0 ? "active" : ""}`} id="buy">
                           <form onSubmit={(e) => { e.preventDefault(); handleSearchChange; }} className="md-pt-20">
                              <div className="row gx-0 align-items-center justify-content-between">
                                 <div className="col-lg-3">
                                    <div className="input-box-one border-left">
                                       <div className="label">Estou buscando por...</div>
                                       <NiceSelect className="nice-select fw-normal"
                                          options={[
                                             { value: "apartments", text: " Apartamentos" },
                                             { value: "condos", text: "Escritórios" },
                                             { value: "houses", text: "Casas" },
                                             { value: "industrial", text: "Industrial" },
                                             { value: "villas", text: "Lotes" },
                                          ]}
                                          defaultCurrent={0}
                                          onChange={handleClassificationChange}
                                          name=""
                                          placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-lg-4">
                                    <div className="input-box-one border-left">
                                       <div className="label">Localização</div>
                                       <NiceSelect className="nice-select location fw-normal"
                                          options={[
                                             { value: "florianopolis", text: "Florianopolis, SC" },
                                             { value: "saoluis", text: "Sao Luis, MA" },
                                             { value: "goiania", text: "Goiania, GO" },
                                             { value: "senador canedo", text: "Senador Canedo, GO" },
                                          ]}
                                          defaultCurrent={0}
                                          onChange={handleLocationChange}
                                          name=""
                                          placeholder="" />
                                    </div>
                                 </div>
                              
                                 <div className="col-xl-2 col-lg-1">
                                    <div className="input-box-one p0 ms-xl-5 md-mt-20">
                                       <button className="fw-500 text-uppercase tran3s search-btn-two w-100 h-100 pt-45 lg-pt-30 md-pt-20 pb-45 lg-pb-30 md-pb-20 fs-2"><i className="fa-light fa-magnifying-glass"></i></button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                        <div className={`tab-pane show ${activeTab === 1 ? "active" : ""}`} id="buy">
                           <form onSubmit={(e) => { e.preventDefault(); handleSearchChange; }} className="md-pt-20">
                              <div className="row gx-0 align-items-center">
                                 <div className="col-lg-3">
                                    <div className="input-box-one border-left">
                                       <div className="label">Estou buscando por...</div>
                                       <NiceSelect className="nice-select fw-normal"
                                          options={[
                                             { value: "apartments", text: " Apartamentos" },
                                             { value: "condos", text: "Escritórios" },
                                             { value: "houses", text: "Casas" },
                                             { value: "industrial", text: "Industrial" },
                                             { value: "villas", text: "Lotes" },
                                          ]}
                                          defaultCurrent={0}
                                          onChange={handleClassificationChange}
                                          name=""
                                          placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-lg-4">
                                    <div className="input-box-one border-left">
                                       <div className="label">Localização</div>
                                       <NiceSelect className="nice-select location fw-normal"
                                       options={[
                                          { value: "florianopolis", text: "Florianopolis, SC" },
                                          { value: "saoluis", text: "Sao Luis, MA" },
                                          { value: "goiania", text: "Goiania, GO" },
                                          { value: "senador canedo", text: "Senador Canedo, GO" },
                                       ]}
                                          defaultCurrent={0}
                                          onChange={handleLocationChange}
                                          name=""
                                          placeholder="" />
                                    </div>
                                 </div>
                                 
                                 <div className="col-xl-2 col-lg-1">
                                    <div className="input-box-one p0 ms-xl-5 md-mt-20">
                                       <button className="fw-500 text-uppercase tran3s search-btn-two w-100 h-100 pt-45 lg-pt-30 md-pt-20 pb-45 lg-pb-30 md-pb-20 fs-2"><i className="fa-light fa-magnifying-glass"></i></button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Image src={bannerImg} alt="" className="lazy-img shapes w-100 illustration" />
      </div>

      <div className={`property-listing-six ${style ? "pt-150 xl-pt-100 pb-170 xl-pb-120" : "bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120"}`}>
         <div className="container container-large">
            <div className="row">
               <div className="col-lg-8">
                  <div className="ps-xxl-5">
                     <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
                        <div>Mostrando <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + sortedProperties.length}</span> de <span
                           className="color-dark fw-500">{sortedProperties.length}</span> resultados</div>
                        <div className="d-flex align-items-center xs-mt-20">
                           <div className="short-filter d-flex align-items-center">
                              <div className="fs-16 me-2">Filtre por:</div>
                              <NiceSelect
                                 className="nice-select"
                                 options={[
                                    { value: "newest", text: "Mais Novo" },
                                    { value: "best_seller", text: "Mais Vendido" },
                                    // { value: "best_match", text: "Best Match" },
                                    { value: "price_low", text: "Menor Preço" },
                                    { value: "price_high", text: "Maior Preço" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={handleStatusChange}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                     </div>

                     {sortedProperties.map((item: any) => (
                        <div key={item.id} className={`listing-card-seven border-20 p-20 mb-50 wow fadeInUp ${style ? "grey-bg" : ""}`}>
                           <div className="d-flex flex-wrap layout-one">
                              <div className={`img-gallery position-relative z-1 border-20 overflow-hidden ${item.url_img}`}>
                                 <div className={style ? "tag bg-white rounded-0 text-dark fw-500" : `border-20 tag`}>{item.status}</div>
                                 {/* <div className="img-slider-btn">
                                    03 <i className="fa-regular fa-image"></i>
                                    <Fancybox
                                       options={{
                                          Carousel: {
                                             infinite: true,
                                          },
                                       }}
                                    >
                                       {item.carousel_thumb.map((thumb: any, index: any) => (
                                          <a key={index} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
                                       ))}
                                    </Fancybox>
                                 </div> */}
                              </div>
                              <div className="property-info">
                                 <Link href={`/detalhes/${item.id}`} className="title tran3s mb-15">{item.name}</Link>
                                 <div className="address">{item.streetAdress}</div>
                                 <div className="feature mt-30 mb-30 pt-30 pb-5">
                                    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                       <li><strong>{item.mts}</strong>metros</li>
                                       <li><strong>{item.bed}</strong>quartos</li>
                                       <li><strong>{item.bath}</strong>banheiros</li>         
                                    </ul>
                                 </div>
                                 <div className="pl-footer d-flex flex-wrap align-items-center justify-content-between">
                                    <strong className="price fw-500 color-dark me-auto">R$
                                    {item.price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </strong>
                                    <Link href={`/detalhes/${item.id}`} className="btn-four rounded-circle">
                                       <i className="bi bi-arrow-up-right"></i>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}

                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<Image src={icon} alt="" className="ms-2" />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={pageCount}
                        pageCount={pageCount}
                        previousLabel={<Image src={icon} alt="" className="ms-2" />}
                        renderOnZeroPageCount={null}
                        className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30"
                     />
                  </div>
               </div>

               <div className="col-lg-4 order-lg-first">
                  <div className="advance-search-panel dot-bg md-mt-80">
                     <div className="main-bg">
                        <DropdownOne
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
                           handleClassificationChange={handleClassificationChange}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>
   )
}

export default ListingTwoArea
