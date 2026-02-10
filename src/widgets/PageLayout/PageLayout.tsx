import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-gray-700 border-r">
        <div className="p-4 font-semibold text-gray-50">AdminPanel</div>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};
