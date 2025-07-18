import type { person } from "@/pages/dashboard/PageViewMyLists";
import { db } from "@/service/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";

export async function getPersonsByIdList(
    idList: string
): Promise<person[] | null> {
    if (!idList) {
        return null;
    }

    try {
        const docRef = doc(db, "lists", idList);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            toast("Não foi possível encontrar a lista");
            return null;
        }
        const data = docSnap.data();
        const persons = (data.people_list as person[]) || [];
        return persons;
    } catch (error) {
        toast(`Erro ao buscas pessoas na lista ${error}`);
        return null;
    }
}
