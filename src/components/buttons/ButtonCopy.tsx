import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

type CopyProps = {
    listId?: string;
    action?: () => void;
};

function ButtonCopy({ action, listId }: CopyProps) {
    function onCopyClick() {
        navigator.clipboard.writeText(
            `https://vai-hoje-gerenciador-de-listas.vercel.app/lists/${listId}`
        );
        toast("Link copiado para área de tranferência");
    }

    return (
        <Button
            variant="outline"
            type="button"
            size="icon"
            onClick={action ? action : onCopyClick}
        >
            <Copy />
        </Button>
    );
}

export default ButtonCopy;
