import { Sidebar } from "@/widgets/Sidebar";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};
