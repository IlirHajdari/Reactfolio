import { useState } from "react";
import "./App.css";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const handleToggleAbout = () => {
    setShowAbout((prevState) => !prevState);
  };

  return (
    <div className="container">
      <header>{`Developer: Ilir Hajdari`}</header>
      <nav>
        <button onClick={handleToggleAbout}>
          {showAbout ? "Hide About" : "Show About"}
        </button>
      </nav>
      <main>
        {showAbout && (
          <section>
            {"This is the about me section. I'm Ilir, a web developer..."}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
