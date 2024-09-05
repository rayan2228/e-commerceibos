import { Link } from "react-router-dom";
import Flex from "./Flex";
import Button from "./Button";

const AuthCommonUI = () => {
  return (
    <Flex className={"flex-col gap-5"}>
      <Flex className={"items-center gap-3"}>
        <input type="checkbox" id="terms" name="terms" />
        <label htmlFor="terms" className="text-sm font-medium">
          I agree to the{" "}
          <Link to={"#"} className="underline">
            Terms & Policy
          </Link>
        </label>
      </Flex>
      <Button text={"Signup"} className={"bg-black text-white py-4 text-base font-semibold rounded-md"}/>
        <p className="separator">or</p>
    </Flex>
  );
};

export default AuthCommonUI;
