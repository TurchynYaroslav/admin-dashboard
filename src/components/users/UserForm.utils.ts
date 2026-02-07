import type { User } from "../../types/user";
import type { UseForm } from "./UserForm";


export function createEmptyUserForm(): UseForm {
  return {
    id: Math.random().toString(36).slice(2, 5),
    name: "",
    email: "",
    role: "",
    status: "",
    createdAt: new Date().toISOString(),
  };
}

export function mapUserToForm(user: User): UseForm {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
    createdAt: user.createdAt,
  };
}
