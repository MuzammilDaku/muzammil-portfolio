"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Introduction() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center px-6 md:px-12 lg:px-20">
      {/* Text Section */}
      <div
        className={`transition-all duration-1000 text-center md:text-left ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl text-[#002265]">Hi!</h1>
        <h2 className="text-[#002265] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight pt-2">
          I am Muzammil Abbas.
        </h2>
        <h2 className="text-[#002265] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight pt-2">
          a Full Stack Developer
        </h2>
        <p className="text-[#082032] text-lg sm:text-xl md:text-2xl leading-relaxed pt-6 max-w-2xl mx-auto md:mx-0">
          I’m a Full-Stack Developer based in Pakistan, passionate about writing
          clean, efficient code and solving problems with elegant solutions.
        </p>
      </div>

      {/* Image Section */}
      <div
        className={`transition-all duration-700 delay-200 flex justify-center md:justify-end ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Image
          src="/mzml.png"
          height={500}
          width={500}
          alt="Muzammil Abbas Full Stack Developer Image"
          className="rounded-xl object-contain w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
        />
      </div>
    </div>
  );
}
