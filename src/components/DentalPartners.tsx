import { FaCheckCircle } from "react-icons/fa";

const DentalPartners = () => {
  const partners = [
    "3M Dental",
    "Dentsply Sirona",
    "Ivoclar Vivadent",
    "GC Corporation",
    "Straumann",
    "Coltene",
    "Kerr Dental",
    "3M Dental",
    "Dentsply Sirona",
    "Ivoclar Vivadent",
    "GC Corporation",
    "Straumann",
    "Coltene",
    "Kerr Dental",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Our Partners – Global Leaders in Dental Manufacturing
      </h2>
      <p className="text-lg text-gray-700 text-center mb-8">
        We collaborate with top-tier dental manufacturers worldwide, ensuring
        our clients get the best quality products at competitive prices.
      </p>

      {/* List of Partners */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-900 text-lg font-medium">
          {partners.map((partner, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 p-4 border-b md:border-none"
            >
              <FaCheckCircle className="text-green-500 text-xl" />
              <span>{partner}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <a
          href="#"
          className="bg-[#E11F26] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#c45f63] transition"
        >
          Partner With Us
        </a>
      </div>
    </section>
  );
};

export default DentalPartners;
