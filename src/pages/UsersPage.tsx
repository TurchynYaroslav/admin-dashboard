import Table from "../components/table/Table";
import { initialUsers } from "../data/users";
import { createUsersColumns } from "../components/users/users.columns";
import { useState } from "react";
import type { User } from "../types/user";
import UserModal from "../components/users/UserModal";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const columns = createUsersColumns({
    onEdit: (user) => {
      setSelectedUser(user);
      setIsModalOpen(true);
    },
    onDelete: (user) => {
      setUsers((prev) => prev.filter((u) => u.id !== user.id));
    },
  });

  return (
    <div className="">
      <Table data={users} columns={columns} getRowKey={(user) => user.id} />
      <UserModal
        isOpen={isModalOpen}
        user={selectedUser}
        onClose={() => setIsModalOpen(false)}
        onSave={() => console.log("save")}
      />
    </div>
  );
};

export default UsersPage;
