import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../../widgets";
import { UsersPage } from "../../pages/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [{ path: "/", element: <UsersPage /> }],
  },
]);

export default router;
