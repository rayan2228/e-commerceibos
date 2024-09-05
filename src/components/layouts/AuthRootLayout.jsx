import { Outlet } from "react-router-dom";
import Flex from "../ui/Flex";

const AuthRootLayout = () => {
  return (
    <section className="h-screen w-screen">
      <Flex>
        <Flex className="w-1/2 justify-center items-center">
          <Outlet />
        </Flex>
        <div
          className="w-1/2 h-screen"
          style={{
            background: `url("/authBg.png") no-repeat center`,
            backgroundSize: "cover",
          }}
        ></div>
      </Flex>
    </section>
  );
};

export default AuthRootLayout;
