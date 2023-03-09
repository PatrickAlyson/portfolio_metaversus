"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants, modalVariants } from "../utils/motion";
import { socials } from "../constants";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isModalOpen);
  }, [isModalOpen]);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="xPaddings relative py-8"
      >
        {/* <div className="gradient-01 absolute inset-0 -z-10 w-[50%]" /> */}

        <div className="innerWidth mx-auto flex justify-between gap-8">
          <img
            src="/search.svg"
            alt="search"
            className="h-[24px] w-[24px] object-contain"
          />
          <h2 className="text-[24px] font-extrabold leading-[30px] text-white">
            METAVERSUS
          </h2>

          <button type="button" onClick={modalToggle}>
            <img
              src="/menu.svg"
              alt="menu"
              className="h-[24px] w-[24px] object-contain"
            />
          </button>
        </div>
      </motion.nav>

      {/* Navbar modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="absolute left-[2.5%] z-50 h-[95%] w-[95%] rounded-sm bg-white"
            variants={modalVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div
              className="relative flex h-full w-full flex-col items-center justify-around p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
              <button
                type="button"
                onClick={modalToggle}
                className="absolute top-1 right-1"
              >
                <img src="/close.svg" alt="close button" />
              </button>

              <div className="flex flex-col gap-16 font-semibold sm:gap-10">
                <span className="cursor-pointer">INTRO</span>
                <span className="cursor-pointer">WHO</span>
                <span className="cursor-pointer">WHAT</span>
                <span className="cursor-pointer">WORK</span>
              </div>

              <button
                type="button"
                className="flex h-fit items-center gap-[12px] rounded-[32px] bg-[#25618b] py-4 px-6"
              >
                <img
                  src="/headset.svg"
                  alt="headset"
                  className="h-[24px] w-[24px] object-contain"
                />
                <span className="text-[16px] font-normal text-white">
                  ENTER METAVERSE
                </span>
              </button>

              <div className="text-center text-white">
                <h3 className="mb-6 font-semibold">GET IN TOUCH</h3>
                <div className="flex gap-6">
                  {socials.map((social) => (
                    <img
                      src={social.url}
                      alt={social.name}
                      key={social.name}
                      className="cursor-pointer transition-all duration-300 hover:scale-150"
                    />
                  ))}
                </div>
              </div>

              <div className="bgClip absolute bottom-0 left-0 -z-10 h-[30%] w-full bg-[#1A232E]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
