import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, useSessionStore } from "..";

export const useAuthSync = () => {
  const { setSession } = useSessionStore();
  const [loaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setSession(firebaseUser);
      }
      setIsLoaded(true);
    });
    return () => unsubscribe();
  }, [setSession]);
  return loaded;
};
