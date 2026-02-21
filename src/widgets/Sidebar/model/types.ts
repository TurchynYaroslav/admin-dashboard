import type { UserRole } from "@/entities/user";
import {
  FileText,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type SidebarItemConfig = {
  path: string;
  label: string;
  Icon: LucideIcon;
  roles?: UserRole[];
};

export const SIDEBAR_ITEM: SidebarItemConfig[] = [
  { path: "/", label: "Dashboard", Icon: LayoutDashboard },
  { path: "/users", label: "Users", Icon: Users, roles: ["admin", "manager"] },
  { path: "/roles", label: "Roles", Icon: ShieldCheck, roles: ["admin"] },
  { path: "/logs", label: "Logs", Icon: FileText, roles: ["admin"] },
  { path: "/settings", label: "Settings", Icon: Settings },
];
