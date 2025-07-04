import type { User } from "firebase/auth";
import { db } from "../service/firebase";
import { doc, setDoc } from "firebase/firestore";

type newListProps = {
  user: User | undefined;
  id_list: string
};

export async function createNewList({ user, id_list }: newListProps) {
  if (user) {
    try {
      const docRef = doc(db, "lists", id_list);
      const docData = {
        id_list: id_list,
        user_id: user.uid,
        people_list: [],
      };
      await setDoc(docRef, docData);
      console.log(docRef);
    } catch (erro) {
      console.log("erro ao criar lista", erro);
    }
  }
}
