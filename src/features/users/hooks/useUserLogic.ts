import { useCallback, useMemo, useState } from "react";
import type { User } from "../../../types/user";
import { initialUsers } from "../mocks/users";
import { createUsersColumns } from "../config/users.columns";
import type { UseForm } from "../components/UserForm";

const useUserLogic = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const openModalForCreate = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };
  const handleSave = useCallback(
    (userData: UseForm) => {
      const fieldsToValidate: (keyof UseForm)[] = [
        "name",
        "email",
        "role",
        "status",
      ];
      const isValid = fieldsToValidate.every(
        (field) => userData[field].trim() !== "",
      );
      if (!isValid) return;

      const newUser: User = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        role: userData.role,
        status: userData.status,
        createdAt: userData.createdAt,
      };

      setUsers((prev) => {
        if (selectedUser) {
          return prev.map((u) => (u.id === newUser.id ? newUser : u));
        }
        return [...prev, newUser];
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

export default useUserLogic;
