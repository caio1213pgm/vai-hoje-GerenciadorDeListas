import type { User } from "firebase/auth";
import type { FormRegisterData } from "../components/forms/FormRegister";
import { db } from "../service/firebase";
import { doc, setDoc } from "firebase/firestore";

async function addUserToFirestorage(data: FormRegisterData, user: User) {
    try {
        if (user !== undefined) {
            const docUser = doc(db, "users", user.uid);
            const docData = {
                email: data.email,
                username: data.username,
                date: new Date().toLocaleDateString("pt-BR"),
                id: user.uid,
            };
            await setDoc(docUser, docData);
        }
    } catch (error) {
        console.error("Erro ao adicionar usuário ao Firestore:", error);
    }
}
export default addUserToFirestorage;
