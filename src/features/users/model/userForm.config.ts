import type { User } from "../../../entities/user/model/types";

interface SelectOptions<T extends string> {
  value: T;
  label: string;
}

export interface FormFieldConfig<K extends keyof User = keyof User> {
  key: K;
  label: string;
  type: "input" | "select" | "readonly";
  editable: boolean;
  options?: K extends "role"
    ? SelectOptions<User["role"]>[]
    : K extends "status"
      ? SelectOptions<User["status"]>[]
      : never;
}

export const userFormConfig: FormFieldConfig[] = [
  {
    key: "name",
    label: "Name",
    type: "input",
    editable: true,
  },
  {
    key: "email",
    label: "Email",
    type: "input",
    editable: true,
  },
  {
    key: "role",
    label: "Role",
    type: "select",
    editable: true,
    options: [
      { value: "user", label: "User" },
      { value: "admin", label: "Admin" },
    ],
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    editable: true,
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" },
    ],
  },
  {
    key: "createdAt",
    label: "Created at",
    type: "readonly",
    editable: false,
  },
];
