import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

type buttonEyeProps = {
  type: boolean;
  setType: (value: boolean) => void;
};

function ButtonEye({ type, setType }: buttonEyeProps) {
  function toggleType() {
    setType(!type);
  }
  return (
    <button className="text-white text-xl" type="button" onClick={() => toggleType()}>
      {type ? <FaRegEyeSlash /> : <FaRegEye />}
    </button>
  );
}
export default ButtonEye;
