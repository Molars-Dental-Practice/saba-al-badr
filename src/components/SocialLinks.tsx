// components/SocialLinks.tsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="#" className="text-gray-400 hover:text-white">
        <FaInstagram className="text-xl" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <FaFacebook className="text-xl" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <FaTwitter className="text-xl" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <FaLinkedin className="text-xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
