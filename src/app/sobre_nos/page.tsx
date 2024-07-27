import AboutUs from "@/components/inner-pages/about-us";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Sobre Nós",
};
const index = () => {
   return (
      <Wrapper>
         <AboutUs />
      </Wrapper>
   )
}

export default index