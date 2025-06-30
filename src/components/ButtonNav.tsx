import { useDashboard } from "../context/DashboardContext";

type ButtonNavProps = {
  textButton: string;
  value: string;
};
function ButtonNav({ textButton, value }: ButtonNavProps) {
    const {setValueMenu} = useDashboard()
  return (
    <button
      className=" bg-gray-500 text-gray-200 border-t-2 border-b-2 py-2 px-1 font-medium text-xl text-start rounded hover:text-black hover:bg-gray-100 duration-200"
      onClick={() => setValueMenu(value)}
    >
      {textButton}
    </button>
  );
}

export default ButtonNav;
