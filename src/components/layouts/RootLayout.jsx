import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import ProductProvider from "../../providers/ProductProvider";
import CartProvider from "../../providers/CartProvider";

const RootLayout = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </ProductProvider>
  );
};

export default RootLayout;
