import { Card, CardContent } from "@/components/ui/card";
import CardLoading from "../../components/CardLoading";
import DivForms from "../../components/DivForms";
import FormRegister from "../../components/forms/FormRegister";
import { useAuth } from "../../context/AuthContext";
import Layout from "../../layout/Layout";

function Register() {
    const { loading } = useAuth();
    return (
        <Layout>
            {loading ? (
                <CardLoading />
            ) : (
                <Card className="m-auto md:w-[600px]">
                    <CardContent>
                        <DivForms
                            title="Crie sua conta!"
                            link="/login"
                            linkText="Já tem conta? Entre agora!"
                        >
                            <FormRegister />
                        </DivForms>
                    </CardContent>
                </Card>
            )}
        </Layout>
    );
}
export default Register;
