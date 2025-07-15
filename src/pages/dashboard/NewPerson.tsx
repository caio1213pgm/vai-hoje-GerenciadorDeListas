import { useState } from "react";
import CardLoading from "../../components/CardLoading";
import { useParams } from "react-router";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../service/firebase";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DivGroupInput } from "../../components/GruopInput";
import ButtonSubmit from "../../components/ButtonSubmit";
import {
    DivPresenceInput,
    InputPresence,
    LabelInputPresence,
    TextRadio,
} from "../../components/GroupInputPresence";
import DivForms from "@/components/DivForms";
import { Input } from "@/components/ui/input";

const schema = z.object({
    name: z.string().min(3, { message: "Digite seu nome" }),
    email: z.string().email({ message: "Digite um e-mail válido" }),
    presence: z.enum(["sim", "nao"], {
        errorMap: () => ({ message: "Marque a opção de presença" }),
    }),
});
type RegisterPerson = z.infer<typeof schema>;
function NewPerson() {
    const [loading, setLoading] = useState<boolean>(true);
    const [message, setMessage] = useState<boolean>(true);
    const { idList } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterPerson>({
        resolver: zodResolver(schema),
    });

    async function stopLoading() {
        if (idList) {
            const listRef = doc(db, "lists", idList);
            const listSnap = await getDoc(listRef);
            if (listSnap.exists()) {
                setLoading(false);
            } else {
                setLoading(false);
                setMessage(false);
            }
        }
    }
    stopLoading();

    async function updateList(data: RegisterPerson) {
        if (data.presence === "nao") {
            return;
        }
        if (!idList) {
            return;
        }
        const listRef = doc(db, "lists", idList);
        const listSnap = await getDoc(listRef);
        if (!listSnap.exists()) {
            return;
        }
        const listData = listSnap.data();
        const people: RegisterPerson[] = Array.isArray(listData.people_list)
            ? listData.people_list
            : [];

        const emailExists = people.some(
            (p) => p.email.toLowerCase() === data.email.toLowerCase()
        );
        if (emailExists) {
            return alert("Email existente, tente outro email");
        }

        await updateDoc(listRef, {
            people_list: arrayUnion({
                name: data.name,
                email: data.email,
                presence: true,
            }),
        });
        console.log("presença confirmada");
    }

    return (
        <>
            {loading ? (
                <CardLoading />
            ) : message ? (
                <DivForms link="" title="" linkText="">
                    <form
                        className="flex justify-center flex-col items-center gap-4"
                        onSubmit={handleSubmit(updateList)}
                    >
                        <DivGroupInput
                            title="Digite seu nome:"
                            messageError={errors.name?.message}
                        >
                            <Input type="text" {...register("name")} />
                        </DivGroupInput>
                        <DivGroupInput
                            title="Digite seu email:"
                            messageError={errors.email?.message}
                        >
                            <Input type="text" {...register("email")} />
                        </DivGroupInput>

                        <DivPresenceInput
                            title="Deseja confirmar sua presença?"
                            messageError={errors.presence?.message}
                        >
                            <LabelInputPresence>
                                <InputPresence
                                    value="sim"
                                    {...register("presence")}
                                />
                                <TextRadio text="Sim" />
                            </LabelInputPresence>
                            <LabelInputPresence>
                                <InputPresence
                                    value="nao"
                                    {...register("presence")}
                                />
                                <TextRadio text="Não" />
                            </LabelInputPresence>
                        </DivPresenceInput>

                        <ButtonSubmit text="Confirmar presença" />
                    </form>
                </DivForms>
            ) : (
                <div>
                    <h1>Lista não encontrada</h1>
                </div>
            )}
        </>
    );
}
export default NewPerson;
