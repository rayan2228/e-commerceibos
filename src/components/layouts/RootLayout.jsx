import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import ProductProvider from "../../providers/ProductProvider";

const RootLayout = () => {
  return (
    <ProductProvider>
      <Header />
      <Outlet />
      <Footer />
    </ProductProvider>
  );
};

export default RootLayout;
