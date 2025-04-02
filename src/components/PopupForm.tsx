import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const PopupForm = ({
  isOpen,
  onClose,
  typeForm,
}: {
  isOpen: boolean;
  onClose: () => void;
  typeForm: "partner" | "quote";
}) => {
  const [formType, setFormType] = useState<"partner" | "quote">(typeForm);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 flex justify-center items-center z-50"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          zIndex: 1000,
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white max-w-lg w-full p-6 rounded-xl shadow-lg"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-medium text-gray-600">
              {formType === "partner" ? "Partner With Us" : "Request a Quote"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
            >
              <FiX />
            </button>
          </div>

          {/* Toggle Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              className={`flex-1 py-2 rounded-md font-medium cursor-pointer ${
                formType === "partner"
                  ? "bg-[#E11F26] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setFormType("partner")}
            >
              Partner Request
            </button>
            <button
              className={`flex-1 py-2 rounded-md font-medium  cursor-pointer ${
                formType === "quote"
                  ? "bg-[#E11F26] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setFormType("quote")}
            >
              Quote Request
            </button>
          </div>

          {/* Forms */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-[#E11F26] focus:border-[#E11F26] focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-[#E11F26] focus:border-[#E11F26] focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {formType === "partner" ? (
              <div>
                <label className="block text-gray-700 font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-[#E11F26] focus:border-[#E11F26] focus:outline-none"
                  placeholder="Enter your company name"
                />
              </div>
            ) : (
              <div>
                <label className="block text-gray-700 font-medium">
                  Product Inquiry
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-[#E11F26] focus:border-[#E11F26] focus:outline-none"
                  placeholder="Specify the products you need"
                  rows={3}
                ></textarea>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#E11F26] text-white py-3 rounded-lg font-medium hover:bg-[#c45f63] transition"
            >
              {formType === "partner"
                ? "Submit Partnership Request"
                : "Get a Quote"}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PopupForm;
