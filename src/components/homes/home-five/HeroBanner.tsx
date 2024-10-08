import Image from "next/image"
import DropdownFive from "@/components/search-dropdown/home-dropdown/DropdownFive"

import bannerShape from "@/assets/images/shape/shape_54.svg"
import bannerImg_2 from "@/assets/images/assets/ils_05.svg"

const HeroBanner = () => {
   return (
      <div className="hero-banner-five bg-pink z-2 position-relative pt-200 md-pt-150">
         <div className="container container-large">
            <div className="position-relative">
               <div className="row">
                  <div className="col-lg-7">
                     <div className="position-relative z-1">
                        <h1 className="hero-heading font-garamond wow fadeInUp mb-50">Zucheratto Imobiliaria.</h1>
                        <Image src={bannerShape} alt="" className="lazy-img shape_01 shapes d-none d-lg-block" />
                        <div className="row">
                           <div className="col-xl-7 col-lg-12 col-md-7">
                              <p className="fs-24 color-dark m0 lg-pb-20 wow fadeInUp" data-wow-delay="0.1s">Mais de 3.000 propriedades, apartamentos, casas, lotes e muito mais</p>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-xxl-9 col-xl-11">
                     <DropdownFive />
                  </div>
               </div>
            </div>
         </div>
         <Image src={bannerImg_2} alt="" className="lazy-img shapes illustration" />
         <div className="media-wrapper">
            <div className="bg"></div>
         </div>
      </div>
   )
}

export default HeroBanner
