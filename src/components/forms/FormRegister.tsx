import { useState } from "react";
import ButtonEye from "../buttons/ButtonEye";
import ButtonSubmit from "../buttons/ButtonSubmit";
import { DivGroupInput } from "../GruopInput";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { Input } from "../ui/input";

const schemaRegister = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z
        .string()
        .min(6, "Confirmação de senha deve ter pelo menos 6 caracteres"),
    username: z
        .string()
        .min(3, "Nome de usuário deve ter pelo menos 3 caracteres"),
});

export type FormRegisterData = z.infer<typeof schemaRegister>;

function FormRegister() {
    const [type, setType] = useState<boolean>(true);
    const { createNewUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormRegisterData>({
        resolver: zodResolver(schemaRegister),
    });

    function onSubmit(data: FormRegisterData) {
        try {
            createNewUser(data);
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
        }
    }

    return (
        <form
            className="flex justify-center flex-col items-center gap-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <DivGroupInput title="Email" messageError={errors.email?.message}>
                <Input type="text" {...register("email")} />
            </DivGroupInput>

            <DivGroupInput
                title="Nome de usuário"
                messageError={errors.username?.message}
            >
                <Input type="text" {...register("username")} />
            </DivGroupInput>

            <DivGroupInput
                title="Senha"
                messageError={errors.password?.message}
            >
                <div className="flex">
                    <Input
                        type={type ? "password" : "text"}
                        {...register("password")}
                    />
                    <ButtonEye type={type} setType={setType} />
                </div>
            </DivGroupInput>

            <DivGroupInput
                title="Confirmar Senha"
                messageError={errors.confirmPassword?.message}
            >
                <Input type="password" {...register("confirmPassword")} />
            </DivGroupInput>

            <ButtonSubmit text="Fazer registro" />
        </form>
    );
}
export default FormRegister;
