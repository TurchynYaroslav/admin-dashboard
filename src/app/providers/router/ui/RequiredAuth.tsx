import { useSessionStore } from "@/entities/session";
import { Navigate, Outlet } from "react-router-dom";

export function RequiredAuth() {
  const { isAuth } = useSessionStore();
  if (!isAuth) {
    return <Navigate to={"/register"} replace />;
  }

  return <Outlet />;
}
