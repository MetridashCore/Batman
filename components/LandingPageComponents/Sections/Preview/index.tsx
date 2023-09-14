import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PreviewImg from "../../../../public/Images/idea.png";
import RPreviewImg from "../../../../public/Images/idea.png";
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
    <div className="bg-white md:flex md:px-10 px-4 md:px-16 items-center justify-center py-20 mr-[3%] md:gap-x-5">
      <motion.div
        ref={ref}
        variants={textScrollVariants}
        initial="hidden"
        className="flex flex-col gap-y-5 justify-center relative md:right-[-50px] transition-all duration-1000 ease-in-out"
        animate={controls}
      >
        <motion.div
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="w-[100%] h-[100%] mt-[5%] relative right-[-50px] transition-all duration-1000 ease-in-out"
          animate={controls}
        >
          <Image
            src={RPreviewImg}
            alt="Preview"
            className="sm:hidden flex object-contain"
            width={800}
            height={450}
          />
        </motion.div>
        <h1 className="text-[#3247CF] font-semibold md:text-[48px] text-4xl leading-[48px] md:w-[380px]">
          Tailored Content Ideas to Fuel Your Creativity!
        </h1>
        <p className="font-normal text-[16px] leading-[18.75px] text-justify text-[#494949] md:w-[387px]">
          Our advanced AI-driven platform is{" "}
          <br className="sm:hidden flex"></br>
          designed to provide you with content
          <br className="sm:hidden flex"></br> ideas perfectly tailored to your
          needs sparking your creativity like never before.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        variants={textScrollVariants}
        initial="hidden"
        className="w-screen mt-[5%] relative  transition-all duration-1000 ease-in-out"
        animate={controls}
      >
        <Image src={PreviewImg} alt="Preview" className="sm:flex hidden" />
      </motion.div>
    </div>
  );
};

export default Preview;
