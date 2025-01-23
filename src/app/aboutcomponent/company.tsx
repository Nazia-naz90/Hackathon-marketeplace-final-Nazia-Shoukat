import React from 'react';
import Image from 'next/image';
const Companies = () => {
  return (
    <>
<div className="bg-[#FAFAFA] mt-10 py-11 mx-auto">
<div className="flex flex-col justify-center items-center ">
<h1 className="text-[40px] font-bold text-[#252B42] text-center">
Big Companies Are Here    
</h1>  
<p className="text-[#737373] text-[14px] mt-3 text-center">
Problems trying to resolve the conflict between    
</p> 
<p className="text-[#737373] text-[14px] mt-3 text-center">
the two major realms of Classical physics: Newtonian mechanics    
</p> 
</div>
</div>

{/* COMPANIES VACTORS */}

<section className="bg-gray-100 ">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/6 w-1/2">
       <Image src={"/images/productList/images/company-1.png"}
       alt='vactor'
       width={153}
       height={34}
       className='w-[153px] h-[34px]'
       >
       </Image>
      </div>

      <div className="p-4  sm:w-1/6 w-1/2">
      <Image src={"/images/productList/images/company-2.png"}
       alt='vactor'
       width={153}
       height={34}
       className='w-[100px] h-[34px]'
       >
       </Image>
      </div>

      <div className="p-4 sm:w-1/6 w-1/2">
      <Image src={"/images/productList/images/company-3.png"}
       alt='vactor'
       width={153}
       height={34}
       className='w-[100px] h-[34px]'
       >
       </Image>
      </div>

      <div className="p-4 sm:w-1/6 w-1/2">
      <Image src={"/images/productList/images/company-4.png"}
       alt='vactor'
       width={153}
       height={34}
       className='w-[100px] h-[34px]'
       >
       </Image>
      </div>
      <div className="p-4 sm:w-1/6 w-1/2">
      <Image src={"/images/productList/images/company-5.png"}
       alt='vactor'
       width={153}
       height={34}
       className='w-[100px] h-[34px]'
       >
       </Image>
      </div>

      <div className="p-4 sm:w-1/6 w-1/2">
      <Image src={"/images/productList/images/company-6.png"}
       alt='vactor'
       width={153}
       height={34}
       className='w-[100px] h-[34px]'
       >
       </Image>
      </div>

    </div>
  </div>
</section>
    </>
  )
}

export default Companies
