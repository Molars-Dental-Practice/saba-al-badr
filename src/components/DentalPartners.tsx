import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import PopupForm from "./PopupForm";

const DentalPartners = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formType, setFormType] = useState<"partner" | "quote">("partner");

  const partners = [
    "3M Dental",
    "Dentsply Sirona",
    "Ivoclar Vivadent",
    "GC Corporation",
    "Straumann",
    "Coltene",
    "Kerr Dental",
    "Septodont",
    "Kavo",
    "Olident",
    "Shofu",
    "Vita",
    "SureDent",
    "3A medes",
    "BMS",
    "GNI Orthodontics",
    "LukaDent",
    "MD Clus",
    "Milestone",
    "NHT",
    "Molars Dental Clinic",
    "Prevest DenPro",
    "Renew Medical",
    "Saeshin",
    "Taglus",
    "Warren Dental",
    "Yucera",
    "Woodpecker",
    "AR Instruments",
    "Ultradent",
    "Maquira",
    "Koden",
    "Acteon",
    "Waterpik",
    "ORO",
    "Bego",
    "VHF",
    "Mani",
    "Amber",
    "Mespa",
    "Uzumcu",
    "Skypro",
    "Philips",
    "Intersurgical",
    "Pinmed",
    "Medpark",
    "Dur Dental",
    "Carestream",
    "Mindray",
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16" id="partners">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Our Partners – Leaders in Dental & Medical Manufacturing
      </h2>
      <p className="text-lg text-gray-700 text-center mb-8">
        We collaborate with top-tier dental and medical manufacturers worldwide,
        ensuring our clients get the best quality products at competitive
        prices.
      </p>

      {/* List of Partners */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <ul className="grid  md:grid-cols-4 lg:grid-cols-5 gap-4 text-gray-900 text-lg font-medium">
          {partners.map((partner, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 p-2 border-b md:border-none"
            >
              <FaCheckCircle className="text-green-500 text-xl" />
              <span>{partner}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            setFormType("partner");
            setFormOpen(true);
          }}
          className="bg-[#E11F26] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#c45f63] transition"
        >
          Partner With Us
        </button>
      </div>

      <PopupForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        typeForm={formType}
      />
    </section>
  );
};

export default DentalPartners;
