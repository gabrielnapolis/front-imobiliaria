import HeaderTwo from "@/layouts/headers/HeaderTwo"
import ListingDetailsTwoArea from "./ListingDetailsTwoArea"
import FancyBanner from "@/components/common/FancyBanner"
import FooterFour from "@/layouts/footers/FooterFour"

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderTwo style_1={true} style_2={false} />
      <ListingDetailsTwoArea />
      <FancyBanner />
      <FooterFour />
    </>
  )
}

export default ListingDetailsOne
