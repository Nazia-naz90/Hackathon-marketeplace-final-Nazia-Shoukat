import Image from "next/image";
import Link from "next/link";

import React from 'react'

const AboutUs = () => {
  return (
    <>
    <div className="flex flex-col
    md:flex-row items-center justify-between px-4 py-8">
    {/* TEXT SECTION */}
    <div className="w-full text-center md:text-left md:w-1/2 md:ml-16">
    <h3 className="text-[#252B42] font-bold text-[16px] mb-6">
    About Company
    </h3>
    <h1 className="text-[#252B42] font-bold text-[32px] sm:text-48px md:text-[58px] mb-6">
    ABOUT US
    </h1>
    <p className="text-[#737373] text-[1rem] sm:text-[18px] md:text-[20px] mt-5">
    We know how large objects will act, <br />
    but things on a small scale
    </p>

    {/* BUTTON SECTION */}
    <div className="mt-7 flex justify-center md:justify-start">
    <Link href="/contact">
    <button className="px-4 py-3 bg-[#23A6F0] text-[#FAFAFA] rounded-md hover:bg-blue-500 transition-all text-center
    text-[1rem]">
      Get Quote Now
    </button>
    </Link>
    </div>
    </div>

   {/* IMAGE SECTION */}
   <div className="w-full md:w-1/2 mt-8 md:mt-0">
   <Image
   src="/images/about/images/aboutus.png"
   alt="image"
   width={415}
   height={280}
   className="w-full h-auto object-contain"
   >
   </Image>
   </div>

</div>
</>
);
};

export default AboutUs;
