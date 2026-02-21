import { useUserStore } from "@/entities/user/model/userStore";
import { useMemo } from "react";
import { SIDEBAR_ITEM } from "./types";

export const useSidebarItems = () => {
  const { user } = useUserStore();
  const filteredItems = useMemo(() => {
    return SIDEBAR_ITEM.filter((item) => {
      if (!item.roles) return true;
      return user?.role && item.roles.includes(user.role);
    });
  }, [user]);
  return filteredItems;
};
