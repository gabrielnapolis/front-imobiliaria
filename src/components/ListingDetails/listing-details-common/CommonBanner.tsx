const CommonBanner = ({ style_3 }: any) => {
   return (
      <div className="row">
         <div className="col-lg-6">
            <h3 className="property-titlee">Luxury Apartments on California.</h3>
            <div className="d-flex flex-wrap mt-10">
               <div className={`list-type text-uppercase mt-15 me-3 ${style_3 ? "bg-white text-dark fw-500" : "text-uppercase border-20"}`}>Venda</div>
               <div className="address mt-15"><i className="bi bi-geo-alt"></i> 3891 Ranchview Dr. Richardson, California
               </div>
            </div>
         </div>
         <div className="col-lg-6 text-lg-end">
            <div className="d-inline-block md-mt-40">
               <div className="price color-dark fw-500">Preço: R$ 1.670.000</div>
               
               <ul className="style-none d-flex align-items-center action-btns">
                  <li className="me-auto fw-500 color-dark"><i className="fa-sharp fa-regular fa-share-nodes me-2"></i>
                     Compartilhar</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default CommonBanner
