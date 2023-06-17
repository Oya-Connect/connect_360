import NavBar from "@/global/components/NavBar";

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <NavBar />
      {children}
      <footer className="app__footer"></footer>
    </div>
  );
};

export default AppLayout;
