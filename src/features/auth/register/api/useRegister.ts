import { auth, useSessionStore } from "@/entities/session";
import { createUserProfile } from "@/entities/user";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface RegisterProps {
  email: string;
  password: string;
}

export const useRegister = () => {
  const { setSession } = useSessionStore();

  const handleRegister = async ({ email, password }: RegisterProps) => {
    try {
      const UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = UserCredential.user;

      await createUserProfile({ uid: user.uid, email });

      setSession(user);

      return { success: true };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          console.log("That email address is already in use!");
          return { message: "That email address is already in use!" };
        }

        if (error.message === "Firebase: Error (auth/invalid-email).") {
          console.log("That email address is invalid!");
          return { message: "That email address is invalid!" };
        }
      }
    }
  };
  return handleRegister;
};
