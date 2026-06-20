import { createContext, useContext, useState } from "react";
import { setStoreToken, clearStoreToken } from "../api/store";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken"),
  );

  const storeTokenFromContext = (token) => {
    setStoreToken(token);
    setIsLoggedIn(!!token);
  };

  const removeTokenFromContext = () => {
    clearStoreToken();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenFromContext, removeTokenFromContext }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
