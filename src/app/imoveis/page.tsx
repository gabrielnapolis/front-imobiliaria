import ListingTwelve from "@/components/inner-listing/listing-12";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Imóveis - Zucheratto",
};
const index = () => {
   return (
      <Wrapper>
         <ListingTwelve />
      </Wrapper>
   )
}

export default index