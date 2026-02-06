import { useEffect, useState } from "react";
import type { User } from "../../types/user";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface UserModalProps {
  isOpen: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (user: UseForm) => void;
}

interface SelectOptions<T extends string> {
  value: T;
  label: string;
}

interface FormFieldConfig<K extends keyof User = keyof User> {
  key: K;
  label: string;
  type: "input" | "select" | "readonly";
  editable: boolean;
  options?: K extends "role"
    ? SelectOptions<User["role"]>[]
    : K extends "status"
      ? SelectOptions<User["status"]>[]
      : never;
}

type UseForm = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin" | "";
  status: "active" | "inactive" | "";
  createdAt: string | "";
};

const UserModal = ({ isOpen, user, onClose, onSave }: UserModalProps) => {
  const userFormConfig: FormFieldConfig[] = [
    {
      key: "name",
      label: "Name",
      type: "input",
      editable: true,
    },
    {
      key: "email",
      label: "Email",
      type: "input",
      editable: true,
    },
    {
      key: "role",
      label: "Role",
      type: "select",
      editable: true,
      options: [
        { value: "user", label: "User" },
        { value: "admin", label: "Admin" },
      ],
    },
    {
      key: "status",
      label: "Status",
      type: "select",
      editable: true,
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ],
    },
    {
      key: "createdAt",
      label: "Created at",
      type: "readonly",
      editable: false,
    },
  ];

  const defaultUserData: UseForm = {
    id: Math.random().toString(36).slice(2, 5),
    name: "",
    email: "",
    role: "",
    status: "",
    createdAt: new Date().toISOString(),
  };

  const [userData, setUserData] = useState<UseForm>(defaultUserData);

  useEffect(() => {
    console.log("user changed:", user);
    if (user) {
      setUserData({
        id: user?.id ?? "",
        name: user?.name ?? "",
        email: user?.email ?? "",
        role: user?.role ?? "",
        status: user?.status ?? "",
        createdAt: user?.createdAt ?? "",
      });
    } else {
      setUserData(defaultUserData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const updateField = (field: keyof UseForm, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      className="absolute top-0 w-full h-full flex justify-center content-center items-center"
    >
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
            const value = userData[field.key];
            if (field.type === "readonly") {
              return (
                <div key={field.key}>
                  <label>{field.label}</label>
                  <span>{value}</span>
                </div>
              );
            }

            if (field.type === "select" && field.options) {
              return (
                <div key={field.key}>
                  <label>{field.label}</label>
                  <select
                    value={value}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        [field.key]: e.target.value,
                      }))
                    }
                  >
                    <option value="" disabled>
                      Select {field.label}
                    </option>
                    ;
                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              );
            }

            return (
              <div className="" key={field.key}>
                <Input
                  label={field.label}
                  value={value}
                  onChange={(e) => updateField(field.key, e)}
                  type={field.type}
                />
              </div>
            );
          })}

          <div className="flex justify-end gap-3">
            <Button
              variant="save"
              onClick={() => {
                onSave(userData);
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
