import Image from 'next/image';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { MdWindow } from 'react-icons/md';
import { TfiMenuAlt } from 'react-icons/tfi';



const Hero = () =>{

return(
    <div className="px-6 mt-4">
     <div className="flex justify-between items-center">
     <h2 className="text-[#252B42] font-bold text-[24px]">
       Shop 
     </h2>   
     <p className="text-[#252B42] font-bold text-[14px] flex items-center gap-1">
        Home<FiChevronRight className='text-[#BDBDBD] text-[25px]'/>{""}
        <span className="text-[#737373]">
         Shop
        </span>
     </p>
    </div> 
    {/* CARDS FOR HERO SECTION */}

    <section className="text-gray-600 body-font">
  <div className="container  py-24 mx-auto">

  
    <div className="flex  flex-wrap text-center">
      <div className="md:w-1/5 sm:w-1/2 w-full">
        <div className="shadow-md px-4 py-6 ">
         
        <Image src={"/images/productList/images/productList-img-1.png"}
        alt='image'
        width={205}
        height={223}
        className='w-[300px] h-[332px] sm:w-full sm:h-[223px] '
        >
        </Image>

        </div>
      </div>


      <div className=" md:w-1/5 sm:w-1/2 w-full">
        <div className="shadow-md px-4 py-6 ">
          
        <Image src={"/images/productList/images/productList-img-2.png"}
        alt='image'
        width={205}
        height={223}
        className='w-[300px] h-[332px] sm:w-full sm:h-[223px] '
        >
        </Image>

        </div>
      </div>

      <div className=" md:w-1/5 sm:w-1/2 w-full">
        <div className="shadow-md px-4 py-6 ">
          
        <Image src={"/images/productList/images/productList-img-3.png"}
        alt='image'
        width={205}
        height={223}
        className='w-[300px] h-[332px] sm:w-full sm:h-[223px] '
        >
        </Image>

        </div>
      </div>

      <div className=" md:w-1/5 sm:w-1/2 w-full">
        <div className="shadow-md px-4 py-6">
          
        <Image src={"/images/productList/images/productList-img-4.png"}
        alt='image'
        width={205}
        height={223}
        className='w-[300px] h-[332px] sm:w-full sm:h-[223px] '
        >
        </Image>

        </div>
      </div>

      <div className=" md:w-1/5 sm:w-full w-full">
        <div className="shadow-md px-4 py-6 ">
          
        <Image src={"/images/productList/images/productList-img-5.png"}
        alt='image'
        width={205}
        height={223}
        className='w-[300px] h-[332px] sm:w-full sm:h-[223px] '
        >
        </Image>

        </div>
      </div>

    </div>
  </div>
</section>

 {/* HERO PAGE BOTTOM */}
 <div className="flex  text-gray-600 mx-auto container  ">
  <div className="container md:w-1/2 sm:w-full lg:flex  items-center md:justify-center  sm:justify-between
  md:gap-x-60 space-y-5 mb-10 mx-auto  
  ">

    <div className='flex items-center justify-center text-center'>
    <p className="sm:text-[1rem] w-[163px] text-[1rem] text-center font-semibold text-gray-900">
      Showing all 12 results
      </p>
    </div>

    
    {/* VIEW ICONS */}
    
    <div className="flex items-center justify-center text-center space-x-4 w-full">
        <h3>Views:</h3>
        <MdWindow className='w-[1rem] h-[1rem] font-bold'/>
        <TfiMenuAlt className='w-[1rem] h-[1rem] font-bold' />
    </div>
    


      <div className="flex items-center justify-center space-x-4 w-full">
        <button className='w-[141px] h-[50px] bg-gray-100 hover:bg-gray-200
        rounded-md text-[#250D42] flex items-center justify-center'>
        Popularity
        <FiChevronDown/>
        </button>
        <button className="text-white w-[94px] h-[50px]  bg-[#23A6F0] hover:bg-[#124a6b]
        border-0 py-2 px-8 focus:outline-none rounded text-lg">
        Filter
      </button>
        </div>

    </div>
  </div>
</div>


);
};

export default Hero;