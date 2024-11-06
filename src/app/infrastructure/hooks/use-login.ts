import { useMutation } from "@tanstack/react-query";
import { signInAPI } from "@/app/infrastructure/api/auth.ts";

const useLogin = () => {
  const { mutateAsync: login, error } = useMutation({
    mutationFn: signInAPI,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  return {
    login,
    error,
  };
};
export default useLogin;
