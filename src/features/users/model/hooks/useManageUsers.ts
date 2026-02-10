import { useCallback, useMemo, useState } from "react";
import type { User } from "../../../../entities/user/model/types";
import { initialUsers } from "../../api/users";
import { createUsersColumns } from "../users.columns";

export const useManageUsers = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const openModalForCreate = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };
  const handleSave = useCallback(
    (userData: User) => {
      setUsers((prev) => {
        if (selectedUser) {
          return prev.map((u) => (u.id === userData.id ? userData : u));
        }
        return [...prev, userData];
      });
      setIsModalOpen(false);
    },
    [selectedUser],
  );

  const handleEdit = useCallback((user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  }, []);

  const handleDelete = useCallback(
    (user: User) => setUsers((prev) => prev.filter((u) => u.id !== user.id)),
    [],
  );

  const columns = useMemo(() => {
    return createUsersColumns({
      onEdit: handleEdit,
      onDelete: handleDelete,
    });
  }, [handleDelete, handleEdit]);

  return {
    users,
    columns,
    isModalOpen,
    selectedUser,
    handleEdit,
    handleDelete,
    handleSave,
    closeModal,
    openModalForCreate,
  };
};
