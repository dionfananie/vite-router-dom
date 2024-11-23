import type { ReactNode } from "react";
import type { User } from "../../types/auth";

export interface AuthContextType {
  user: User | undefined;
}

export interface AuthProviderProps {
  children: ReactNode;
}
