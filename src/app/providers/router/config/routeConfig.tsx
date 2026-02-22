import { createBrowserRouter } from "react-router-dom";
import { RequiredAuth, GuestGuard } from "../";
import { PageLayout } from "@/widgets/PageLayout";
import { RegisterPage } from "@/pages/register";
import { LoginPage } from "@/pages/login";
import { ForbiddenPage } from "@/pages/forbidden";
import { DashboardPage } from "@/pages/dashboard";
import { SettingsPage } from "@/pages/settingsPage";
import { UsersPage } from "@/pages/usersPage";
import { RolesPage } from "@/pages/rolesPage";
import { LogsPage } from "@/pages/logsPage";

const routeConfig = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        element: <RequiredAuth allowedRoles={["admin"]} />,
        children: [
          { path: "/roles", element: <RolesPage /> },
          { path: "/logs", element: <LogsPage /> },
        ],
      },
      {
        element: <RequiredAuth allowedRoles={["admin", "manager"]} />,
        children: [{ path: "/users", element: <UsersPage /> }],
      },
      {
        element: <RequiredAuth allowedRoles={["user", "admin", "manager"]} />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: "/settings", element: <SettingsPage /> },
        ],
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
