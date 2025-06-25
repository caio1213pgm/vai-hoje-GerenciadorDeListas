import FormLogin from "../../components/FormLogin";
import Layout from "../../layout/Layout";
import DivForms from "../../components/DivForms";
import { useAuth } from "../../context/AuthContext";
import CardLoading from "../../components/CardLoading";

function Login() {
  const { loading } = useAuth();
  return (
    <Layout>
      {loading ? (
        <CardLoading />
      ) : (
        <DivForms
          title="Entre com seu email e senha cadastrados!"
          link="/register"
          linkText="Não tem conta ainda? Crie agora, é de graça!"
        >
          <FormLogin />
        </DivForms>
      )}
    </Layout>
  );
}
export default Login;
