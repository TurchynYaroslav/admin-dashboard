import { useState } from "react";
import type { User } from "../../../../entities/user";
import { mapUserToForm, createEmptyUserForm } from "../UserForm.utils";

const useUserForm = (user: User | null) => {
  const [form, setForm] = useState<User>(() =>
    user ? mapUserToForm(user) : createEmptyUserForm(),
  );

  const updateField = (key: keyof User, value: string) =>
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

  return {
    form,
    updateField,
    reset: () => setForm(createEmptyUserForm()),
  };
};

export default useUserForm;
