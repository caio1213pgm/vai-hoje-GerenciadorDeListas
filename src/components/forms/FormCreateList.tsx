import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { DivGroupInput } from "../GruopInput";
import { Input } from "../ui/input";
import ButtonSubmit from "../ButtonSubmit";
import { createNewList } from "@/hooks/createNewList";
import { nanoid } from "nanoid";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
    listName: z.string().min(3, { message: "Título é obrigatório" }),
    ListDescription: z.string(),
});

type createListType = z.infer<typeof schema>;

function FormCreateList() {

    const { user } = useAuth();
    const [copyLink, setCopyLink] = useState<string>("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<createListType>({
        resolver: zodResolver(schema),
    });

    function createList(data: createListType) {
        if (!user) {
            return;
        }
        const listName = data.listName;
        const listDescription = data.ListDescription;
        const id_list = nanoid(15);
        createNewList({ user, id_list, listName, listDescription });
        const urlCopy = `http://localhost:5173/lists/${id_list}`;
        setCopyLink(urlCopy);
    }

    function onCopyLink() {
        console.log("pegou");
        navigator.clipboard.writeText(copyLink);
        toast("Link copiado para a area de tranferência");
    }
    
    return (
        <form
            className="flex justify-center flex-col items-center gap-4"
            onSubmit={handleSubmit(createList)}
        >
            <DivGroupInput
                title="Digite o nome da sua lista"
                messageError={errors.listName?.message}
            >
                <Input type="text" {...register("listName")} />
            </DivGroupInput>
            <DivGroupInput
                title="Adicione uma descrição (opcional)"
                messageError={errors.ListDescription?.message}
            >
                <Input type="text" {...register("ListDescription")} />
            </DivGroupInput>

            <div className="flex gap-10 items-center">
                <ButtonSubmit text="Criar lista" />

                {copyLink && (
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onCopyLink}
                    >
                        <Copy />
                    </Button>
                )}
            </div>
        </form>
    );
}
export default FormCreateList;
