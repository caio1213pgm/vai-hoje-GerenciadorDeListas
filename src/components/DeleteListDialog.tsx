import { Trash2 } from "lucide-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import ButtonSubmit from "./buttons/ButtonSubmit";
import { Input } from "./ui/input";
import { DivGroupInput } from "./GruopInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { deleteListById } from "@/lib/deleteListByid";

const schema = z.object({
    confirmationId: z.string().min(15, "O ID de confirmação é obrigatório"),
});

type deleteListDialogProps = z.infer<typeof schema>;
function DeleteListDialog({ id }: { id: string }) {
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
    }

    return (
        <Dialog>
            <DialogTrigger asChild className="ml-25">
                <Button variant="outline" type="button" size="icon">
                    <Trash2 />
                </Button>
            </DialogTrigger>

            <DialogContent>
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

            {/* <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Deseja excluir lista?</DialogTitle>
                        <DialogDescription>Id da lista: {id}</DialogDescription>
                    </DialogHeader>
                    
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <ButtonSubmit text="Excluir Lista" />
                    </DialogFooter>
                </DialogContent> */}
        </Dialog>
    );
}

export default DeleteListDialog;
