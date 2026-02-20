import type { UserRole, UserStatus } from "./types";

export const USER_ROLES: Record<UserRole, string> = {
  admin: "Admin",
  manager: "Manager",
  user: "User",
};

export const USER_STATUSES: Record<
  UserStatus,
  { label: string; color: string }
> = {
  active: { label: "Active", color: "green" },
  suspended: { label: "Suspended", color: "red" },
  pending: { label: "Pending", color: "yellow" },
};
