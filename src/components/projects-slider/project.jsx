"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const styles = {
  featureText: "text-[#939393] font-light text-[calc(0.6vw_+_8px)] mt-1",
  featureNumber: "text-[#3F444B] font-bold text-[calc(0.6vw_+_12px)] mt-1",
  containerTransition:
    "transition-all overflow-hidden duration-700 cursor-pointer",
  expandedProject: "w-full h-full max-md:h-auto",
  collapsedProject: "md:w-[155px] max-md:h-[155px] w-full h-full flex-shrink-0",
  slideNumberExpanded:
    "absolute md:left-[30px] left-[15px] top-[15px] md:top-[25px] bg-[#ED0000] text-white",
  slideNumberCollapsed:
    "absolute top-1/2 max-md:-translate-y-1/2 max-md:right-[20px] w-fit md:left-1/2 md:top-[25px] transform md:-translate-x-1/2 text-[#ED0000]",
};

const Feature = ({ icon, name, number }) => (
  <div>
    <Image
      src={icon}
      width={22}
      height={22}
      alt={`${name} icon`}
      className="h-[calc(0.6vw_+_12px)] w-[calc(0.6vw_+_12px)]"
      unoptimized
    />
    <p className={styles.featureText}>{name}</p>
    <h1 className={styles.featureNumber}>{number}</h1>
  </div>
);

const SlideContent = ({ expanded }) => (
  <>
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-10 bg-[#F4F6F8]"
      initial={{ opacity: 0 }}
      animate={{ opacity: expanded ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.div
      className="w-full h-full flex flex-col max-md:pl-[20px] md:pt-[44px] justify-center rotate-text absolute z-20 bottom-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: expanded ? 0 : 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h1 className="text-[#3F444B] text-[calc(1vw_+_20px)]">Emirates Glass</h1>
      <h1 className="text-[calc(0.6vw_+_16px)] font-light text-[#939393]">
        Rooftop
      </h1>
    </motion.div>
  </>
);

const ProjectComponent = ({
  expandedIndex,
  setExpandedIndex,
  index,
  image,
}) => {
  const isExpanded = index === expandedIndex;
  const slideNumber = index + 1;

  return (
    <div
      className={`${
        isExpanded ? styles.expandedProject : styles.collapsedProject
      } ${styles.containerTransition}`}
      onClick={() => setExpandedIndex(index)}
    >
      <div
        className={`w-full h-full relative ${
          isExpanded && "max-md:min-h-[300px]"
        }`}
      >
        <SlideContent expanded={isExpanded} />
        <Image
          width={200}
          height={200}
          unoptimized
          loading="lazy"
          alt="Project card"
          src={image}
          className="w-full h-full object-cover"
        />
        <h1
          className={`text-[calc(1vw_+_20px)] transition-all flex items-center justify-center duration-1000 px-1 z-20 ${
            isExpanded
              ? styles.slideNumberExpanded
              : styles.slideNumberCollapsed
          }`}
        >
          0{slideNumber}
        </h1>
        {isExpanded && (
          <motion.div
            className="min-w-fit max-md:w-full min-h-fit pb-4 pr-6 w-[65%] h-[35%] md:h-[55%] bg-white pl-5 md:pl-10 pt-5 md:pt-10 absolute bottom-0 left-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h1 className="text-[#3F444B] text-[calc(1vw_+_20px)]">
              Emirates Glass
            </h1>
            <h1 className="text-[calc(0.6vw_+_12px)] font-light text-[#0070FF]">
              Rooftop
            </h1>
            <div className="mt-6 flex justify-between flex-wrap">
              {[...Array(4)].map((_, index) => (
                <Feature
                  key={index}
                  icon="/icon-1.png"
                  name="PV Modules"
                  number={694}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectComponent;
