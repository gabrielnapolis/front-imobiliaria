import HomeFive from "@/components/homes/home-five";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Home",
};
const index = () => {
  return (
    <Wrapper>
      <HomeFive />
    </Wrapper>
  )
}

export default index