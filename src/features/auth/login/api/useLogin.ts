import { auth, useSessionStore } from "@/entities/session";
import { signInWithEmailAndPassword } from "firebase/auth";

interface LoginProps {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { setSession } = useSessionStore();

  const handleLogin = async ({ email, password }: LoginProps) => {
    try {
      const UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setSession(UserCredential.user);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          return { message: "Invalid email or password" };
        }
      }
    }
  };

  return handleLogin;
};
