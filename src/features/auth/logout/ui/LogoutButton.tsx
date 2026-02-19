import { useSessionStore } from "@/entities/session";
import { Button } from "@/shared/ui";

export function LogoutButton() {
  const logoutAction = useSessionStore((s) => s.logout);
  return (
    <Button variant="delete" onClick={logoutAction}>
      Logout
    </Button>
  );
}
