import { useEffect, useState } from "react";
import type { User } from "../../types/user";
import type { UseForm } from "./UserForm";
import { createEmptyUserForm, mapUserToForm } from "./UserForm.utils";

const useUserForm = (user: User | null) => {
  const [form, setForm] = useState<UseForm>(() => createEmptyUserForm());

  useEffect(() => {
    if (user) {
      setForm(mapUserToForm(user));
    } else {
      setForm(createEmptyUserForm());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
