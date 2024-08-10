import Image from "next/image"
import Link from "next/link"
import deleteIcon from "@/assets/images/dashboard/icon/icon_22.svg"
import { deleteProperty } from "@/app/imoveis/actions";
import { toast } from "react-toastify";

interface DeleteModalProps {
   id: number;
   handleCloseModal: () => void;
}

export default function DeleteModal({ id, handleCloseModal }: DeleteModalProps) {

   const handleDelete = async () => {
      try {
          const response = await deleteProperty(id);
          if (response && response.error) {
            toast.error("Erro ao deletar", {
              position: "top-center",
              hideProgressBar: true,
              theme: "colored",
            });
          } else {
            toast.success("Imóvel excluído com sucesso!", {
              position: "top-center",
              theme: "colored",
              hideProgressBar: true,
            });
            handleCloseModal();
          }
           
      } catch (error) {
          console.error("Erro ao deletar a propriedade:", error);
      }
  };

   return (
      <>
         <div className="classModal" id="deleteModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <div className="container">
                  <div className="remove-account-popup text-center modal-content">
                     <button type="button" className="btn-close" aria-label="Close"></button>
                     <Image src={deleteIcon} alt="" className="lazy-img m-auto" />
                     <h2>Você tem certeza?</h2>
                     <p>Deseja deletar esse imóvel? Todos os dados será excluídos.</p>
                     <div className="button-group d-inline-flex justify-content-center align-items-center pt-15">
                        <button className="confirm-btn fw-500 tran3s me-3" onClick={handleDelete}>Sim</button >
                        <button type="button" className="btn-close fw-500 ms-3" aria-label="Close" onClick={handleCloseModal}>Cancelar</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </>
   )
}


