import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { useProduct } from "../../hooks/useProduct";
import Loading from "../ui/Loading";
import SingleProduct from "./SingleProduct";
import Flex from "../ui/Flex";
import Pagination from "./Pagination";
let content;
const ProductContainer = ({ className }) => {
  const { products, setProducts, filter } = useProduct();
  const [loading, setLoading] = useState(true);

  const productsCall = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(`/products/?category=${filter}`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [setProducts, filter]);
  useEffect(() => {
    productsCall();
  }, [productsCall]);
  if (loading) {
    content = <Loading />;
  }
  if (!loading) {
    content = products.map((product, index) => (
      <SingleProduct key={index} data={{ ...product, index }} />
    ));
  }
  return (
    <Flex className={` ${className} flex-col`}>
      <Flex className={` flex-wrap gap-5 `}>{content}</Flex>
      <Pagination />
    </Flex>
  );
};

export default ProductContainer;
