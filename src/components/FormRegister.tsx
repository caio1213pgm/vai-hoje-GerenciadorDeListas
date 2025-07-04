import { useState } from "react";
import ButtonEye from "./ButtonEye";
import ButtonSubmit from "./ButtonSubmit";
import { DivGroupInput, Input } from "./GruopInput";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";

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
      className="flex justify-center flex-col items-center gap-4 bg-gray-700 py-10 px-5 rounded-2xl border-2 border-gray-600"
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

      <DivGroupInput title="Senha" messageError={errors.password?.message}>
        <Input type={type ? "password" : "text"} {...register("password")} />
        <ButtonEye type={type} setType={setType} />
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
