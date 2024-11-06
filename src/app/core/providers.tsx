import { Suspense } from "react";
import { AuthProvider } from "@/app/core/auth-context";
import { RouterProvider } from "react-router-dom";
import AppRouter from "@/app/infrastructure/routes/routes.tsx";
import Spinner from "@/ui/atoms/spinner.tsx";

const Providers = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={AppRouter} />
      </Suspense>
    </AuthProvider>
  );
};

export default Providers;
