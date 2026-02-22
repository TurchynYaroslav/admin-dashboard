import { NavLink } from "react-router-dom";
import type { SidebarItemConfig } from "../model/types";

interface SidebarItemProp {
  item: SidebarItemConfig;
  isOpen: boolean;
}

export function SidebarItem({ item, isOpen }: SidebarItemProp) {
  const { Icon, label, path } = item;
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center h-12 p-3 rounded-md transition-all duration-300 text-zinc-700 
      ${isActive ? "bg-violet-500/20 text-violet-700" : "hover:bg-gray-200 text-zinc-500"}`
      }
    >
      <div className="shrink-0 w-8 flex justify-center">
        <Icon size={24} />
      </div>

      <span
        className={`ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap
        ${isOpen ? "opacity-100 max-w-40" : "opacity-0 max-w-0"}`}
      >
        {label}
      </span>
    </NavLink>
  );
}
