import "./App.css";

function App() {
  return (
    <>
      <main className="main-container">
        <section className="main-container__header">
          <div className="main-container__header-menu">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SKILLS</li> 
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </section>
        <section className="main-container__contact-card">Contact card</section>
        <section className="main-container__main-content">Main content</section>
        <section className="main-container__footer">Footer</section>
      </main>
    </>
  );
}

export default App;
