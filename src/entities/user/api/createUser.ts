import { db } from "@/entities/session";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import type { UserRole, UserStatus } from "../model/types";

interface CreateUserParams {
  uid: string;
  email: string;
  name?: string;
}

export const createUserProfile = async ({
  uid,
  email,
  name,
}: CreateUserParams) => {
  const userRef = doc(db, "users", uid);
  const newUser = {
    email,
    name: name || email.split("@")[0],
    role: "user" as UserRole,
    status: "active" as UserStatus,
    createdAt: serverTimestamp(),
    lastLogin: serverTimestamp(),
  };

  try {
    await setDoc(userRef, newUser);
    return { id: uid, ...newUser };
  } catch (e) {
    console.error("Error writing document to Firestore: ", e);
    throw e;
  }
};
