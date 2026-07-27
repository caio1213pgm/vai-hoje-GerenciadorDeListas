import { deleteListById } from "@/lib/deleteListByid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import ButtonSubmit from "./buttons/ButtonSubmit";
import { DivGroupInput } from "./GruopInput";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";

const schema = z.object({
  confirmationId: z.string().min(15, "O ID de confirmação é obrigatório"),
});

type deleteListDialogProps = z.infer<typeof schema>;
type DeleteListDialogProps = {
  id: string;
  open: boolean;
  onClose: () => void;
};
function DeleteListDialog({ id, open, onClose }: DeleteListDialogProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<deleteListDialogProps>({
    resolver: zodResolver(schema),
  });

  function handleDeleteList(data: deleteListDialogProps) {
    if (data.confirmationId !== id) {
      return toast("ID incorreto, tente novamente");
    }
    deleteListById(id);
    toast("Lista excluída com sucesso");
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        onCloseFn={onClose}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form
          onSubmit={handleSubmit(handleDeleteList)}
          className="flex flex-col gap-4"
        >
          <DialogHeader>
            <DialogTitle>Deseja excluir lista?</DialogTitle>
            <DialogDescription>Id da lista: {id}</DialogDescription>
          </DialogHeader>
          <DivGroupInput
            title="Digite o id para confirmar a exclusão"
            messageError={errors.confirmationId?.message}
          >
            <Input type="text" {...register("confirmationId")} />
          </DivGroupInput>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <ButtonSubmit text="Excluir Lista" />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteListDialog;
