import { useAuthSync } from "../entities/session/lib/useAuthSync";

import { AppRouter } from "./providers/router";
import "./styles/index.css";

const App = () => {
  const isReady = useAuthSync();

  if (!isReady) return <h1>Loading...</h1>;

  return <AppRouter />;
};

export default App;
