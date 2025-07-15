import { useForm } from "react-hook-form";
import { DivGroupInput } from "../GruopInput";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import ButtonEye from "../ButtonEye";
import ButtonSubmit from "../ButtonSubmit";
import { useAuth } from "../../context/AuthContext";
import { Input } from "@/components/ui/input";

const schema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type FormLoginData = z.infer<typeof schema>;

function FormLogin() {
    const { signInUser } = useAuth();
    const [type, setType] = useState<boolean>(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormLoginData>({
        resolver: zodResolver(schema),
    });

    function sendData(data: FormLoginData) {
        try {
            signInUser(data);
        } catch (error) {
            console.log("Erro ao fazer login:", error);
        }
    }

    return (
        <form
            className="flex justify-center flex-col items-center gap-4"
            onSubmit={handleSubmit(sendData)}
        >
            <DivGroupInput title="Email" messageError={errors.email?.message}>
                <Input type="text" {...register("email")} />
            </DivGroupInput>

            <DivGroupInput
                title="Senha"
                messageError={errors.password?.message}
            >
                <div className="flex">
                    <Input
                        type={type ? "password" : "text"}
                        {...register("password")}
                    ></Input>
                    <ButtonEye type={type} setType={setType} />
                </div>
            </DivGroupInput>

            <ButtonSubmit text="Entrar" />
        </form>
    );
}
export default FormLogin;
