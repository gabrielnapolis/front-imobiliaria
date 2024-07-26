import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import BLockFeatureOne from "./BLockFeatureOne";
import FooterFour from "@/layouts/footers/FooterFour";

const AboutUsTwo = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="Sobre Nós" sub_title="Sobre Nós" />
         <BLockFeatureOne />
         <FooterFour />
      </>
   )
}

export default AboutUsTwo;
