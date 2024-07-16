import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"
import ListingTwelveArea from "./ListingTwelveArea"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const ListingTwelve = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <ListingTwelveArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingTwelve;
