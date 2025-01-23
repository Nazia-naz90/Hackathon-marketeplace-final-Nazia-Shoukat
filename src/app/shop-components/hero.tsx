import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";


export default function Hero() {
  return (
<>

<div className="text-center py-10">
      <h2 className="text-[#737373] font-bold text-[16px] mt-5">WHAT WE DO</h2>
      <h1 className="text-[58px] font-bold mt-3 text-[#252B42]">
        Innovation tailored for you
      </h1>
      <p className="text-[#252B42] mt-5 font-bold text-[14px] flex justify-center items-center gap-1">
        Home
        <FiChevronRight
          className="text-[#BDBDBD]
    text-[25px]
    "
        />
        {""}
        <span className="text-[#737373]">Team</span>
      </p>
     

         {/*LAYOUT FOR DESKTOP SCREEN */}
         <div className="sm:flex  justify-center items-center 
         gap-8 mt-6 mx-auto">
          {/*IMAGE 1 */}
         <div className="relative ">
           <Image src={"/images/pages/images/team-1.png"} 
           alt="image"
            width={509} 
            height={500}
            className="w-[31.25rem] h-[31rem]"
           >
          </Image>
         </div>

          <div className="sm:flex  flex-wrap w-full sm:w-[36.90rem]
          h-auto  sm:h-[31.25rem] mx-auto sm:mx-0 

          sm:gap-x-8 space-y-8 sm:space-y-0">
           {/* IMAGE 2 */}
         <div className="relative mt-10 sm:mt-0">
           <Image src={"/images/pages/images/team-2.png"} alt="woman"
            width={240} height={240} 
            className="w-[31.25rem] sm:w-[15rem] h-[31rem] sm:h-[15rem]  "
           >
          </Image>
        
         </div>
          
          {/* IMAGE 3  */}
          
          <div className="relative ">
           <Image src={"/images/pages/images/team-3.png"} alt="woman2"
           width={240}
           height={242}
           className="w-[31.25rem] sm:w-[15rem] h-[31rem] sm:h-[15rem] "
           >
           </Image>
          </div>
     
         {/*IMAGE 4 */}
     
         <div className="relative">
           <Image src={"/images/pages/images/team-4.png"} alt="kids"
           width={240}
           height={242}
           className="w-[31.25rem] sm:w-[15rem] h-[31rem] sm:h-[15rem] "
           >
           </Image>
           </div>

        {/*IMAGE 5 */}
     
        <div className="relative">
           <Image src={"/images/pages/images/team-5.png"} alt="kids"
           width={240}
           height={242}
           className="w-[31.25rem] sm:w-[15rem] h-[31rem] sm:h-[15rem] "
           >
           </Image>
           </div>
          </div>


         </div>
     
    
       </div>    
</>
  );
}
