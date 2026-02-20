export type UserRole = "admin" | "manager" | "user";
export type UserStatus = "active" | "suspended" | "pending";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  avatar?: string;
  createAt: string;
  lastLogin?: string;
};
