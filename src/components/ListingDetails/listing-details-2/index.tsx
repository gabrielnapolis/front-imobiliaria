"use client"

import HeaderTwo from "@/layouts/headers/HeaderTwo"
import ListingDetailsTwoArea from "./ListingDetailsTwoArea"
import FancyBanner from "@/components/common/FancyBanner"
import FooterFour from "@/layouts/footers/FooterFour"



const ListingDetailsOne = ({ property }: { property: any } ) => {
  
  
  return (
    <>
      <HeaderTwo style_1={true} style_2={false} />
      {property && <ListingDetailsTwoArea params={{property}}/>}
      <FancyBanner />
      <FooterFour />
    </>
  )
}

export default ListingDetailsOne
