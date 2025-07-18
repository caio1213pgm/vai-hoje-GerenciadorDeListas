import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Button } from "../ui/button";

type buttonEyeProps = {
    type: boolean;
    setType: (value: boolean) => void;
};

function ButtonEye({ type, setType }: buttonEyeProps) {
    function toggleType() {
        setType(!type);
    }
    return (
        <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => toggleType()}
        >
            {type ? <FaRegEyeSlash /> : <FaRegEye />}
        </Button>
    );
}
export default ButtonEye;
