import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "@/app/infrastructure/api/auth.ts";
import { useToast } from "@/ui/hooks/use-toast.ts";

const useRegister = () => {
  const { toast } = useToast();

  const { mutateAsync: register, error } = useMutation({
    mutationFn: registerAPI,
    onSuccess: () => {
      toast({
        title: "Registration successful.",
      });
    },
    onError: (error) => {
      console.error("Register failed:", error);
    },
  });

  return {
    register,
    error,
  };
};
export default useRegister;
