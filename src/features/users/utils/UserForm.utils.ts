import type { User } from "../../../types/user";

export function createEmptyUserForm(): User {
  return {
    id: Math.random().toString(36).slice(2, 5),
    name: "",
    email: "",
    role: "user",
    status: "active",
    createdAt: new Date().toISOString(),
  };
}

export function mapUserToForm(user: User): User {
  return { ...user };
}
