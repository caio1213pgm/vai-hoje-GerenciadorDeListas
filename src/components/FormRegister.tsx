import { useState } from "react";
import ButtonEye from "./ButtonEye";
import ButtonSubmit from "./ButtonSubmit";
import { DivGroupInput, Input } from "./GruopInput";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaRegister = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z
    .string()
    .min(6, "Confirmação de senha deve ter pelo menos 6 caracteres"),
});

type FormRegisterData = z.infer<typeof schemaRegister>;

function FormRegister() {
    const [type, setType] = useState<boolean>(true);

     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormRegisterData>({
        resolver: zodResolver(schemaRegister),
      });
    
  function onSubmit(data: FormRegisterData) {
    if (data.password !== data.confirmPassword) {
      return alert("As senhas não coincidem");
    }
    console.log(data);
  }

  return (
    <form
      className="flex justify-center flex-col items-center gap-4 bg-gray-700 py-10 px-5 rounded-2xl border-2 border-gray-600"
      onSubmit={handleSubmit(onSubmit)}
    >
      <DivGroupInput title="Email" messageError={errors.email?.message}>
        <Input type="text" {...register("email")} />
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
