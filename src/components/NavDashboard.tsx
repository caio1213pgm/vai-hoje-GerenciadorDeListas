import { useState } from "react";
import ButtonNav from "./ButtonNav";
import { IoMdCloseCircle } from "react-icons/io";
import { MdArrowDropDownCircle } from "react-icons/md";


function NavDashboard() {
  const [hidden, setHidden] = useState<boolean>(false);
  return (
    <>
      {hidden ? (
        <div className="bg-gray-600 w-[230px] md:w-[350px] pt-8 h-[400px] px-5 border-2 border-gray-600 rounded">
          <button
            className="absolute left-1 top-22 text-2xl text-gray-100"
            onClick={() => setHidden(!hidden)}
          >
            <IoMdCloseCircle />
          </button>

          <nav>
            <div className="flex flex-col gap-6 ">
              <ButtonNav textButton="Criar Lista" value="1"/>
              
              <ButtonNav textButton="Listas criadas" value="2"/>

              <ButtonNav textButton="Excluir Lista" value="3"/>

            </div>
          </nav>
        </div>
      ) : (
        <div className="bg-gray-600 w-[230px] md:w-[350px] p-2 border-2 border-gray-600 rounded">
          <button
            className="text-2xl text-gray-200 flex items-end gap-2"
            onClick={() => setHidden(!hidden)}
          >
            Menu
            <MdArrowDropDownCircle />
          </button>
        </div>
      )}
    </>
  );
}
export default NavDashboard;
