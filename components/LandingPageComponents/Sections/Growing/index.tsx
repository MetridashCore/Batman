import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Growing = () => {
  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
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
    <div className="flex flex-col w-screen justify-center items-center gap-y-10 py-10 bg-black">
      <motion.h1
        ref={ref}
        variants={textScrollVariants}
        initial="hidden"
        className="font-semibold text-4xl md:text-5xl leading-[54px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#009FFD] to-[#2A2A72] pb-2"
        animate={controls}
      >
        Never stop growing!
      </motion.h1>
    </div>
  );
};

export default Growing;
