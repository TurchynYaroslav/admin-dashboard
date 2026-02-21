import { Button } from "@/shared/ui";
import { useNavigate } from "react-router-dom";

export function ForbiddenPage() {
  const location = useNavigate();
  return (
    <div>
      <Button variant="save" onClick={() => location("/")}>
        To main page
      </Button>
    </div>
  );
}
