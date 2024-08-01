import NiceSelect from "@/ui/NiceSelect";

const Overview = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="bg-white card-box border-20">
         <h4 className="dash-title-three">Visão Geral</h4>
         <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Nome da Propriedade*</label>
            <input type="text" placeholder="Nome da Propriedade" />
         </div>
         <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Descrição*</label>
            <textarea className="size-lg" placeholder="Fale sobre o local..."></textarea>
         </div>
         <div className="row align-items-end">
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Categoria*</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "Apartamento", text: "Apartamento" },
                        { value: "Condominio", text: "Condomínio" },
                        { value: "Casa", text: "Casa" },
                        { value: "Vila", text: "Vila" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Listado em*</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "1", text: "Todos" },
                        { value: "2", text: "Venda" },
                        { value: "3", text: "Aluguel" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Preço*</label>
                  <input type="text" placeholder="Preço" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Overview;
