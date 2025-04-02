import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & Links */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 footer-logo">
            Saba Al Badr.
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section - Product Categories */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Product Categories
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Dental Instruments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Orthodontics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Endodontics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Prosthodontics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Dental Chairs & Units
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="mb-2">
            📍 UAE (Serving North Africa, the Middle East, and Beyond)
          </p>
          <p className="mb-2">
            📧 Email:{" "}
            <a
              href="mailto:info@saba-al-badr.com"
              className="text-[#31a5dd] hover:underline"
            >
              info@saba-al-badr.com
            </a>
          </p>
          <p className="mb-4">📞 Phone: +971 XXXX XXXX</p>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center border-t border-gray-700 mt-6 pt-4 text-sm">
        <p>© 2025 Saba Al Badr Dental Supplies – All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
