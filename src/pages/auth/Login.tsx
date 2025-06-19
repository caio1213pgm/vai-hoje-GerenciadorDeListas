import { DivGroupInput, Input } from "../../components/GruopInput";
import Layout from "../../layout/Layout";

function Login() {
  return (
    <Layout>
      <div>
        <form className="flex justify-center flex-col items-center">
            <DivGroupInput title="Email">
              <Input type="text" />
            </DivGroupInput>
            <DivGroupInput title="Senha">
              <Input type="text" />
            </DivGroupInput>
        </form>
      </div>
    </Layout>
  );
}
export default Login;
