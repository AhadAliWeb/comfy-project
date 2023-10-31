import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Featured from "./components/featured";
import Cards from "./cards";
import Newsletter from "./newsletter";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Cards />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
