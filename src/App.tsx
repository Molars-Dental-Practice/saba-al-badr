import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import ProductCategories from "./components/ProductCategories";
import ScrollToTop from "./components/ScrollToTop";
// import Services from "./components/Services";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="">
        <Navbar />
        <Hero />
        <Partners />
        <About />
        {/* <Services /> */}
        <ProductCategories />
      </div>
    </>
  );
};

export default App;
