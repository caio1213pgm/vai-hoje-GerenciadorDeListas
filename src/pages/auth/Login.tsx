import FormLogin from "../../components/forms/FormLogin";
import Layout from "../../layout/Layout";
import DivForms from "../../components/DivForms";
import { useAuth } from "../../context/AuthContext";
import CardLoading from "../../components/CardLoading";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaGoogle } from "react-icons/fa";
import ButtonIcons from "@/components/buttons/ButtonIcons";

function Login() {
    const { loading, singInUserFromGoogle, singInUserFromGitHub } = useAuth();

    return (
        <Layout>
            {loading ? (
                <CardLoading />
            ) : (
                <Card className="m-auto md:w-[600px]">
                    <CardContent>
                        <h1 className="text-center md:text-xl font-medium">
                            Entre com seu email e senha cadastrados!
                        </h1>
                        <DivForms
                            link="/register"
                            linkText="Não tem conta ainda? Crie agora, é de graça!"
                        >
                            <FormLogin />
                        </DivForms>
                        <div className="text-center mt-2 p-2 flex justify-center gap-2 border rounded-xl">
                            <ButtonIcons action={singInUserFromGoogle}>
                                <FaGoogle />
                            </ButtonIcons>
                            <ButtonIcons action={singInUserFromGitHub}>
                                <FaGithub />
                            </ButtonIcons>
                        </div>
                    </CardContent>
                </Card>
            )}
        </Layout>
    );
}
export default Login;
