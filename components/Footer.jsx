"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="paddings relative py-8"
  >
    <div className="footer-gradient" />
    <div className="innerWidth mx-auto flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="text-[44px] font-bold text-white md:text-[64px]">
          Enter the Metaverse
        </h4>
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
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="text-[24px] font-extrabold text-white">Metaversus</h4>
          <p className="text-[14px] font-normal text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All right reserved.
          </p>
          <div className="flex gap-4">
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
      </div>
    </div>
  </motion.footer>
);

export default Footer;
