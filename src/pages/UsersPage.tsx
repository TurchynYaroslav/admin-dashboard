import Table from "../components/table/Table";
import type { Column } from "../components/table/table.types";
import { users } from "../data/users";
import type { User } from "../types/user";

const columns: Column<User>[] = [
  { id: "id", label: "ID" },
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "role", label: "Role" },
  {
    id: "status",
    label: "Status",
    render: (value) => (value === "active" ? "🟢 Active" : "🔴 Inactive"),
  },
  {
    id: "createdAt",
    label: "CreatedAt",
    render: (value) => new Date(value as string).toLocaleDateString(),
  },
];

const UsersPage = () => {
  return <Table data={users} columns={columns} getRowKey={(user) => user.id} />;
};

export default UsersPage;
