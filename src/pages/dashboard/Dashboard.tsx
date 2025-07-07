import NavDashboard from "../../components/NavDashboard";
import { useDashboard } from "../../context/DashboardContext";
import Layout from "../../layout/Layout";
import FormNewList from "../../components/FormNewList";
import { DivGroupInput, Input } from "../../components/GruopInput";

function Dashboard() {

  const { valueMenu } = useDashboard();

  return (
    <Layout>
      <div>
        <NavDashboard />
        <div>
          {valueMenu === "1" ? (
            <FormNewList/>
          ) : valueMenu === "2" ? (
            <DivGroupInput title="Digite o id da sua lista">
              <Input/>
            </DivGroupInput>
          ) : (
            valueMenu === "3"
          )}
        </div>
      </div>
    </Layout>
  );
}
export default Dashboard;
