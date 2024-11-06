import { useState, createContext, useContext, useCallback } from "react";

import useLogin from "@/app/infrastructure/hooks/use-login.ts";
import { useToast } from "@/ui/hooks/use-toast";
import { APIAuthRequest } from "@/app/types";
import {
  AuthContextType,
  AuthProviderProps,
  User,
} from "@/app/core/auth-context.props.ts";

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const { toast } = useToast();

  const { login: executeLogin } = useLogin();

  const login = useCallback(
    async (credentials: APIAuthRequest) => {
      try {
        const data = await executeLogin(credentials);
        if (data) {
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(data.user);
          return true;
        }
        return false;
      } catch (err) {
        console.error("Login failed:", err);
        toast({
          variant: "destructive",
          title: "Login failed.",
          description: "Please try again.",
        });
      }
    },
    [executeLogin, toast],
  );

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
