"use client";

import { motion } from "framer-motion";
import { TypingText, NewFeatures, TitleText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { newFeatures } from "../constants";
import Image from "next/image";
import whatsNewImage from "../public/whats-new.png";

const WhatsNew = () => (
  <section className="paddings relative z-10">
    {/* <div className="gradient-06 -z-10" /> */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col gap-8 lg:flex-row"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className="flexCenter flex-1"
      >
        <Image
          src={whatsNewImage}
          alt="get-started"
          className="w-[90%]h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
