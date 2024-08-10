import Link from "next/link"
import Image from "next/image";
import DeleteModal from "@/modals/DeleteModal";

import profileIcon_1 from "@/assets/images/dashboard/icon/icon_23.svg";
import profileIcon_2 from "@/assets/images/dashboard/icon/icon_24.svg";
import profileIcon_3 from "@/assets/images/dashboard/icon/icon_25.svg";

const Profile = () => {
   return (
      <>
         <div className="user-name-data">
            <ul className="dropdown-menu" aria-labelledby="profile-dropdown">
               <li>
                  <Link className="dropdown-item d-flex align-items-center" href="/dashboard/account-settings"><Image src={profileIcon_2} alt="" className="lazy-img" /><span className="ms-2 ps-1">Conta</span></Link>
               </li>
            </ul>
         </div>
         
      </>
   )
}

export default Profile
