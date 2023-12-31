import "./App.css";
import SideCard from "./components/SideCard";
import SideMenu from "./components/SideMenu";
import Menu from "./components/Menu";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <SideCard />
      <Menu />
      <SideMenu/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
