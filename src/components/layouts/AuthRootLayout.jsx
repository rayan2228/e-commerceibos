import { Outlet } from "react-router-dom";
import Flex from "../ui/Flex";
import Image from "../ui/Image";
const AuthRootLayout = () => {
  return (
    <section className="w-screen h-screen">
      <Flex>
        <Flex className="items-center justify-center w-1/2">
          <Outlet />
        </Flex>
        <Flex
          className="flex-col items-center justify-center w-1/2 h-screen gap-5"
          style={{
            background: `url("/authBg.png") no-repeat center`,
            backgroundSize: "cover",
          }}
        >
          <Image src={"/icon.png"} />
          <Image src={"/furniFlex.png"} />
          <p className="text-base font-medium text-[#C8C4C4] max-w-[440px] text-center">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </Flex>
      </Flex>
    </section>
  );
};

export default AuthRootLayout;
