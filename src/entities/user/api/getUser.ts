import { db } from "@/entities/session";
import { doc, getDoc } from "firebase/firestore";
import { mapUserDto, type UserDTO } from "../lib/mapUserData";
import type { User } from "../model/types";

export const fetchUserProfile = async (uid: string): Promise<User | null> => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const rawData = {
        id: docSnap.id,
        ...docSnap.data(),
      } as UserDTO;
      return mapUserDto(rawData);
    }
    console.warn(`User profile for UID: ${uid} not found in Firestore`);
    return null;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
