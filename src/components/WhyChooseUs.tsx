import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    "Premium-Quality Supplies – Sourced from globally recognized manufacturers.",
    "Fast & Reliable Delivery – Ensuring on-time shipments to clinics and distributors.",
    "Regulatory Compliance – All products meet ISO, FDA, and GCC standards.",
    "Dedicated Customer Support – A team of experts ready to assist you.",
    "Competitive Pricing – Get the best value without compromising quality.",
    "Custom Orders – Need specific supplies? We offer tailored solutions.",
  ];

  return (
    <section className="bg-white py-24 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why Choose <span className="text-[#E11F26]">Saba Al Badr?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start bg-white rounded-lg p-4 border border-gray-200 group"
            >
              <FaCheckCircle className="text-[#E11F26] text-2xl mr-3 mt-1 group-hover:text-[#31a5dd]" />
              <p className="text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
