import AuthCommonUI from "../../components/ui/AuthCommonUI";
import Flex from "../../components/ui/Flex";
import Input from "../../components/ui/Input";
import Password from "../../components/ui/Password";
const Register = () => {
  return (
    <>
      <Flex className="flex-col items-center gap-3">
        <h4 className="text-2xl font-semibold">Welcome To</h4>
        <img src="/FurniFlexBlack.png" alt=""  />
        <p className="text-base font-medium text-tSecondary">
          Signup for purchase your desire products
        </p>
      </Flex>
      <Flex className={"flex-col gap-4 w-full mt-5"}>
        <Flex className={"justify-between"}>
          <Input
            type={"text"}
            label={"First name (optional)"}
            name={"fName"}
            className={"w-[48%]"}
          />
          <Input
            type={"text"}
            label={"Last name (optional)"}
            name={"lName"}
            className={"w-[48%]"}
          />
        </Flex>
        <Input type={"email"} label={"Email address"} name={"email"} />
        <Password />
        <AuthCommonUI />
      </Flex>
    </>
  );
};

export default Register;
