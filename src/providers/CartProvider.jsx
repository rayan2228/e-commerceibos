import { useState } from "react";
import { CartContext } from "../context";
export default function CartProvider({ children }) {
  const [ cart, setCart ] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
