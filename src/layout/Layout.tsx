import { Toaster } from "@/components/ui/sonner";
import Footer from "./Footer";
import Header from "./Header";
type layoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: layoutProps) {
  return (
    <>
      <Header />
      <Toaster/>
        <div className="min-h-[calc(100vh-82px-82px)] py-10">
            {children}
        </div>
      <Footer />
    </>
  );
}
export default Layout;
