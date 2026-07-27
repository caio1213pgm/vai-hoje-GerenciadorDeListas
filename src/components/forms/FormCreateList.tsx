import { useAuth } from "@/context/AuthContext";
import { createNewList } from "@/hooks/createNewList";
import { onCopyLink } from "@/utils/copyLink";
import { zodResolver } from "@hookform/resolvers/zod";
import { Copy } from "lucide-react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import ButtonSubmit from "../buttons/ButtonSubmit";
import { DivGroupInput } from "../GruopInput";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const schema = z.object({
  listName: z.string().min(3, { message: "Título é obrigatório" }),
  ListDescription: z.string(),
});

type createListType = z.infer<typeof schema>;

function FormCreateList() {
  const { user } = useAuth();
  const [listId, setListId] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createListType>({
    resolver: zodResolver(schema),
  });

  async function createList(data: createListType) {
    if (!user) {
      return;
    }
    const listName = data.listName;
    const listDescription = data.ListDescription;
    const id_list = nanoid(15);
    createNewList({
      user,
      id_list,
      listName,
      listDescription,
    }).then(() => {
      setListId(id_list);
    });
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

        {listId && (
          <Button
            variant="outline"
            type="button"
            size="icon"
            onClick={() => onCopyLink({ listId: listId })}
            title="Copiar link"
          >
            <Copy />
          </Button>
        )}
      </div>
    </form>
  );
}
export default FormCreateList;
