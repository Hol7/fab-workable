"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SourceOfSolution = () => {
  return (
    <div className="bg-backgroun w-full h-auto  flex-col items-center justify-center py-32">
      <div className="flex-col items-center justify-center text-center">
        <div>
          <div className="">
            <Button
              className="  hover:bg-buttonBg bg-buttonBg
                 px-10  py-6 rounded-full text-text font-bold "
            >
              Candidate sourcing suite
            </Button>
          </div>
        </div>
        <div className="w-full text-center justify-center my-4">
            <p className="text-white  font-bold text-center text-[56px] leading-[64px]">A complete talent
            </p>
            <span className="text-white  font-bold text-center text-[56px] leading-[64px]">
            sourcing solution</span>
        </div>
        <div className="w-full text-center flex justify-center my-6"> 
            <span className="w-1/2 text-white px-20 text-[18px]">
            Workable provides you with a powerful set of tools to source, attract,
            and engage top talent with ease.

            </span>
        </div>
      </div>
      <div className="px-32  my-16">
      <Image
          className="dark:invert"
          src="/image/sourcing-solution_2x.webp"
          alt="Next.js logo"
          width={0}
          height={0}
          sizes="50vw"
          style={{ width: "100%", height: "auto", borderRadius:20 }} // optional
          priority
        />

      </div>
    </div>
  );
};

export default SourceOfSolution;
