import Bookmarker from "./components/Bookmarker";
import HeaderMenu from "./components/Header-menu";
import SideCard from "./components/Side-card";
import SideMenu from "./components/SideMenu";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import Presentation from "./components/pages/Presentation";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";

import "./components/styles/App.css";

function App() {
  return (
    <>
      {/* Here we have main layouts with them main components.  */}
      <main className="main-container">
        <section className="main-container__header">
          <HeaderMenu />
        </section>
        <section className="main-container__side-card">
          <SideCard />
        </section>
        <section className="main-container__main-content">
          <div>
            <Presentation />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
            <SideMenu />
          </div>
        </section>
        <section className="main-container__footer">© 2023 Tomás. All Rights Reserved</section>
      </main>
    </>
  );
}

export default App;
