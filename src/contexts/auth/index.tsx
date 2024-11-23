import { createContext, useContext } from "react";
import type { AuthContextType, AuthProviderProps } from "./index.types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const value = { user: undefined };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useArticlesContext must be inside the scope");
  }
  return context;
};

export { useAuthContext, AuthProvider };
