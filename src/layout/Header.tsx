import { Link } from "react-router";
import { type User } from "firebase/auth";
import { FaUserSlash } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function User() {
  const { user } = useAuth();

  return (
    <div className="flex items-center text-white gap-2 pr-6">
      <Link
        to={user ? "/perfil" : "/login"}
        className="flex items-center gap-2"
      >
        <h1 className="text-white text-lg">
          {user ? `Olá, ${user.displayName}!` : "Você não está logado"}
        </h1>
        {user ? <FaUser /> : <FaUserSlash />}
      </Link>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-gray-700 h-[82px]">
      <div className="flex items-center h-full justify-between">
        <h1 className="text-3xl font-medium text-white hover:scale-105 pl-6 cursor-pointer">
          <Link to="/">Vai Hoje?</Link>
        </h1>
        <div>
          <User />
        </div>
      </div>
    </header>
  );
}
export default Header;
