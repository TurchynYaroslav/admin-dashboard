import type { User } from "../../../types/user";
import ModalLayout from "../../../components/ui/ModalLayout";
import type { UseForm } from "./UserForm";
import UserForm from "./UserForm";

interface UserModalProps {
  isOpen: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (user: UseForm) => void;
}

const UserModal = ({ isOpen, user, onClose, onSave }: UserModalProps) => {
  if (!isOpen) return null;
  return (
    <ModalLayout onClose={onClose}>
      <UserForm
        key={user?.id ?? "new"}
        onSave={onSave}
        user={user}
        onClose={onClose}
      />
    </ModalLayout>
  );
};

export default UserModal;
