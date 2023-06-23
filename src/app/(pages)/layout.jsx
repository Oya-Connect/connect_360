import NavBar from "@/app/(pages)/components/global/NavBar";
import Footer from "./components/global/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
