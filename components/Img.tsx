"use client"

import React from "react";
import Image from "next/image";

const Img = () => {
  return (
    <div className="w-full h-full relative max-w-7xl my-auto mx-auto p-20">
      <Image
        src="/header.webp"
        alt="Header Img"
        width={1400}
        height={800}
        className="border-solid border-8 border-stone-500 outline-8 outline-stone-500"
      />
    </div>
  );
};

export default Img;
