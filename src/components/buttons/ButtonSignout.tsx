import { Button } from "../ui/button";

type signoutProps = {
    onSignout: () => void;
};

function ButtonSignout({ onSignout }: signoutProps) {
    return (
        <Button
            variant="destructive"
            size="lg"
            className="text-xl"
            onClick={onSignout}
        >
            Sair da conta
        </Button>
    );
}
export default ButtonSignout;
