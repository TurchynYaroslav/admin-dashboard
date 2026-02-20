import type { Timestamp } from "firebase/firestore";
import type { User, UserRole, UserStatus } from "../";

export type UserDTO = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  avatar?: string;
  createdAt: Timestamp;
  lastLogin?: Timestamp;
};

export const mapUserDto = (data: UserDTO): User => {
  return {
    ...data,
    role: data.role as UserRole,
    status: data.status as UserStatus,
    createAt:
      data.createdAt?.toDate().toISOString() || new Date().toISOString(),
    lastLogin: data.lastLogin?.toDate().toISOString(),
  };
};
