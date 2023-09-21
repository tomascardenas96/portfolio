import "./App.css";
import SideCard from "./components/SideCard";
import SideMenu from "./components/SideMenu";
import Menu from "./components/menu";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <SideCard />
      <Menu />
      <SideMenu/>
      <Home/>
    </>
  );
}

export default App;
