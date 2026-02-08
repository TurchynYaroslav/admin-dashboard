import Button from "../../../components/ui/Button";
import type { User } from "../../../types/user";
import { userFormConfig } from "../config/userForm.config";
import useUserForm from "../hooks/useUserForm";
import UserFormField from "./UserFormField";


interface UserFormProps {
  user: User | null;
  onSave: (user: User) => void;
  onClose: () => void;
}

const UserForm = ({ onSave, user, onClose }: UserFormProps) => {
  const { form, updateField } = useUserForm(user);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        w-full max-w-xl
        rounded-xl
        bg-white
        shadow-xl
        border border-gray-200
        p-6
        z-20
      "
    >
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-1">
          User details
          <span className="rounded-md h-fit bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
            ID#{user?.id}
          </span>
        </h2>

        <button
          onClick={onClose}
          className="
            w-8 h-8
            flex items-center justify-center
            rounded-md
            text-gray-500
            hover:bg-gray-100
            hover:text-gray-900
            transition
          "
          aria-label="Close modal"
        >
          <span className="sr-only">Close</span>
          <div className="relative w-4 h-4">
            <span className="absolute inset-0 rotate-45 bg-current h-px m-auto" />
            <span className="absolute inset-0 -rotate-45 bg-current h-px m-auto" />
          </div>
        </button>
      </div>

      <div className="space-y-3 mb-8 text-sm text-gray-700">
        {userFormConfig.map((field) => {
          return (
            <UserFormField
              key={field.key}
              value={form[field.key]}
              field={field}
              onChange={(e) => updateField(field.key, e)}
            />
          );
        })}

        <div className="flex justify-end gap-3">
          <Button
            variant="save"
            onClick={() => {
              onSave(form);
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
