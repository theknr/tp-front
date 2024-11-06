import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import ProtectedRoute from "@/app/infrastructure/routes/protected-route.tsx";

const Register = lazy(() => import("@/app/pages/Register/register-page.tsx"));
const SignIn = lazy(() => import("@/app/pages/SignIn/sign-in"));
const News = lazy(() => import("@/app/pages/News/news-page.tsx"));
const Sport = lazy(() => import("@/app/pages/Sport/sport-page.tsx"));
const Photos = lazy(() => import("@/app/pages/Photos/photos-page.tsx"));
const Tasks = lazy(() => import("@/app/pages/Tasks/tasks-page.tsx"));
const Clothing = lazy(() => import("@/app/pages/Clothing/clothing-page.tsx"));
const Dashboard = lazy(
  () => import("@/app/pages/Dashboard/dashboard-page.tsx"),
);

const routes: RouteObject[] = [
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/news",
    element: (
      <ProtectedRoute>
        <News />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sport",
    element: (
      <ProtectedRoute>
        <Sport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/photos",
    element: (
      <ProtectedRoute>
        <Photos />
      </ProtectedRoute>
    ),
  },
  {
    path: "/tasks",
    element: (
      <ProtectedRoute>
        <Tasks />
      </ProtectedRoute>
    ),
  },
  {
    path: "/clothing",
    element: (
      <ProtectedRoute>
        <Clothing />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/signin" replace />,
  },
];

const AppRouter = createBrowserRouter(routes);

export default AppRouter;
