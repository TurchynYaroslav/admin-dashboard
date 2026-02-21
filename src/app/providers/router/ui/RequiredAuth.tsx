import { useSessionStore } from "@/entities/session";
import type { UserRole } from "@/entities/user";
import { useUserStore } from "@/entities/user/model/userStore";
import { Navigate, Outlet } from "react-router-dom";

interface RequiredAuthProps {
  allowedRoles?: UserRole[];
}

export function RequiredAuth({ allowedRoles }: RequiredAuthProps) {
  const { isAuth } = useSessionStore();
  const { isLoading, user } = useUserStore();

  if (!isAuth && !isLoading) {
    return <Navigate to={"/login"} replace />;
  }

  if (isLoading) {
    return <h1>Loading Profile...</h1>;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/forbidden" replace />;
  }

  return <Outlet />;
}
