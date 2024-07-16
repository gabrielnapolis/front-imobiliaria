import FooterFour from "@/layouts/footers/FooterFour";
import AddressBanner from "../home-four/AddressBanner";
import AgentArea from "../home-one/AgentArea";
import FancyBannerOne from "../home-one/FancyBannerOne";

import BLockFeatureOne from "./BLockFeatureOne";
import BLockFeatureThree from "./BLockFeatureThree";
import BLockFeatureTwo from "./BLockFeatureTwo";
import Brand from "./Brand";
import Feedback from "./Feedback";
import HeroBanner from "./HeroBanner";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FancyBanner from "@/components/common/FancyBanner";
import PropertyOne from "../home-four/PropertyOne";

const HomeFive = () => {
   return (
      <>
         <HeaderThree />
         <HeroBanner />
         <PropertyOne style_1={true} style_2={false} />
         <BLockFeatureTwo style={false} />
         <BLockFeatureThree />
         <FancyBannerOne style={true} />
         <AgentArea style={true} />
         <AddressBanner style={true} />
         <FancyBanner style={true} />
         <FooterFour />
      </>
   )
}

export default HomeFive;
