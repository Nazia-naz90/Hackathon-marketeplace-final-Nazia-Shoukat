import React from 'react';
import Image from 'next/image';

const Company = ()=>{
    return(
        <>

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
export default Company;