import { db } from "@/service/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "sonner";

export async function deleteListById(idList: string) {
    try {
        const docRef = doc(db, "lists", idList);
        await deleteDoc(docRef);
        toast("Lista excluida com sucesso");
    } catch (error) {
        toast(`Erro ao excluir lista ${error}`);
    }
}
