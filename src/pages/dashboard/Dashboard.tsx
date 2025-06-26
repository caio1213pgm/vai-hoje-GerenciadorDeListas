import Layout from "../../layout/Layout";

function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg">Welcome to your dashboard!</p>
      </div>
    </Layout>
  );
}
export default Dashboard;
