import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, useSessionStore } from "..";
import { useUserStore } from "@/entities/user/model/userStore";
import { fetchUserProfile } from "@/entities/user/api/getUser";

export const useAuthSync = () => {
  const { setSession } = useSessionStore();
  const { setUser, setLoading } = useUserStore();
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);

      if (firebaseUser) {
        setSession(firebaseUser);
        try {
          const profile = await fetchUserProfile(firebaseUser.uid);
          setUser(profile);
        } catch (error) {
          console.error("Failed to sync profile:", error);
          setUser(null);
        }
      } else {
        setSession(null);
        setUser(null);
      }
      setLoading(false);
      setIsReady(true);
    });
    return () => unsubscribe();
  }, [setSession, setUser, setLoading]);
  return isReady;
};
