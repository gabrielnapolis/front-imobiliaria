"use client"
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import Link from "next/link"

const AccountSettingBody = () => {
   return (

      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderTwo title="Account Settings" />
            <h2 className="main-title d-block d-lg-none">Configurações da Conta</h2>
            <div className="bg-white card-box border-20">
               <h4 className="dash-title-three">Editar e Atualizar</h4>
               <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="dash-input-wrapper mb-20">
                           <label htmlFor="">Primero Nome</label>
                           <input type="text" placeholder="Primero Nome" />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="dash-input-wrapper mb-20">
                           <label htmlFor="">Sobrenome</label>
                           <input type="text" placeholder="Sobrenome" />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="dash-input-wrapper mb-20">
                           <label htmlFor="">Email</label>
                           <input type="email" />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="dash-input-wrapper mb-20">
                           <label htmlFor="">Telefone</label>
                           <input type="tel" />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="dash-input-wrapper mb-20">
                           <label htmlFor="">Senha</label>
                           <input type="password" />

                           <div className="info-text d-sm-flex align-items-center justify-content-between mt-5">
                              <p className="m0">Alterar Senha? 
                                 <Link href="/dashboard/account-settings/password-change"> Clique aqui</Link></p>
                              <Link href="/dashboard/account-settings/password-change" className="chng-pass">Alterar Senha</Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="button-group d-inline-flex align-items-center mt-30">
                     <Link href="#" className="dash-btn-two tran3s me-3">Salvar</Link>
                     <Link href="#" className="dash-cancel-btn tran3s">Cancelar</Link>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AccountSettingBody
