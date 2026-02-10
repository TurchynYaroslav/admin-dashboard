import type { User } from "../../../entities/user";
import { Modal } from "../../../shared/ui";
import UserForm from "./UserForm";

interface UserModalProps {
  isOpen: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
}

export const UserModal = ({
  isOpen,
  user,
  onClose,
  onSave,
}: UserModalProps) => {
  if (!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <UserForm
        key={user?.id ?? "new"}
        onSave={onSave}
        user={user}
        onClose={onClose}
      />
    </Modal>
  );
};
