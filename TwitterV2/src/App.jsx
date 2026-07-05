import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { TrillsProvider } from "./context/TrillsProvider";

function App() {
  return (
    <BrowserRouter>
      <TrillsProvider>
        <AppRoutes />
      </TrillsProvider>
    </BrowserRouter>
  );
}

export default App;
