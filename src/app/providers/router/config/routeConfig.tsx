import { createBrowserRouter } from "react-router-dom";
import { RequiredAuth, GuestGuard } from "../";
import { PageLayout } from "@/widgets/PageLayout";
import { RegisterPage } from "@/pages/register";
import { LoginPage } from "@/pages/login";
import { ForbiddenPage } from "@/pages/forbidden";

const routeConfig = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        element: <RequiredAuth allowedRoles={["admin", "user"]} />,
        children: [{ index: true, element: <h1>Admin</h1> }],
      },
    ],
  },
  {
    element: <GuestGuard />,
    children: [
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    element: <ForbiddenPage />,
    path: "/forbidden",
  },
];

export const router = createBrowserRouter(routeConfig);
