import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import BLockFeatureOne from "./BLockFeatureOne";
import BLockFeatureTwo from "./BLockFeatureTwo";
import Brand from "./Brand";
import FancyBanner from "./FancyBanner";
import FooterFour from "@/layouts/footers/FooterFour";

const AboutUsTwo = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="Sobre Nós" sub_title="Sobre Nós" />
         <BLockFeatureOne />
         <BLockFeatureTwo />
         {/* <Brand /> */}
         <FooterFour />
      </>
   )
}

export default AboutUsTwo;
