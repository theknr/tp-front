import { APIAuthRequest } from "@/app/types";
import { ReactNode } from "react";

export type User = {
  id: number;
  username: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: APIAuthRequest) => Promise<boolean | undefined>;
  logout: () => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};
