"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"
    } flex h-[700px] min-w-[170px] cursor-pointer items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      loading="lazy"
      className="absolute h-full w-full rounded-[24px] object-cover"
    />
    {active !== id ? (
      <h3 className="absolute z-0 text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
        {title}
      </h3>
    ) : (
      <motion.div
        className="absolute bottom-0 w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.5)] p-6 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 1, 1], transition: { duration: 0.7 } }}
      >
        <div className="flexCenter glassmorphism mb-[16px] h-[60px] w-[60px] rounded-[24px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="h-1/2 w-1/2 object-contain"
          />
        </div>
        <p className="text-[14px] font-normal uppercase leading-[20px] text-white sm:text-[16px]">
          Enter the Metaverse
        </p>
        <h2 className="mt-[18px] text-[20px] font-semibold text-white sm:mt-[24px] sm:text-[32px]">
          {title}
        </h2>
      </motion.div>
    )}
  </motion.div>
);

export default ExploreCard;
