import { Link } from "react-router";
import "../App.css";
import GroupCardsApresentation from "../components/GroupCardsApresentation";
import Layout from "../layout/Layout";
import { Button } from "@/components/ui/button";

function App() {
    return (
        <Layout>
            <GroupCardsApresentation />

            <div className="flex justify-center">
                <Link to="/dashboard">
                    <Button className="text-xl py-8" size="lg">
                        Comece agora a criar sua lista
                    </Button>
                </Link>
            </div>
        </Layout>
    );
}

export default App;
