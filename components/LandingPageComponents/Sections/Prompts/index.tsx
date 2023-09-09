import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image1 from "../../../../public/Images/3.png";
import RImage1 from "../../../../public/Images/3(1).png";
import Image2 from "../../../../public/Images/4.png";
import Image3 from "../../../../public/Images/5.png";
import Image4 from "../../../../public/Images/6.png";
import RImage5 from "../../../../public/Images/5(1).png";

const Prompts = () => {
  const textScrollVariants = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  return (
    <div className="pb-10">
      <div className="bg-white md:h-[500px] h-[600px] flex md:px-10 px-4 md:mr-[3%]">
        <motion.div
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="w-full md:w-[50%] flex flex-col gap-y-5 justify-center relative right-0 md:right-[-200px] transition-all duration-1000 ease-in-out"
          animate={controls}
        >
          <div className="md:hidden flex justify-center">
            <Image
              className="w-[100%] md:w-[678px] h-[180px]"
              src={RImage1}
              alt="Preview"
            />
          </div>
          <h1 className="text-[#3247CF] font-semibold md:text-[48px] text-4xl leading-[48px] md:w-[380px] w-full">
            No More Bad Prompts, Only Great Ideas
          </h1>
          <p className="font-normal text-[16px] leading-[18.75px] text-justify text-[#494949] md:w-[387px] w-full">
            Metridash makes content generation easy. Just tell us a bit about
            yourself and your audience, and we will create a customized prompt
            that guarantees top-notch results instantly.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="w-full md:w-[50%] mt-[5%] flex relative justify-center md:mr-10 right-0 md:right-[200px] transition-all duration-1000 ease-in-out"
          animate={controls}
        >
          <Image
            className="absolute w-[100%] md:w-[329px] h-[333px] md:flex hidden object-contain"
            src={Image1}
            alt="Preview"
          />
          <Image
            className="absolute w-[100%] md:w-[238px] h-[209px] md:ml-[54%] md:mt-[25%] mt-[5%] ml-[10%] md:flex hidden object-contain"
            src={Image2}
            alt="Preview"
          />
        </motion.div>
      </div>
      <div className="bg-white md:h-[500px] h-[600px] flex md:pl-[7%] md:mr-[3%] md:flex-row flex-col">
        <motion.div
          ref={ref2}
          variants={textScrollVariants}
          initial="hidden"
          className="w-full md:w-[50%] mt-[5%] flex relative justify-center md:mr-10 right-0 md:right-[200px] transition-all duration-1000 ease-in-out"
          animate={controls2}
        >
          <Image
            className="absolute w-[100%] md:w-[329px] h-[333px] md:flex hidden object-contain"
            src={Image3}
            alt="Preview"
          />
          <Image
            className="absolute w-[100%] md:w-[238px] h-[209px] md:ml-[54%] md:mt-[25%] mt-[5%] ml-[10%] md:flex hidden object-contain"
            src={Image4}
            alt="Preview"
          />
        </motion.div>

        <motion.div
          ref={ref2}
          variants={textScrollVariants}
          initial="hidden"
          className="w-full md:w-[50%] py-4 flex flex-col gap-y-5 justify-center relative right-0 md:right-[-50px] transition-all duration-1000 ease-in-out"
          animate={controls2}
        >
          <Image
            className="w-[100%] md:w-[278px] h-[209px] md:ml-[10.5%] md:mt-[11.8%] mt-[5%] ml-[10%] md:hidden flex"
            src={RImage5}
            alt="Preview"
          />
          <h1 className="text-[#3247CF] font-semibold md:text-[48px] text-4xl leading-[48px] md:w-[380px] w-full">
            Focus on Your Growth, We Handle the Rest
          </h1>
          <p className="font-normal text-[16px] leading-[18.75px] text-justify text-[#494949] md:w-[387px] w-full align-center">
            Metridash does the content generation work for you, so you can
            invest more time in your strategies and business growth. We will
            speed up content idea creation, letting you focus on the important
            stuff.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Prompts;
