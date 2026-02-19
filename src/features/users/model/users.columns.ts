import type { Column } from "../../../shared/ui/Table/table.types";
import type { User } from "../../../entities/user/model/types";

type UserColumnHandlers = {
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

export function createUsersColumns({
  onEdit,
  onDelete,
}: UserColumnHandlers): Column<User>[] {
  return [
    { id: "id", label: "ID", type: "data" },
    { id: "name", label: "Name", type: "data" },
    { id: "email", label: "Email", type: "data" },
    { id: "role", label: "Role", type: "data" },
    {
      id: "status",
      label: "Status",
      render: (value) => (value === "active" ? "🟢 Active" : "🔴 Inactive"),
      type: "data",
    },
    {
      id: "createdAt",
      label: "CreatedAt",
      render: (value) => new Date(value as string).toLocaleDateString(),
      type: "data",
    },
    {
      type: "actions",
      label: "Actions",
      actions: [
        {
          id: "edit",
          label: "Edit",
          callback: onEdit,
        },
        {
          id: "delete",
          label: "Delete",
          callback: onDelete,
        },
      ],
    },
  ];
}
