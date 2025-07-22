import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import ButtonCopy from "./buttons/ButtonCopy";
import { EllipsisVertical } from "lucide-react";
import DeleteListDialog from "./deleteListDialog";

function CardListMenu({ id }: { id: string }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="p-1 cursor-pointer hover:bg-gray-700 bg-gray-800 rounded">
                <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 ">
                <DropdownMenuLabel className="flex justify-between items-center gap-2">
                    Copiar link de inscrição
                    <ButtonCopy listId={id} />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex justify-between items-center ">
                    <p>Excluir Lista</p>
                    <DeleteListDialog id={id} />
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default CardListMenu;
