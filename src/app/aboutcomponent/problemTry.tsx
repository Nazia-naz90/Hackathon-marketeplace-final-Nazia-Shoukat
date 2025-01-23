import React from "react";

const Problem=()=>{
    return(
        <>
        <div className="container lg:flex w-[31.75rem] h-[31.25rem] sm:w-full md:w-full items-center  justify-between text-pretty sm:text-start  px-12 sm:px-10 md:mx-20 mx-auto">
     {/*PROBLEM TEXT SECTION*/}
     
<div className="flex flex-col  w-1/2 md:w-full object-contain gap-6 py-8">
    <h3 className="text-[#E74040] text-[14px] mb-0 font-semibold">
    Problems trying
    </h3>
    <h2 className="font-bold text-[24px] text-[#252B42] sm:mt-2">
    Met minim Mollie non desert 
    <br />
    Alamo est sit cliquey dolor do {""}
    <br />
    met sent.
    </h2>
   </div>
   <div className="w-1/2 md:w-full sm:w-1/2  ">
   <p className="text-[#737373] text-[14px] ">
    Problems trying to resolve the conflict between the two major realms of
     Classical physics: Newtonian mechanics 
    </p>
   </div>
</div>
{/* CUSTOMERS STATIC VIEWS */}

<div className="lg:flex items-center justify-around text-center mx-auto sm:mx-24 mt-0 mb-20
">
    <div className="mt-10 sm:mt-0 md:mt-10">
        <h1 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">15K</h1>
        <h4 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">Happy Customers</h4>
    </div>
    <div className="mt-10 sm:mt-0 md:mt-10">
        <h1 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">150K</h1>
        <h4 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">Monthly Visitors</h4>
    </div>
    <div className="mt-10 sm:mt-0 md:mt-10">
        <h1 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">15</h1>
        <h4 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">Countries  Worldwide</h4>
    </div>
    <div className="mt-10 sm:mt-0 md:mt-10">
        <h1 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">100+</h1>
        <h4 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">Top Partners</h4>
    </div>
</div>

<div className="flex justify-center items-center 
rounded-lg shadow-2xl p-4"> 
<video className="w-full max-w-4xl h-auto" 
controls poster="/images/about/images/problem.png" > 
<source src="/images/about/images/videoClip.mp4" 
type="video/mp4"/>
 Your browser does not support the video tag. 
</video> 
</div>

 </>
    );
};

export default Problem;