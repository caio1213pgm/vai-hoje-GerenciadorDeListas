import Layout from "../../layout/Layout";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

function Perfil() {
  const navigate = useNavigate();
  const { signOutUser } = useAuth();

  function handleSignOut() {
    signOutUser();
    navigate("/");
  }
  return (
    <Layout>
      <button
        className="bg-red-500 px-8 py-4 text-xl text-white font-medium rounded-xl hover:scale-110 cursor-pointer duration-200"
        onClick={() => handleSignOut()}
      >
        Sair da conta
      </button>
    </Layout>
  );
}
export default Perfil;
