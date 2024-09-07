import { useState } from "react";
import { AuthContext } from "../context";
import Cookies from "js-cookie";
export default function AuthProvider({ children }) {
  const [ auth, setAuth ] = useState(Cookies.get("furniFlexAuth") && JSON.parse(Cookies.get("furniFlexAuth")) || {});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
