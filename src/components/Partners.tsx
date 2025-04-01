import { motion, useAnimation } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import molars from "../assets/partners/molars-dental-clinic-logo.png";
import partner1 from "../assets/partners/1.png";
import partner2 from "../assets/partners/2.png";
import partner3 from "../assets/partners/3.png";
import partner4 from "../assets/partners/4.png";
import partner5 from "../assets/partners/5.png";

const partners = [
  partner1,
  molars,
  partner2,
  partner3,
  partner4,
  partner5,
  molars,
];

const Partners = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  const controls = useAnimation();

  // prevent recalculating duplicatedLogos on every render
  const duplicatedLogos = useMemo(
    () => [...partners, ...partners, ...partners, ...partners],
    [partners]
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => [...new Set([...prev, index % partners.length])]);
  };

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: partners.length * 3,
        ease: "linear",
      },
    });
  }, [controls, partners.length]);

  return (
    <section className="bg-white-100 py-6 md:py-24 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-full space-x-20"
          animate={controls}
          drag="x"
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: {
                repeat: Infinity,
                duration: partners.length * 3,
                ease: "linear",
              },
            })
          }
        >
          {/* Duplicate the logos to create a seamless loop */}
          {duplicatedLogos.map((logo, idx) => (
            <div key={idx} className=" flex items-center justify-center w-auto">
              {!loadedImages.includes(idx % partners.length) && (
                <div className="h-32 w-32 bg-gray-300 animate-pulse shadow-lg"></div>
              )}
              <img
                loading="lazy"
                src={logo}
                alt="Partner Logo"
                className={` object-cover max-w-[250px] h-20 transition-opacity duration-300 ${
                  loadedImages.includes(idx) ? "opacity-100" : "opacity-100"
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
