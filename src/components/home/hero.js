"use client";
import VideoComponent from "@/app/[locale]/common/video-component";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const Features = ({ index }) => {
  const t = useTranslations("hero");
  const lang = useLocale();
  const i = index + 1;

  return (
    <div className="w-[50%] lg:w-[25%] max-sm:h-[150px] flex justify-between items-end">
      <div className="w-[1px] h-[90%] bg-[#fff] bg-opacity-15" />
      <div className="mb-[40px]">
        <h1
          className={`text-[35px] ${
            lang == "ar"
              ? "text-[20px] md:text-[calc(1vw_+_25px)] mb-4"
              : "text-[35px] md:text-[calc(2vw_+_30px)]"
          } text-center text-white`}
        >
          {t(`title${i}`)}
        </h1>
        <p className="max-sm:text-[10px] max-sm:h-[40px] max-sm:w-[95%] text-[14px] md:text-[12px] lg:text-[16px] text-white text-center">
          {t(`content${i}`)}
        </p>
      </div>
      <div className="w-[1px] h-[90%] bg-[#fff] bg-opacity-15" />
    </div>
  );
};

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <div className="w-full h-full ">
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent />
      </Suspense>

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(40, 40, 40, 0.7) 0%, rgba(1, 140, 241, 0) 49.5%, rgba(1, 140, 241, 0.8) 100%)",
        }}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="relative h-screen z-10">
        <h1 className="text-[20px] sm:text-[40px] md:text-[calc(2.6vw_+_35px)] relative top-[38vh] w-[95%] md:w-[80%] text-center mx-auto text-white">
          {t("index")}
        </h1>
        <div className="flex flex-wrap absolute w-full bottom-0">
          {Array.from({ length: 4 }, (_, index) => {
            return <Features index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
