import { FaBox, FaStethoscope, FaMedkit, FaTag } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import dental_supplies_categories from "../assets/dental-supplies-categories.png";
import { useState } from "react";
import PopupForm from "./PopupForm";

const categories = [
  {
    title: "Dental Instruments",
    descriptions: ["Precision-crafted tools for accurate procedures."],
    icon: <FaBox className="text-4xl  mb-4" />,
  },
  {
    title: "Consumables",
    descriptions: [
      "Gloves & masks",
      "Sterilization pouches",
      "Infection control products",
    ],
    icon: <FaGears className="text-4xl  mb-4" />,
  },
  {
    title: "Restorative Materials",
    descriptions: [
      "High-quality fillings",
      "Cements & composites",
      "Bonding agents",
    ],
    icon: <FaStethoscope className="text-4xl  mb-4" />,
  },
  {
    title: "Orthodontics",
    descriptions: [
      "Brackets & wires",
      "Elastics",
      "Adhesives for corrective treatments",
    ],
    icon: <FaMedkit className="text-4xl mb-4" />,
  },
  {
    title: "Surgical Supplies",
    descriptions: [
      "Sterile surgical kits",
      "Extraction forceps",
      "Implant tools",
    ],
    icon: <FaTag className="text-4xl  mb-4" />,
  },
];

const ProductCategories = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formType, setFormType] = useState<"partner" | "quote">("partner");

  return (
    <section
      id="categories"
      className="bg-gray-100 py-16 px-5 relative"
      style={{
        backgroundImage: `url(${dental_supplies_categories})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bg-gradient-to-b from-white via-white/80 to-transparent z-0"></div>
      <div className="max-w-[1440px] mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Products – Trusted by Professionals
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          We specialize in supplying premium dental equipment and materials to
          clinics, hospitals, and distributors.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Categories We Offer:
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
          {/* Loop over the categories and display them */}
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 xl:p-8 text-left border text-gray-700 border-gray-200 hover:bg-[#31a5dd] cursor-pointer hover:text-white transition duration-300 group"
            >
              <span className="text-[#31a5dd] group-hover:text-white transition duration-300">
                {category.icon}
              </span>
              <h4 className="text-xl font-semibold mb-2">{category.title}</h4>
              <ul className="list-disc list-inside">
                {category.descriptions.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => {
              setFormType("quote");
              setFormOpen(true);
            }}
            className="inline-block bg-[#E11F26] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#31a5dd] transition"
          >
            Request a Quote for Bulk Orders
          </button>
        </div>
      </div>

      <PopupForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        typeForm={formType}
      />
    </section>
  );
};

export default ProductCategories;
