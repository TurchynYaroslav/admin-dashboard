import { useUserStore } from "@/entities/user/model/userStore";
import { LogoutButton } from "@/features/auth/logout";
import { useUiStore } from "@/shared/model";
import { Button } from "@/shared/ui";
import { NavLink } from "react-router-dom";
import { useSidebarItems } from "..";

export function Sidebar() {
  const { user } = useUserStore();
  const { toggleSidebar } = useUiStore((state) => state.action);
  const mem = useSidebarItems();
  return (
    <aside className="w-64 bg-gray-700 border-r">
      <h3>{user?.name}</h3>
      <div className="p-4 font-semibold text-gray-50">AdminPanel</div>
      <nav className="flex flex-col w-full text-white text-2xl px-5">
        {mem.map((item) => {
          return (
            <NavLink key={item.path} to={item.path} end>
              {<item.Icon />}
              {item.label}
            </NavLink>
          );
        })}
        <Button onClick={toggleSidebar} variant="create">
          toggleSidebar
        </Button>
        <LogoutButton />
      </nav>
    </aside>
  );
}
