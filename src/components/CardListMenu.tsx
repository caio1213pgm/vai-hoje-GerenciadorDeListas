import { exportToExcel } from "@/lib/excel";
import { getPersonsByIdList } from "@/lib/getPersonsByIdList";
import type { person } from "@/pages/dashboard/PageViewMyLists";
import { onCopyLink } from "@/utils/copyLink";
import { Copy, EllipsisVertical, FileDown, Trash2 } from "lucide-react";
import { useState } from "react";
import DeleteListDialog from "./DeleteListDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function CardListMenu({ id, listaName }: { id: string; listaName: string }) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const itensMenu: {
    label: string;
    icon: React.ReactElement;
    onClick: () => void;
    separator?: boolean;
  }[] = [
    {
      icon: <Copy />,
      label: "Copiar link",
      onClick: () => {
        onCopyLink({ listId: id });
      },
      separator: true,
    },
    {
      icon: <Trash2 />,
      label: "Apagar lista",
      onClick: () => {
        setOpenDeleteDialog(true);
      },
      separator: true,
    },
    {
      icon: <FileDown />,
      label: "Exportar para excel",
      onClick: async () => {
        const users = await getPersonsByIdList(id);
        const dataExecel =
          users?.map((item: person) => {
            return {
              Nome: item.name,
              Email: item.email,
              Presença: item.presence ? "Sim" : "Não",
            };
          }) || [];
        exportToExcel(dataExecel, listaName);
      },
    },
  ];

  return (
    <>
      <DeleteListDialog
        id={id}
        open={openDeleteDialog}
        onClose={() => {
          setOpenDeleteDialog(false);
        }}
      />
      <DropdownMenu>
        <DropdownMenuTrigger className="p-1 cursor-pointer hover:bg-gray-700 bg-gray-800 rounded">
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="px-4 py-2"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {itensMenu.map((item) => (
            <>
              <DropdownMenuItem onClick={item.onClick}>
                {item.icon}
                {item.label}
              </DropdownMenuItem>
              {item.separator && <DropdownMenuSeparator />}
            </>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
export default CardListMenu;
