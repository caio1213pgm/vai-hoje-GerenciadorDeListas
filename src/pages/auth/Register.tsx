import CardLoading from "../../components/CardLoading";
import DivForms from "../../components/DivForms";
import FormRegister from "../../components/FormRegister";
import { useAuth } from "../../context/AuthContext";
import Layout from "../../layout/Layout";

function Register() {
  const { loading } = useAuth();
  return (
    <Layout>
      {loading ? (
        <CardLoading />
      ) : (
        <DivForms
          title="Crie sua conta!"
          link="/login"
          linkText="Já tem conta? Entre agora!"
        >
          <FormRegister />
        </DivForms>
      )}
    </Layout>
  );
}
export default Register;
