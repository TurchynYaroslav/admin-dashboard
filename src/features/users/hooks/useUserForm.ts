import { useState } from "react";
import type { User } from "../../../types/user";

import { createEmptyUserForm, mapUserToForm } from "../utils/UserForm.utils";
import type { UseForm } from "../components/UserForm";

const useUserForm = (user: User | null) => {
  const [form, setForm] = useState<UseForm>(() =>
    user ? mapUserToForm(user) : createEmptyUserForm(),
  );

  const updateField = (key: keyof UseForm, value: string) =>
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
