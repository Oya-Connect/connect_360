import NavBar from "@/app/(pages)/components/global/NavBar";

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <NavBar />
      {children}
      <footer className="app__footer w-f"></footer>
    </div>
  );
};

export default AppLayout;
