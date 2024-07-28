import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/images/dashboard/icon/icon_18.svg";
import icon_2 from "@/assets/images/dashboard/icon/icon_19.svg";
import icon_3 from "@/assets/images/dashboard/icon/icon_20.svg";
import icon_4 from "@/assets/images/dashboard/icon/icon_21.svg";

import listImg_1 from "@/assets/images/dashboard/img_01.jpg";
import listImg_2 from "@/assets/images/dashboard/img_02.jpg";
import listImg_3 from "@/assets/images/dashboard/img_03.jpg";
import listImg_4 from "@/assets/images/dashboard/img_04.jpg";
import listImg_5 from "@/assets/images/dashboard/img_05.jpg";
import { useEffect } from "react";
import { getAllProperties, getPropertiesByID } from "@/app/imoveis/actions";

interface DataType {
   id: number;
   title: string;
   address: string;
   price: number;
   date: string;
   view: number;
   img: StaticImageData;
   status: string;
   status_bg?: string;
}
let list_data: DataType[] = []

   

const PropertyTableBody = () => {
   useEffect(() => {
      getAllProperties().then(data=>{
         console.log(data)
         list_data=data
      })
       })

   return (
      <tbody className="border-0">
         {list_data.map((item) => (
            <tr key={item.id}>
               <td>
                  <div className="d-lg-flex align-items-center position-relative">
                     <Image src={item.img} alt="" className="p-img" />
                     <div className="ps-lg-4 md-pt-10">
                        <Link href="#" className="property-name tran3s color-dark fw-500 fs-20 stretched-link">{item.title}</Link>
                        <div className="address">{item.address}</div>
                        <strong className="price color-dark">${item.price}</strong>
                     </div>
                  </div>
               </td>
               <td>{item.date}</td>
               <td>{item.view}</td>
               <td>
                  <div className={`property-status ${item.status_bg}`}>{item.status}</div>
               </td>
               <td>
                  <div className="action-dots float-end">
                     <button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span></span>
                     </button>
                     <ul className="dropdown-menu dropdown-menu-end">
                        <li><Link className="dropdown-item" href="#"><Image src={icon_1} alt="" className="lazy-img" /> View</Link></li>
                        <li><Link className="dropdown-item" href="#"><Image src={icon_2} alt="" className="lazy-img" /> Share</Link></li>
                        <li><Link className="dropdown-item" href="#"><Image src={icon_3} alt="" className="lazy-img" /> Edit</Link></li>
                        <li><Link className="dropdown-item" href="#"><Image src={icon_4} alt="" className="lazy-img" /> Delete</Link></li>
                     </ul>
                  </div>
               </td>
            </tr>
         ))}
      </tbody>
   )
}

export default PropertyTableBody
