import React from 'react';
import Image from 'next/image';

const Work = () => {
  return (
    <>

    <div className="bg-[#2A7CC7]  sm:flex sm:items-center sm:justify-center
     py-10 h-[31.25rem] sm:h-[31.25rem] ">
    <div className="flex flex-col md:flex-row items-center justify-center ">
    {/* TEXT SECTION*/}
    <div className="text-center sm:text-left ml-0 sm:ml-32
    w-full md:w-1/2">
    <h3 className="text-[#FFFFFF] font-bold text-[16px] mb-4 md:mb-6">
    WORK WITH US
    </h3>
    <h2 className="text-[#FFFFFF] font-bold text-[28px] md:text-[40px] mb-4 md:mb-6">
    Now Let&apos;s grow Yours  
    </h2>
    <p className="text-[FFFFFF]
    text-[14px] md:text-[16px] mb-6">
    The gradual accumulation of information about atomic and <br />
    small-scale behavior during the first quarter of the 20th
    </p>
    <button className="border px-6 py-2 md:px-9 md:py-3 text-[#FFFFFF] rounded-md
    transition-transform hover:scale-110 hover:bg-[#1E6CB3] hover:border-transparent">
       Button   
    </button>
    </div>
{/* Image section */}
<div className="flex items-center justify-center md:block w-[36.25rem] h-[31.25rem]
md:w-1/2 lg:ml-64">
<Image src={"/images/about/images/workGirl.png"}
alt="work"
height={500}
width={580}
className='w-[36.25rem] h-[31.25rem] '
/>
</div>
</div>    
</div> 
    </>
  );
};

export default Work;
