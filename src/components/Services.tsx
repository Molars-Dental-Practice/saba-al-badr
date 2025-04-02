import { motion } from "framer-motion";
import { FaTruck, FaTools, FaHeadset } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-white py-24 px-5" id="categories">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-4xl text-[#31a5dd] mb-6"
              whileHover={{ rotate: 10 }}
            >
              <FaTruck />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Reliable Delivery
            </h3>
            <p className="text-gray-700">
              We ensure fast and safe delivery of dental supplies and equipment
              to clinics and healthcare institutions across the region.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-4xl text-[#31a5dd] mb-6"
              whileHover={{ rotate: 10 }}
            >
              <FaTools />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Product Installation
            </h3>
            <p className="text-gray-700">
              Our team offers professional installation services to ensure your
              dental equipment is set up and ready to use.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-4xl text-[#31a5dd] mb-6"
              whileHover={{ rotate: 10 }}
            >
              <FaHeadset />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Customer Support
            </h3>
            <p className="text-gray-700">
              We provide 24/7 customer support to assist with any questions or
              issues you may encounter with our products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
