import { Link } from "react-router";
import "../App.css";
import GroupCardsApresentation from "../components/GroupCardsApresentation";
import Layout from "../layout/Layout";

function App() {
  return (
    <Layout>
      <GroupCardsApresentation />

      <div className="flex justify-center">
        <Link to="/login">
          <button className="bg-gray-700 px-8 py-4 text-xl text-white font-medium rounded-xl hover:scale-110 cursor-pointer duration-200">
            Comece agora a criar sua lista
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default App;
