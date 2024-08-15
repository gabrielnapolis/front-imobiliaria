import Link from "next/link"
import Image from "next/image"

import circleImg from "@/assets/images/icon/icon_39.svg"
import ContactForm from "@/components/forms/ContactForm";

interface DataType {
   id: number;
   class_name?: string;
   title: string;
   address_1: string;
   address_2?: string;
}

const address_data: DataType[] = [
   {
      id: 1,
      title: "Estamos sempre felizes em ajudar.",
      address_1: "lucaszucheratto@hotmail.com"
   },
   {
      id: 2,
      class_name: "skew-line",
      title: "Nosso número.",
      address_1: "(98) 8522-4252",
   },
   {
      id: 3,
      title: "Localização.",
      address_1: "***Endereço***"
   },
]

const ContactArea = () => {
   return (
      <div className="contact-us border-top mt-130 xl-mt-100 pt-80 lg-pt-60">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-xl-8 col-lg-10 m-auto">
                  <div className="title-one text-center wow fadeInUp">
                     <h3>Dúvidas? Sinta-se à vontade para entrar em contato</h3>
                  </div>
               </div>
            </div>
         </div>

         <div className="address-banner wow fadeInUp mt-60 lg-mt-40">
            <div className="container">
               <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
                  {address_data.map((item) => (
                     <div key={item.id} className={`block position-relative ${item.class_name} z-1 mt-25`}>
                        <div className="d-xl-flex align-items-center">
                           <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                              <Image src={circleImg} alt="" className="lazy-img" /></div>
                           <div className="text">
                              <p className="fs-22">{item.title}</p>
                              <Link href="#" className="tran3s">{item.address_1}</Link>
                              {item.address_2 && <> { " " } <Link href="#" className="tran3s">{item.address_2}</Link></>}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-pink mt-150 xl-mt-120 md-mt-80">
            <div className="row">
               <div className="col-xl-7 col-lg-6">
                  <div className="form-style-one wow fadeInUp">
                     <ContactForm />
                  </div>
               </div>
               <div className="col-xl-5 col-lg-6 d-flex order-lg-first">
                  <div className="contact-map-banner w-100">
                     <div className="gmap_canvas h-100 w-100">
                        <iframe className="gmap_iframe h-100 w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.0055243646566!2d-44.295011748431676!3d-2.5032402999999905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68c2db960c847%3A0x7d3b90b24313f0e9!2sLos%20Angeles!5e0!3m2!1spt-BR!2sbr!4v1723688878259!5m2!1spt-BR!2sbr" width="600" height="400" loading="lazy"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactArea
