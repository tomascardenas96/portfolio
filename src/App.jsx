import "./App.css";
import SideCard from "./components/SideCard";
import SideMenu from "./components/SideMenu";
import Menu from "./components/Menu";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <SideCard />
      <Menu />
      <SideMenu/>
      <Home/>
      <AboutMe/>
    </>
  );
}

export default App;
