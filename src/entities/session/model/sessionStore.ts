import { create } from "zustand";
import { signOut, type User } from "firebase/auth";
import { auth } from "../api/config";

interface isAuth {
  user: User | null;
  isAuth: boolean;
  setSession: (user: User | null) => void;
  logout: () => void;
}

export const useSessionStore = create<isAuth>((set) => ({
  user: null,
  isAuth: false,
  setSession: (user) => set({ user, isAuth: !!user }),
  logout: async () => {
    await signOut(auth);
  },
}));
