import FormLogin from "../../components/FormLogin";
import Layout from "../../layout/Layout";
import DivForms from "../../components/DivForms";

function Login() {
  return (
    <Layout>
      <DivForms
        title="Entre com seu email e senha cadastrados!"
        link="/register"
        linkText="Não tem conta ainda? Crie agora, é de graça!"
      >
        <FormLogin />
      </DivForms>
    </Layout>
  );
}
export default Login;
