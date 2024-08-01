"use client"
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import Link from "next/link"

const PasswordChangeBody = () => {
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeaderTwo title="Change Password" />
        <div className="bg-white card-box border-20">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Senha Antiga*</label>
                  <input type="password" placeholder="Senha antiga" />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Nova Senha*</label>
                  <input type="password" placeholder="Confirmar sua nova senha" />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Confirmar Nova Senha*</label>
                  <input type="password" placeholder="Confirmar sua nova senha" />
                </div>
              </div>
            </div>

            <div className="button-group d-inline-flex align-items-center">
              <Link href="#" className="dash-btn-two tran3s">Salvar &amp; Atualizar</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PasswordChangeBody
