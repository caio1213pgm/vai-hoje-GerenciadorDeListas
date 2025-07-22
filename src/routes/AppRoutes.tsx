import { BrowserRouter, Route, Routes } from "react-router";
import App from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Perfil from "../pages/auth/Perfil";
import { useAuth } from "../context/AuthContext";
import NewPerson from "../pages/dashboard/PageNewPerson";
import PageCreateList from "@/pages/dashboard/PageCreateList";
import PageViewMyLists from "@/pages/dashboard/PageViewMyLists";
import PagePersonsOfList from "@/pages/dashboard/PagePersonsOfList";

export function AppRoutes() {
    const { user } = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/lists/:idList" element={<NewPerson />} />

                {user ? (
                    <>
                        <Route path="/perfil" element={<Perfil />} />
                        <Route path="/login" element={<PageViewMyLists />} />
                        <Route
                            path="/dashboard"
                            element={<PageViewMyLists />}
                        />
                        <Route
                            path="/createList"
                            element={<PageCreateList />}
                        />
                        <Route path="/register" element={<PageViewMyLists />} />
                        <Route path="/myLists" element={<PageViewMyLists />} />
                        <Route
                            path="myList/:idList"
                            element={<PagePersonsOfList />}
                        />
                    </>
                ) : (
                    <>
                        <Route path="/register" element={<Register />} />
                        <Route path="/perfil" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={<Login />} />
                        <Route path="/createList" element={<Login />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}
