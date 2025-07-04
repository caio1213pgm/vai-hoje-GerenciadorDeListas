import NavDashboard from "../../components/NavDashboard";
import { useDashboard } from "../../context/DashboardContext";
import Layout from "../../layout/Layout";
import FormNewList from "../../components/FormNewList";

function Dashboard() {

  const { valueMenu } = useDashboard();

  
 

  
  
  function addNewPerson() {

  }

  return (
    <Layout>
      <div>
        <NavDashboard />
        <div>
          {valueMenu === "1" ? (
            <FormNewList/>
          ) : valueMenu === "2" ? (
            <button
              onClick={addNewPerson}
              className="bg-gray-300 px-5 py-3 text-2xl"
            >
              Adcionar participante
            </button>
          ) : (
            valueMenu === "3"
          )}
        </div>
      </div>
    </Layout>
  );
}
export default Dashboard;
