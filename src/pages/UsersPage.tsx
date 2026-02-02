import Table from "../components/table/Table";
import type { Column } from "../components/table/table.types";
import { users } from "../data/users";
import type { User } from "../types/user";

const columns: Column<User>[] = [
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
    label: "actions",
    actions: [
      {
        id: "edit",
        label: "Edit",
        callback: (row) => {
          console.log("Edit", row.name);
        },
      },
      {
        id: "delete",
        label: "Delete",
        callback: (row) => {
          console.log("Delete", row.name);
        },
      },
    ],
  },
];

const UsersPage = () => {
  return <Table data={users} columns={columns} getRowKey={(user) => user.id} />;
};

export default UsersPage;
