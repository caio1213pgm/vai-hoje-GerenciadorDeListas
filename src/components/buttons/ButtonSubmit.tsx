import { Button } from "../ui/button";

type ButtonSubmitProps = {
    text: string;
};
function ButtonSubmit({ text }: ButtonSubmitProps) {
    return (
        <Button type="submit" className="text-xl" size="lg">
            {text}
        </Button>
    );
}
export default ButtonSubmit;
