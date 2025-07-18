import type { listProps } from "@/pages/dashboard/PageViewMyLists";
import { db } from "@/service/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

type ListWithId = listProps & { id: string };

export async function getListsByUid(uid: string): Promise<ListWithId[]> {
    const q = query(collection(db, "lists"), where("user_id", "==", uid));
    const querySnapshot = await getDocs(q);

    const lists: ListWithId[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    } as ListWithId));

    return lists;
}
