import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="">
        <Navbar />

        <Hero />
      </div>
    </>
  );
};

export default App;
