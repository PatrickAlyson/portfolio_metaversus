"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import Image from "next/image";
import planet09 from "../public/planet-09.png";
import stampImage from "../public/stamp.png";

const Feedback = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col gap-6 lg:flex-row"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.3)}
        className="gradient-05 relative flex flex-[0.5] flex-col justify-end rounded-[32px] border border-[#6a6a6a] p-4 sm:p-8 lg:max-w-[370px]"
      >
        <div className="feedback-gradient -z-10"></div>
        <div>
          <h4 className="text-[26px] font-bold leading-[36px] text-white sm:text-[32px] sm:leading-[40px]">
            Samantha
          </h4>
          <p className="mt-[8px] text-[12px] font-normal leading-[16px] text-white sm:text-[18px] sm:leading-[22px]">
            Founder | Metaversus
          </p>
          <p className="mt-[24px] text-[18px] font-normal leading-[39px] text-white sm:text-[24px] sm:leading-[45px]">
            "With the development of today's technology metaverse is very useful
            for today's work, or can be called web 3.0. By using metaverse you
            can use it as anything."
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 0.3)}
        className="relative flex flex-1 items-center justify-center"
      >
        <Image
          src={planet09}
          alt="planet-09"
          className="h-auto min-h-[210px] w-full rounded-[40px] object-cover lg:h-[610px]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="absolute -left-[10%] top-[3%] hidden lg:block"
        >
          <Image
            src={stampImage}
            alt="stamp"
            className="h-[155px] w-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
