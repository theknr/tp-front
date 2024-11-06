import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/ui/atoms/toaster.tsx";
import Providers from "@/app/core/providers.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Providers />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>,
);
