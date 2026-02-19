import { RouterProvider } from "react-router-dom";
import { router } from "..";

export function AppRouter() {
  return <RouterProvider router={router} />;
}
