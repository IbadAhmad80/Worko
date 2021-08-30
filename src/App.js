import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <span id="home">
        <Home />
      </span>
      <span id="about">
        <About />
      </span>
      <span id="services">
        <Services />
      </span>
      <span id="portfolio">
        <Portfolio />
      </span>
      <span id="team">
        <Team />
      </span>
      <span id="contact">
        <Contact />
      </span>
      <Footer />
    </div>
  );
}

export default App;
