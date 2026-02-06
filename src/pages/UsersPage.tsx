import Table from "../components/table/Table";
import { initialUsers } from "../data/users";
import { createUsersColumns } from "../components/users/users.columns";
import { useEffect, useState } from "react";
import type { User } from "../types/user";
import UserModal from "../components/users/UserModal";
import UsersHeader from "../components/users/UsersHeader";
import Button from "../components/ui/Button";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(users);
  }, [users]);
  const columns = createUsersColumns({
    onEdit: (user) => {
      setSelectedUser(user);
      setIsModalOpen(true);
    },
    onDelete: (user) =>
      setUsers((prev) => prev.filter((u) => u.id !== user.id)),
  });

  return (
    <div className="relative w-full h-full">
      <UsersHeader>
        <div className="">
          <h1>Users</h1>
        </div>
        <div className="">
          <Button
            onClick={() => {
              setSelectedUser(null);
              setIsModalOpen(true);
            }}
            variant="create"
          >
            Create
          </Button>
        </div>
      </UsersHeader>
      <Table data={users} columns={columns} getRowKey={(user) => user.id} />
      <UserModal
        isOpen={isModalOpen}
        user={selectedUser}
        onClose={() => setIsModalOpen(false)}
        onSave={(userData) => {
          if (
            userData.name.trim() !== "" &&
            userData.email.trim() !== "" &&
            userData.role !== "" &&
            userData.status !== ""
          ) {
            const newUser: User = {
              id: userData.id,
              name: userData.name,
              email: userData.email,
              role: userData.role,
              status: userData.status,
              createdAt: userData.createdAt,
            };
            const newUserObj = {
              ...newUser,
            };
            if (selectedUser) {
              setUsers((prev) =>
                prev.map((u) => (u.id === newUser.id ? newUser : u)),
              );
            } else {
              setUsers((prev) => [...prev, newUserObj]);
            }
            setSelectedUser(newUserObj);
            setIsModalOpen(false);
          }
        }}
      />
    </div>
  );
};

export default UsersPage;
