import { BrowserRouter, Route, Routes } from "react-router";
import App from "../pages/Home";
import Login from "../pages/auth/Login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
