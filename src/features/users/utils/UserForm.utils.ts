import type { User } from "../../../types/user";
import type { UseForm } from "../components/UserForm";

export function createEmptyUserForm(): UseForm {
  return {
    id: Math.random().toString(36).slice(2, 5),
    name: "",
    email: "",
    role: "user",
    status: "active",
    createdAt: new Date().toISOString(),
  };
}

export function mapUserToForm(user: User): UseForm {
  return { ...user };
}
