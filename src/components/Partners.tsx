import { motion, useAnimation } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import molars from "../assets/partners/molars-dental-clinic-logo.png";
import amedes from "../assets/partners/3amedes.png";
import bms from "../assets/partners/BMS.svg";
import GNI from "../assets/partners/GNI.png";
import lukadent from "../assets/partners/lukadent.svg";
import mdclus from "../assets/partners/mdclus.svg";
import milestone from "../assets/partners/milestone.png";
import NHT from "../assets/partners/NHT.webp";
import Olident from "../assets/partners/Olident.svg";
import prevest_denpro from "../assets/partners/prevest-denpro.png";
import renew_medical from "../assets/partners/renew-medical.svg";
import saeshin from "../assets/partners/saeshin.svg";
import septodont from "../assets/partners/septodont.svg";
import shofu from "../assets/partners/shofu.png";
import suredent from "../assets/partners/suredent.png";
import taglus from "../assets/partners/taglus.png";
import vita from "../assets/partners/vita.svg";
import Warren_dental from "../assets/partners/Warren-Dental.png";
import yucera from "../assets/partners/yucera.png";
const partners = [
  amedes,
  bms,
  GNI,
  lukadent,
  mdclus,
  milestone,
  NHT,

  molars,
  Olident,
  prevest_denpro,
  renew_medical,
  saeshin,
  septodont,
  shofu,
  suredent,
  taglus,
  vita,
  Warren_dental,
  yucera,
];

const Partners = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  const controls = useAnimation();

  // prevent recalculating duplicatedLogos on every render
  const duplicatedLogos = useMemo(() => [...partners], [partners]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => [...new Set([...prev, index % partners.length])]);
  };

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: partners.length,
        ease: "linear",
      },
    });
  }, [controls, partners.length]);

  return (
    <section className="bg-white-100 py-6 md:py-24 overflow-hidden" id="about">
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
                className={` object-contain max-w-[250px] h-20 transition-opacity duration-300 ${
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
