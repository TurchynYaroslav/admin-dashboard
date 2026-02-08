import { useState } from "react";
import type { User } from "../../../types/user";

import { createEmptyUserForm, mapUserToForm } from "../utils/UserForm.utils";

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
