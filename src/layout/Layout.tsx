import Footer from "./Footer";
import Header from "./Header";
type layoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: layoutProps) {
  return (
    <>
      <Header />
        <div className="min-h-[calc(100vh-82px-82px)] bg-gray-800">
            {children}
        </div>
      <Footer />
    </>
  );
}
export default Layout;
