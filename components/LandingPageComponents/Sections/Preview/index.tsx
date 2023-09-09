import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PreviewImg from "../../../../public/Images/2.png";
import RPreviewImg from "../../../../public/Images/2(1).png";

const Preview = () => {
  const textScrollVariants = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-white flex md:px-10 px-4 items-center justify-center py-10 sm:py-20 mr-[3%]">
      <motion.div
        ref={ref}
        variants={textScrollVariants}
        initial="hidden"
        className="w-full md:w-[50%] flex flex-col gap-y-5 justify-center relative right-0 md:right-[-50px] transition-all duration-1000 ease-in-out"
        animate={controls}
      >
        <motion.div
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="w-full h-[100%] mt-0 md:mt-[5%] relative right-0 md:right-[-50px] transition-all duration-1000 ease-in-out"
          animate={controls}
        >
          <Image
            src={RPreviewImg}
            alt="Preview"
            className="w-full sm:hidden flex object-contain"
            width={800}
            height={450}
          />
        </motion.div>
        <h1 className="text-[#3247CF] text-4xl md:text-5xl font-semibold leading-[48px] w-full md:w-[300px]">
          Tailored Content Ideas to Fuel Your Creativity!
        </h1>
        <p className="font-normal text-[16px] leading-[18.75px] text-justify text-[#494949] w-full md:w-[387px]">
          Our advanced AI-driven platform is designed to provide you with
          content ideas perfectly tailored to your needs, sparking your
          creativity like never before.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        variants={textScrollVariants}
        initial="hidden"
        className="w-full mt-0 md:mt-[5%] relative transition-all duration-1000 ease-in-out"
        animate={controls}
      >
        <Image
          src={PreviewImg}
          alt="Preview"
          className="w-full sm:flex hidden"
        />
      </motion.div>
    </div>
  );
};

export default Preview;
