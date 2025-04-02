import bgImage from "../assets/saba-al-badr-hero.webp";
import PopupForm from "./PopupForm";
import { useState } from "react";

const Hero = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formType, setFormType] = useState<"partner" | "quote">("partner");

  return (
    <section
      className="relative bg-cover bg-bottom md:min-h-[70vh] flex items-center px-5 md:px-12 lg:px-20  py-40"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent"></div>
      <span className="max-w-[1440px] mx-auto w-full">
        <div className="relative max-w-2xl text-gray-900 z-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Premium Dental Supplies for Leading Clinics & Distributors
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Delivering high-quality, internationally certified dental
            instruments and consumables to clinics, hospitals, and distributors
            across the region.
          </p>
          <div className="mt-6 flex gap-4 flex-col sm:flex-row text-center">
            <button
              onClick={() => {
                setFormType("partner");
                setFormOpen(true);
              }}
              className="bg-[#E11F26] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#1e8bbd] transition cursor-pointer"
            >
              Partner With Us
            </button>
            <button
              onClick={() => {
                setFormType("quote");
                setFormOpen(true);
              }}
              className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition cursor-pointer"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </span>
      {/* show form */}
      <PopupForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        typeForm={formType}
      />
    </section>
  );
};

export default Hero;
