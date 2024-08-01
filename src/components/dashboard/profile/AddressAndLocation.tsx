import NiceSelect from "@/ui/NiceSelect";
import Image from "next/image";
import locationImage from "@/assets/images/dashboard/icon/icon_16.svg";

const AddressAndLocation = () => {

   const selectHandler = (e: any) => { };

   return (
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
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "1", text: "Brasil" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Cidade*</label>
                  <NiceSelect className="nice-select"
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
                     placeholder="" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">CEP*</label>
                  <input type="number" placeholder="1708" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Estado*</label>
                  <NiceSelect className="nice-select"
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
                     placeholder="" />
               </div>
            </div>
         </div>
         <div className="col-12">
            <div className="dash-input-wrapper mb-25">
               <label htmlFor="">Localização*</label>
               <div className="position-relative">
                  <input type="text" placeholder="XC23+6XC, Moiran, N105" />
                  <button className="location-pin tran3s"><Image src={locationImage} alt="" className="lazy-img m-auto" /></button>
               </div>
               <div className="map-frame mt-30">
                  <div className="gmap_canvas h-100 w-100">
                     <iframe className="gmap_iframe h-100 w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AddressAndLocation
