import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UiLanguage = "ru" | "eng";
export type UiTheme = "light" | "dark";

export type UiModel = {
  isSidebarOpen: boolean;
  language: UiLanguage;
  theme: UiTheme;
  action: {
    toggleSidebar: () => void;
    setLanguage: (language: UiLanguage) => void;
    setTheme: (theme: UiTheme) => void;
  };
};

export const useUiStore = create<UiModel>()(
  persist(
    (set) => ({
      isSidebarOpen: true,
      language: "eng",
      theme: "light",
      action: {
        toggleSidebar: () =>
          set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
        setLanguage: (language) => set({ language }),
        setTheme: (theme) => set({ theme }),
      },
    }),
    {
      name: "app-settings",
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
      }),
    },
  ),
);
