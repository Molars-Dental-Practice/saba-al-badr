import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PopupForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formType, setFormType] = useState<"partner" | "quote">("partner");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white max-w-lg w-full p-6 rounded-xl shadow-lg"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              {formType === "partner" ? "Partner With Us" : "Request a Quote"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>
          </div>

          {/* Toggle Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              className={`flex-1 py-2 rounded-md font-medium ${
                formType === "partner"
                  ? "bg-[#E11F26] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setFormType("partner")}
            >
              Partner Request
            </button>
            <button
              className={`flex-1 py-2 rounded-md font-medium ${
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
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-[#E11F26] focus:border-[#E11F26]"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-[#E11F26] focus:border-[#E11F26]"
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
                  className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-[#E11F26] focus:border-[#E11F26]"
                  placeholder="Enter your company name"
                />
              </div>
            ) : (
              <div>
                <label className="block text-gray-700 font-medium">
                  Product Inquiry
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-[#E11F26] focus:border-[#E11F26]"
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
