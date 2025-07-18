import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import ButtonSignout from "./buttons/ButtonSignout";
import GroupSpanAccount from "./GroupSpanAccount";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

function PerfilContent() {
    const navigate = useNavigate();
    const { signOutUser, user } = useAuth();

    function handleSignOut() {
        signOutUser();
        navigate("/");
    }
    return (
        <Card className="flex flex-col items-center justify-center m-auto ">
            <div className="flex flex-col items-center gap-4 ">
                <CardTitle>
                    <h1 className="text-white md:text-3xl text-2xl">
                        Informações da conta:
                    </h1>
                </CardTitle>
                <CardContent>
                    <GroupSpanAccount user={user} />
                </CardContent>
            </div>
            <CardFooter>
                <ButtonSignout onSignout={handleSignOut} />
            </CardFooter>
        </Card>
    );
}
export default PerfilContent;
