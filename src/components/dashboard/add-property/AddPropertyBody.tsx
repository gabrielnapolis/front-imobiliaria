"use client"
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import Overview from "./Overview"
import ListingDetails from "./ListingDetails"
import Link from "next/link"
import SelectAmenities from "./SelectAmenities"
import AddressAndLocation from "../profile/AddressAndLocation"

const AddPropertyBody = () => {
   return (
      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderTwo title="Adicionar Novo Imóvel" />
            <h2 className="main-title d-block d-lg-none">Adicionar Novo Imóvel</h2>
            <Overview />
            <ListingDetails />

            <div className="bg-white card-box border-20 mt-40">
               <h4 className="dash-title-three">Anexar Fotos e Vídeos</h4>
               <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Arquivos*</label>

                  <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                     <span>PorpertyImage_01.jpg</span>
                     <Link href="#" className="remove-btn"><i className="bi bi-x"></i></Link>
                  </div>
                  <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                     <span>PorpertyImage_02.jpg</span>
                     <Link href="#" className="remove-btn"><i className="bi bi-x"></i></Link>
                  </div>
               </div>
               <div className="dash-btn-one d-inline-block position-relative me-3">
                  <i className="bi bi-plus"></i>
                  Upload File
                  <input type="file" id="uploadCV" name="uploadCV" placeholder="" />
               </div>

            </div>
            <SelectAmenities />
            <AddressAndLocation />

            <div className="button-group d-inline-flex align-items-center mt-30">
               <button  className="dash-btn-two tran3s me-3">Cadastrar Imóvel</button>
               <Link href="#" className="dash-cancel-btn tran3s">Cancelar</Link>
            </div>
         </div>
      </div>
   )
}

export default AddPropertyBody
