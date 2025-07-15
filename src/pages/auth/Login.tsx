import FormLogin from "../../components/forms/FormLogin";
import Layout from "../../layout/Layout";
import DivForms from "../../components/DivForms";
import { useAuth } from "../../context/AuthContext";
import CardLoading from "../../components/CardLoading";
import { Card, CardContent } from "@/components/ui/card";

function Login() {
    const { loading } = useAuth();
    return (
        <Layout>
            {loading ? (
                <CardLoading />
            ) : (
                <Card className="m-auto md:w-[600px]">
                    <CardContent>
                        <DivForms
                            title="Entre com seu email e senha cadastrados!"
                            link="/register"
                            linkText="Não tem conta ainda? Crie agora, é de graça!"
                        >
                            <FormLogin />
                        </DivForms>
                    </CardContent>
                </Card>
            )}
        </Layout>
    );
}
export default Login;
