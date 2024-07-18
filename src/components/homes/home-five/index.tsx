import FooterFour from "@/layouts/footers/FooterFour";
import BLockFeatureThree from "./BLockFeatureThree";
import BLockFeatureTwo from "./BLockFeatureTwo";
import HeroBanner from "./HeroBanner";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import FancyBanner from "@/components/common/FancyBanner";

const HomeFive = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <HeroBanner />
         <BLockFeatureTwo style={false} />
         <BLockFeatureThree />
         <FancyBanner style={true} />
         <FooterFour />
      </>
   )
}

export default HomeFive;
