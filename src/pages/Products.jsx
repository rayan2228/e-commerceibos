import ProductContainer from "../components/sections/ProductContainer";
import SideBar from "../components/sections/SideBar";
import Container from "../components/ui/Container";
import Flex from "../components/ui/Flex";

const Products = () => {
  return (
    <section>
      <Container>
        <Flex className={"justify-between mt-20"}>
          <SideBar />
          <ProductContainer className={"w-3/4"} />
        </Flex>
      </Container>
    </section>
  );
};

export default Products;
