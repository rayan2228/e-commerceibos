import AuthCommonUI from "../../components/ui/AuthCommonUI";
import Flex from "../../components/ui/Flex";
import Input from "../../components/ui/Input";
import Password from "../../components/ui/Password";

const Login = () => {
  return (
    <>
      <h4 className="font-medium text-[32px]">Welcome Back!</h4>
      <p>Enter your Credentials to access your account</p>
      <Flex className={"flex-col gap-4 w-full mt-5"}>
        <Input type={"email"} label={"Email address"} name={"email"} />
        <Password />
        <AuthCommonUI />
      </Flex>
    </>
  );
};

export default Login;
