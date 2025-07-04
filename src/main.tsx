import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./routes/AppRoutes.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import DashboardProvider from "./context/DashboardContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <DashboardProvider>
      <AppRoutes />
    </DashboardProvider>
  </AuthProvider>
);
