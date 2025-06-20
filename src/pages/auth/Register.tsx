import DivForms from "../../components/DivForms";
import FormRegister from "../../components/FormRegister";
import Layout from "../../layout/Layout";

function Register() {
  return (
    <Layout>
      <DivForms
        title="Crie sua conta!"
        link="/login"
        linkText="Já tem conta? Entre agora!"
      >
        <FormRegister />
      </DivForms>
    </Layout>
  );
}
export default Register;
