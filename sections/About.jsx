"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className="paddings relative z-10">
    <div className="gradient-02 -z-10" />
    <div className="gradient-06 -z-10"></div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth flexCenter mx-auto flex-col"
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] text-center text-[20px] font-normal text-secondary-white sm:text-[32px]"
      >
        <span className="font-extrabold text-white">Metaverse </span>
        is a new thing in the future, where you can enjot the virtual world by
        feeling like it's reallt real, you can feel what you feel in this
        metaverse world, because this is really the{" "}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{" "}
        of today, using only madness of the metaverse
        <span className="font-extrabold text-white"> VR </span>
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's explore the madness of the metaverse
        scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        className="mt-[28px] h-[28px] w-[18px] object-contain"
      />
    </motion.div>
  </section>
);

export default About;
