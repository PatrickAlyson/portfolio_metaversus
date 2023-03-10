"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

import Image from "next/image";
import mapImage from "../public/map.png";
import people1Image from "../public/people-01.png";
import people2Image from "../public/people-02.png";
import people3Image from "../public/people-03.png";

const World = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex h-[550px] w-full"
      >
        <Image
          src={mapImage}
          alt="map"
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <Image src={people1Image} alt="people1" className="h-full w-full" />
        </div>

        <div className="absolute top-10 left-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <Image src={people2Image} alt="people2" className="h-full w-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <Image src={people3Image} alt="people3" className="h-full w-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
