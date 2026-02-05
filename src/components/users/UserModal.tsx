import type { User } from "../../types/user";

interface UserModalProps {
  isOpen: boolean;
  user: User | null;
  onClose: () => void;
  onSave: () => void;
}

const UserModal = ({ isOpen, user, onClose, onSave }: UserModalProps) => {
  if (isOpen)
    return (
      <div className="bg-green-800 w-100 h-52">
        <span>{user?.name}</span>
        <button onClick={() => onClose()}>close</button>
        <button onClick={() => onSave()}>save</button>
      </div>
    );
};

export default UserModal;
