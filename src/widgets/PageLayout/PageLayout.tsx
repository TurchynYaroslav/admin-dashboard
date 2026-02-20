import { useUserStore } from "@/entities/user/model/userStore";
import { LogoutButton } from "@/features/auth/logout";
import { NavLink, Outlet } from "react-router-dom";

export const PageLayout = () => {
  const { user } = useUserStore();
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-gray-700 border-r">
        <h3>{user?.name}</h3>
        <div className="p-4 font-semibold text-gray-50">AdminPanel</div>
        <nav className="flex flex-col w-full text-white text-2xl px-5">
          <NavLink to="/" end>
            Home
          </NavLink>
          <LogoutButton />
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};
