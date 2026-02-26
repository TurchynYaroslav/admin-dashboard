import { useUserStore } from "@/entities/user/model/userStore";
import { useAuthSync } from "../entities/session/lib/useAuthSync";

import { AppRouter } from "./providers/router";
import "./styles/index.css";

const App = () => {
  useAuthSync();
  const isLoading = useUserStore((a) => a.isLoading);

  if (isLoading) return <h1>Loading...</h1>;

  return <AppRouter />;
};

export default App;
