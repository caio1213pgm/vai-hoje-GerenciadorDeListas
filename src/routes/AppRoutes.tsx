import { BrowserRouter, Route, Routes } from "react-router";
import App from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Perfil from "../pages/auth/Perfil";
import { useAuth } from "../context/AuthContext";

export function AppRoutes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {user ? (
          <Route path="/perfil" element={<Perfil />} />
        ) : (
          <Route path="/perfil" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
