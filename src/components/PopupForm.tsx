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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    productInquiry: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        companyName: "",
        productInquiry: "",
      });
      alert("Form submitted successfully!");

      onClose();
    }, 2000);
  };

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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-[#E11F26] focus:border-[#E11F26] focus:outline-none"
                placeholder="Enter your full name"
                onChange={handleInputChange}
                name="name"
                value={formData.name}
                required
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
                onChange={handleInputChange}
                name="email"
                value={formData.email}
                required
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
                  onChange={handleInputChange}
                  name="companyName"
                  value={formData.companyName}
                />
              </div>
            ) : (
              <div>
                <label className="block text-gray-700 font-medium">
                  Product Inquiry
                </label>
                <textarea
                  name="productInquiry"
                  onChange={handleInputChange}
                  value={formData.productInquiry}
                  className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-[#E11F26] focus:border-[#E11F26] focus:outline-none"
                  placeholder="Specify the products you need"
                  rows={3}
                ></textarea>
              </div>
            )}

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-[#E11F26] text-white py-3 rounded-lg font-medium hover:bg-[#c45f63] transition"
            >
              {formType === "partner"
                ? "Submit Partnership Request"
                : "Get a Quote"}
              {/* spining loader */}
              {isSubmitting && (
                <svg
                  className="animate-spin h-5 w-5 text-white inline-block ml-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.22" y1="4.22" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="19.78" y2="19.78" />
                  <line x1="4.22" y1="19.78" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PopupForm;
