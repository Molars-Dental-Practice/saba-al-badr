import { motion } from "framer-motion";
import { FaCheckCircle, FaLeaf, FaLightbulb } from "react-icons/fa";
import mission from "../assets/mission.webp";

const About = () => {
  return (
    <section className="relative bg-gray-100 py-24 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* About Us Section */}
        <div className="lg:flex lg:items-center lg:space-x-12 relative w-full">
          {/* Text Section */}
          <div className=" flex items-center relative z-10 w-[95%] lg:w-[180vw]">
            <div className="bg-white shadow-lg rounded-xl p-4 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Us – Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Saba Al Badr is a premier distributor of high-quality dental
                supplies and equipment, serving dental professionals, clinics,
                and healthcare institutions across North Africa, the Middle
                East, and beyond. With a commitment to excellence, compliance,
                and innovation, we bridge the gap between top global
                manufacturers and dental practitioners in need of reliable
                solutions.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className=" w-full">
            <img
              src={mission}
              loading="lazy"
              alt="Mission"
              className=" absolute  -top-8 left-1/2 w-[50%] h-90 lg:h-75 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Commitment Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {commitments.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg rounded-lg p-5 xs:p-6 text-center relative"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-[#E11F26] text-4xl mb-4 inline-block"
                whileHover={{ rotate: 10 }}
              >
                {item.icon}
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const commitments = [
  {
    title: "Authenticity",
    description: "100% genuine, internationally accredited products.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Sustainability",
    description: "Eco-friendly packaging and responsible sourcing.",
    icon: <FaLeaf />,
  },
  {
    title: "Innovation",
    description:
      "Keeping up with the latest advancements in dental technology.",
    icon: <FaLightbulb />,
  },
];

export default About;
