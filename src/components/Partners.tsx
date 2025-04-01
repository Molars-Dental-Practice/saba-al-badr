import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const partners = [
  "/logos/partner1.png",
  "/logos/partner2.png",
  "/logos/partner3.png",
  "/logos/partner4.png",
  "/logos/partner5.png",
];

const Partners = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  // prevent recalculating duplicatedLogos on every render
  const duplicatedLogos = useMemo(() => [...partners, ...partners], [partners]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => [...new Set([...prev, index % partners.length])]);
  };

  return (
    <section className="bg-white-100 py-6 md:py-24 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-10"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: partners.length * 3,
            ease: "linear",
          }}
        >
          {/* Duplicate the logos to create a seamless loop */}
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="h-16 w-auto flex items-center justify-center"
            >
              {!loadedImages.includes(idx % partners.length) && (
                <div className="h-20 w-32 bg-gray-300 animate-pulse"></div>
              )}
              <img
                loading="lazy"
                src={logo}
                alt="Partner Logo"
                width={140}
                height={100}
                className={`h-16 w-auto object-contain transition-opacity duration-300 ${
                  loadedImages.includes(idx) ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(idx)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
