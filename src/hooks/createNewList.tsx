import type { User } from "firebase/auth";
import { db } from "../service/firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "sonner";

type newListProps = {
  user?: User;
  id_list: string
  listName: string
  listDescription?: string
};

export async function createNewList({ user, id_list, listName, listDescription }: newListProps) {
  if (user) {
    try {
      const docRef = doc(db, "lists", id_list);
      const docData = {
        id_list: id_list,
        user_id: user.uid,
        people_list: [],
        title: listName,
        description: listDescription
      };
      await setDoc(docRef, docData);
      toast("Lista criada com sucesso")
    } catch (erro) {
      console.log("erro ao criar lista", erro);
    }
  }
}
