import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-gray-700 h-[82px]">
      <div className="flex items-center h-full ">
        <h1 className="text-3xl font-medium text-white hover:scale-105 pl-6 cursor-pointer">
          <Link to="/">Vai Hoje?</Link>
        </h1>
      </div>
    </header>
  );
}
export default Header;
