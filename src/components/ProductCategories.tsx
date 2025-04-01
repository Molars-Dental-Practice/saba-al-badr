import { FaBox, FaStethoscope, FaMedkit, FaTag } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import dental_supplies_categories from "../assets/dental-supplies-categories.png";

const categories = [
  {
    title: "Dental Instruments",
    description: "Precision-crafted tools for accurate procedures.",
    icon: <FaBox className="text-4xl text-[#31a5dd] mb-4" />,
  },
  {
    title: "Consumables",
    description:
      "Gloves, masks, sterilization pouches, and infection control products.",
    icon: <FaGears className="text-4xl text-[#31a5dd] mb-4" />,
  },
  {
    title: "Restorative Materials",
    description:
      "High-quality fillings, cements, composites, and bonding agents.",
    icon: <FaStethoscope className="text-4xl text-[#31a5dd] mb-4" />,
  },
  {
    title: "Orthodontics",
    description:
      "Brackets, wires, elastics, and adhesives for corrective treatments.",
    icon: <FaMedkit className="text-4xl text-[#31a5dd] mb-4" />,
  },
  {
    title: "Surgical Supplies",
    description:
      "Sterile surgical kits, extraction forceps, and implant tools.",
    icon: <FaTag className="text-4xl text-[#31a5dd] mb-4" />,
  },
];

const ProductCategories = () => {
  return (
    <section
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Loop over the categories and display them */}
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 xl:p-8 text-left border border-gray-200"
            >
              {category.icon}
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h4>
              <p className="text-gray-700">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action: Request a Quote */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-block bg-[#E11F26] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#c45f63] transition"
          >
            Request a Quote for Bulk Orders
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
