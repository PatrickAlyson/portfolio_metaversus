"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="xPaddings relative py-8"
    >
      <div className="gradient-01 absolute inset-0 w-[50%]"></div>

      <div className="innerWidth mx-auto flex justify-between gap-8">
        <img
          src="/search.svg"
          alt="search"
          className="h-[24px] w-[24px] object-contain"
        />
        <h2 className="text-[24px] font-extrabold leading-[30px] text-white">
          METAVERSUS
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="h-[24px] w-[24px] object-contain"
        />
      </div>
    </motion.nav>
  );
}

export default Navbar;
