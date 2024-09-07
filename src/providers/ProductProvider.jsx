import { useState } from "react";
import { ProductContext } from "../context";
export default function ProductProvider({ children }) {
  const [ products, setProducts ] = useState([]);
  const [ filter, setFilter ] = useState("");
  return (
    <ProductContext.Provider value={{ products, setProducts ,filter,setFilter}}>
      {children}
    </ProductContext.Provider>
  );
}
 