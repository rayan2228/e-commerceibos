import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./pages/Home";
import AuthRootLayout from "./components/layouts/AuthRootLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
        <Route element={<AuthRootLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carts" element={<Carts />} />
        </Route>
    </Routes>
  );
}

export default App;
