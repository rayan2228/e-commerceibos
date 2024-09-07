import { useEffect, useState } from "react";
import { CartContext } from "../context";
export default function CartProvider({ children }) {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);
  const updateQuantity = (data, type = false) => {
    const findProduct = cart.find(({ index }) => index === data.index);
    if (findProduct) {
      if (type && findProduct.quantity >= 2) {
        setCart(
          cart.map((item) =>
            item.index === data.index
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        setCart(
          cart.map((item) =>
            item.index === data.index
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      }
    } else {
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };

  const deleteItem = (index) => {
    setCart(cart.filter((item) => item.index !== index));
  };

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(
          item.discountedPrice.replace("€", "").replace(",", ".")
        );
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };
  return (
    <CartContext.Provider
      value={{ cart, updateQuantity, deleteItem, calculateTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
