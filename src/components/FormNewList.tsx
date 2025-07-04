import { useAuth } from "../context/AuthContext";
import { createNewList } from "../hooks/createNewList";
import { nanoid } from "nanoid";
function FormNewList() {
  const { user } = useAuth();

  function createList() {
    const id_list = nanoid(15);
    createNewList({ user, id_list });
    const urlCopy = `http://localhost:5173/lists/${id_list}`;
    navigator.clipboard.writeText(urlCopy);
  }
  return (
    <div className="flex justify-center flex-col items-center gap-4 bg-gray-700 py-10 px-5 rounded-2xl border-2 border-gray-600">
      <button className="bg-gray-800 text-white text-xl px-7 py-1 rounded border-2 border-gray-600 hover:bg-gray-600 transition-colors cursor-pointer" onClick={createList}>
        Criar Listar
      </button>
    </div>
  );
}
export default FormNewList;
