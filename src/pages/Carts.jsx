import SingleCartBox from "../components/sections/SingleCartBox";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Flex from "../components/ui/Flex";
import { useCart } from "../hooks/useCart";

const Carts = () => {
  const { cart, calculateTotalPrice } = useCart();
  return (
    <section className="mt-10">
      <Container>
        <Flex className={" justify-between"}>
          <div className="w-3/5">
            <h1 className="text-3xl font-semibold">
              An overview of your order
            </h1>
            <Flex className="flex-col gap-5 p-6 mt-10 bg-cbg rounded-xl">
              {cart.map((value) => (
                <SingleCartBox data={value} key={value.index} />
              ))}
            </Flex>
          </div>
          <div className="w-1/3">
            <h1 className="text-3xl font-semibold">Oder details</h1>
            <Flex className="flex-col gap-4 p-6 mt-10 bg-cbg rounded-xl">
              <Flex className={"justify-between text-[#656565] text-xl"}>
                <h4>Subtotal</h4>
                <h4 className="font-medium">{calculateTotalPrice()}</h4>
              </Flex>
              <Flex className={"justify-between text-[#656565] text-xl"}>
                <h4>Shipping</h4>
                <h4 className="font-medium">Free</h4>
              </Flex>
              <Flex
                className={
                  "justify-between text-[#656565] text-xl border-b border-[#ECECEC] pb-5"
                }
              >
                <h4>Estimated Tax</h4>
                <h4 className="font-medium">€ -</h4>
              </Flex>
              <Flex
                className={
                  "justify-between text-[#656565] text-2xl  font-semibold"
                }
              >
                <h4>Total</h4>
                <h4>{calculateTotalPrice()}</h4>
              </Flex>
            </Flex>
            <Button text={"Go to Checkout"} className={"btn w-full mt-6"} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Carts;
