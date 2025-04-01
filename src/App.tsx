import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="">
        <Navbar />
        <Hero />
        <Partners />
        <About />
      </div>
    </>
  );
};

export default App;
