import { LogoutButton } from "@/features/auth/logout";
import { useUiStore } from "@/shared/model";
import { SidebarItem, useSidebarItems } from "..";
import { ChevronLeft, Waypoints } from "lucide-react";

export function Sidebar() {
  const { isSidebarOpen, action } = useUiStore();
  const SidebarItems = useSidebarItems();
  return (
    <aside
      className={`${isSidebarOpen ? "w-64" : "w-20"} bg-gray-100 transition-all duration-300 text-zinc-700 h-screen sticky top-0 left-0`}
    >
      <div className="h-16 flex items-center px-4 overflow-hidden border-b border-gray-200">
        <div className="shrink-0 w-8 flex justify-center">
          <Waypoints size={30} className="text-violet-600" />
        </div>

        <h1
          className={`ml-3 font-bold text-xl transition-all duration-300 overflow-hidden whitespace-nowrap
      ${isSidebarOpen ? "opacity-100 max-w-40" : "opacity-0 max-w-0"}`}
        >
          AdminPanel
        </h1>
      </div>
      <nav className="flex flex-col w-full text-sm h-[calc(100vh-64px)] p-3 gap-1">
        {SidebarItems.map((item) => {
          return (
            <SidebarItem isOpen={isSidebarOpen} key={item.path} item={item} />
          );
        })}
        <div className="mt-auto flex flex-col gap-1 border-t border-gray-200 pt-2">
          <button
            onClick={action.toggleSidebar}
            className="flex items-center h-12 px-3 rounded-md hover:bg-gray-200 
            text-zinc-700 transition-all duration-300"
          >
            <div className={`shrink-0 w-8 flex justify-center`}>
              <div
                className={`transition-transform duration-300 ${!isSidebarOpen && "rotate-180"}`}
              >
                <ChevronLeft size={24} />
              </div>
            </div>
            <span
              className={`ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap
                ${isSidebarOpen ? "opacity-100 max-w-40" : "max-w-0 opacity-0"}`}
            >
              Collapse
            </span>
          </button>
        </div>
        <LogoutButton isOpen={isSidebarOpen} />
      </nav>
    </aside>
  );
}
