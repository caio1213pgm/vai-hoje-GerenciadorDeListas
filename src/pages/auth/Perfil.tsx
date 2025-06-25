import Layout from "../../layout/Layout";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import ButtonSignout from "../../components/ButtonSignout";
import SpanAccount from "../../components/SpanAccount";

function Perfil() {
  const navigate = useNavigate();
  const { signOutUser, user } = useAuth();

  function handleSignOut() {
    signOutUser();
    navigate("/");
  }
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center ">
        <div className="py-4 px-2 md:py-7 md:px-8 rounded-lg mt-4 bg-gray-700 flex flex-col items-center gap-4 border-2 border-gray-600">
          <div className="text-gray-200">
            <h1 className="text-white md:text-3xl text-2xl">Informações da conta:</h1>
            <SpanAccount
              title="Nome de usuário"
              informations={user?.displayName}
            />
            <SpanAccount title="Email" informations={user?.email} />
            <SpanAccount
              title="Criação da conta"
              informations={user?.metadata.creationTime}
            />
          </div>
          <ButtonSignout onSignout={handleSignOut} />
        </div>
      </div>
    </Layout>
  );
}
export default Perfil;
