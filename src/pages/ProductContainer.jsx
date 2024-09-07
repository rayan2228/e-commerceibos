import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { useProduct } from "../hooks/useProduct";
import Loading from "../components/ui/Loading";
import SingleProduct from "../components/ui/SingleProduct";
import Flex from "../components/ui/Flex";
let content;
const ProductContainer = ({ className }) => {
  const { products, setProducts } = useProduct();
  const [loading, setLoading] = useState(true);
  console.log(loading);

  const productsCall = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [setProducts]);
  useEffect(() => {
    productsCall();
  }, [productsCall]);
  if (loading) {
    content = <Loading />;
  }
  if (!loading) {
    content = products.map((product) => (
      <SingleProduct key={product.name} data={product} />
    ))
  }
  return <Flex className={`${className} flex-wrap gap-5`}>{content}</Flex>;
};

export default ProductContainer;
