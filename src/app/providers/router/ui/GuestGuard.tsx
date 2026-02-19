import { useSessionStore } from "@/entities/session";
import { Navigate, Outlet } from "react-router-dom";

export function GuestGuard() {
  const { isAuth } = useSessionStore();
  if (isAuth) {
    return <Navigate to={"/"} replace />;
  }
  return <Outlet />;
}
