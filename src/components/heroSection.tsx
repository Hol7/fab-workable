"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icon } from "@iconify/react";

const HeroSection = () => {
  return (
    <div className="bg-heroSection w-full h-[100vh] flex justify-center items-center">
      <div className="w-1/2 pl-20 flex-col gap-96 justify-between">
        <div className="font-black ">
            <span className="text-[72px] tracking-tight leading-[88px] text-text">
            The future-ready HR platform
            </span>
        </div>
        <div className="font-normal mt-10">
            <span className="text-[24px] pr-10 font-normal ">
            Redefining HR with intelligent tools to streamline hiring, employee data management, time tracking and payroll.
            </span>
        </div>
        <div className="flex gap-3 justify-start items-center mt-10">
          <div className=" flex gap-2">
            <span className=" bg-transparent hover:cursor-pointer font-black  text-text   ">
              Request a demo
            </span>
            {/* <Icon icon="mdi-light:home" /> */}
            <Icon
              icon="si:arrow-right-duotone"
              style={{ color: "#004038", fontSize: "24px" }}
            />
          </div>

          <div className="bg-gradient-to-r from-bubble-gum  to-bermuda   rounded-lg">
            <Button className="border-2 text-[20px] border-text bg-text font-black p-8 rounded-lg text-white   hover:bg-text duration-300 transform  transition ease-in-out  hover:-translate-y-2 hover:scale-105">
              Start a free trial
            </Button>
          </div>
        </div>
      </div>


      <div className="w-1/2 pr-20 pt-20 flex  items-center">
        <Image
          className="dark:invert"
          src="/image/hero-image_2x.webp"
          alt="Next.js logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
