import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import ButtonSignout from "./ButtonSignout";
import GroupSpanAccount from "./GroupSpanAccount";

function PerfilContent() {
  const navigate = useNavigate();
  const { signOutUser, user } = useAuth();

  function handleSignOut() {
    signOutUser();
    navigate("/");
  }
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="py-4 px-2 md:py-7 md:px-8 rounded-lg mt-4 bg-gray-700 flex flex-col items-center gap-4 border-2 border-gray-600">
        <div>
          <h1 className="text-white md:text-3xl text-2xl">
            Informações da conta:
          </h1>
          <GroupSpanAccount user={user} />
        </div>
        <ButtonSignout onSignout={handleSignOut} />
      </div>
    </div>
  );
}
export default PerfilContent;
