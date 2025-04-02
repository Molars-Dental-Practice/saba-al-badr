import About from "./components/About";
import DentalPartners from "./components/DentalPartners";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import ProductCategories from "./components/ProductCategories";
import ScrollToTop from "./components/ScrollToTop";
import WhyChooseUs from "./components/WhyChooseUs";
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
        <WhyChooseUs />
        <DentalPartners />
        <Footer />
      </div>
    </>
  );
};

export default App;
