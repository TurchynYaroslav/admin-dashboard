import Table from "../components/table/Table";
import { users } from "../data/users";
import { createUsersColumns } from "../components/users/users.columns";

const UsersPage = () => {
  const columns = createUsersColumns({
    onEdit: (user) => console.log("edit", user.name),
    onDelete: (user) => console.log("Delete", user.name),
  });

  return <Table data={users} columns={columns} getRowKey={(user) => user.id} />;
};

export default UsersPage;
