import { useSessionStore } from "@/entities/session";
import { LogOut } from "lucide-react";

interface ButtonProps {
  isOpen: boolean;
}

export function LogoutButton({ isOpen }: ButtonProps) {
  const logoutAction = useSessionStore((s) => s.logout);
  return (
    <button
      onClick={logoutAction}
      className="flex items-center h-12 px-3 rounded-md text-red-500 hover:bg-red-50 transition-all duration-300 w-full"
    >
      <div className="shrink-0 w-8 flex justify-center">
        <LogOut size={24} />
      </div>

      <span
        className={` text-zinc-700 ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap font-medium
        ${isOpen ? "opacity-100 max-w-40" : "opacity-0 max-w-0"}`}
      >
        Logout
      </span>
    </button>
  );
}
