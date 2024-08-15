import LoginForm from "@/components/forms/LoginForm";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Login - Zucheratto",
};

export default function Index() {
  return (
    <Wrapper>
      <LoginForm/>
    </Wrapper>
  );
}
