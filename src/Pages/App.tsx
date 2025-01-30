import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import MainContent from "../components/MainContent";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <SideMenu />
          <MainContent />
        </div>
      </div>
    </>
  );
}
