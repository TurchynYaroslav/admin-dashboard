import { createBrowserRouter } from "react-router-dom";
import { RequiredAuth } from "../ui/RequiredAuth";
import { PageLayout } from "@/widgets";
import { RegisterPage } from "@/pages/register";
import { GuestGuard } from "..";
import { LoginPage } from "@/pages/login";

const routeConfig = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        element: <RequiredAuth />,
        children: [{ index: true, element: <h1>A</h1> }],
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
];

export const router = createBrowserRouter(routeConfig);
