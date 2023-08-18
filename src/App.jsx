import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Navigation />
      <Header />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
