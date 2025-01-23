import Image from "next/image";


export default function Editors() {
  return (

    <>
   <div className="flex flex-col items-center justify-center text-center mt-16 mb-7 bg-[#FAFAFA] pt-3">
    <div>
      <h2 className="text-[#252B42] font-bold text-[24px] mb-2">
      {"EDITOR'S PICK"}
      </h2>
      <p className="text-[#737373] text-[14px]">
      Problems Trying to Resolve the Conflict Between
      </p>  
    </div>
    {/* EDITORS PICK LAYOUT FOR DESKTOP SCREEN */}
    <div className="hidden sm:flex justify-center items-start gap-6 mt-6 
    ">
     {/* MAN IMAGES SECTION  */}
    <div className="relative ">
      <Image src={"/images/boy1.png"} alt="man"
       width={509} height={500}
       className="w-[31.25rem] h-[31rem]"
      >
     </Image>
     <div className="absolute  bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
     <span className="text-[#252B42] font-bold text-lg">
     MEN
     </span>
     </div>
    </div>
    {/* WOMEN IMAGES SECTION */}
    <div className="relative">
      <Image src={"/images/woman1.png"} alt="woman"
       width={240} height={500} 
       className="w-[15rem] h-[31rem]"
      >
     </Image>
     <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
     <span className="text-[#252B42] font-bold text-lg">
     WOMEN
     </span>
     </div>
    </div>
     
     {/* WOMEN-2 AND KIDS SECTION  */}
     <div className="flex flex-col  gap-6">
     {/* WOMEN-2 */}
     <div className="relative ">
      <Image src={"/images/woman2.png"} alt="woman2"
      width={240}
      height={242}
      className="h-[15rem] w-[15rem]"
      >
      </Image>
      <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
      <span className="text-[#252B42] font-bold text-lg">
      ACCESSORIES
      </span>
      </div>
     </div>

    {/* KIDS IMAGE SECTION */}

    <div className="relative">
      <Image src={"/images/kid.jpg"} alt="kids"
      width={240}
      height={242}
      className="h-[15rem] w-[15rem]"
      >
      </Image>
      <div className="absolute bottom-4 left-4 w-[170px] h-[48px]
       bg-white flex items-center justify-center">
      <span className="text-[#252B42] font-bold text-lg">
      KIDS
      </span>
      </div>
     </div>
     </div>
    </div>

    {/* EDITORS PICK LAYOUT FOR MOBILE SCREEN */}
     <div className="sm:hidden flex flex-col items-center justify-center gap-6 mt-6">
       {/* MAN IMAGES SECTION  */}
    <div className="relative 
    w-[90%] sm:w-full
    ">
      <Image src={"/images/boy1.png"} alt="man" 
      width={324} height={500}
      className="w-[324px] h-[500px]"
      >
     </Image>
     <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
     <span className="text-[#252B42] font-bold text-lg">
     MEN
     </span>
     </div>
    </div>
    {/* WOMEN IMAGES SECTION */}
    <div className="relative w-[90%] sm:w-full mx-auto">
      <Image src={"/images/woman1.png"} alt="woman" 
      width={325} height={500}
      className="w-[325px] h-[500px]"
      >
     </Image>
     <div className="absolute bottom-4 left-4 w-[170px] 
     h-[48px] bg-white flex items-center justify-center">
     <span className="text-[#252B42] font-bold text-lg">
     WOMEN
     </span>
     </div>
    </div>
     
     {/* WOMEN-2 AND KIDS SECTION  */}
     <div className="flex flex-col gap-6 w-[90%] sm:w-full ">
     {/* WOMEN-2 */}
     <div className="relative mx-auto">
      <Image src={"/images/woman2.png"} alt="woman2"
      width={325}
      height={242}
      className="w-[325px] h-[242px]"
      >
      </Image>
      <div className="absolute bottom-4 left-4 w-[170px] 
      h-[48px] bg-white flex items-center justify-center">
      <span className="text-[#252B42] font-bold text-lg">
      ACCESSORIES
      </span>
      </div>
     </div>

    {/* KIDS IMAGE SECTION */}

    <div className="relative mx-auto">
      <Image src={"/images/kid.jpg"} alt="kids"
      width={325}
      height={242}
      className="w-[325px] h-[242]"
      >
      </Image>
      <div className="absolute bottom-4 left-4 w-[170px] h-[48px]
       bg-white flex items-center justify-center">
      <span className="text-[#252B42] font-bold text-lg">
      KIDS
      </span>
      </div>
     </div>
     </div>

     </div>

    </div> 
    
    </>

    // <div className="flex flex-col items-center justify-center sm:flex  relative text-center 
    // lg:py-[10px] sm:mt-16  mb-7
    //  bg-[#f5f5f5]">
    //   <div className="h-auto flex flex-col gap-[30px] bg-[#FAFAFA] 
    //   absolute p-[40px]">
    //     {/* Title Section */}
    //     <div className="flex flex-col items-center gap-[10px]">
    //       <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px]">  
    //       {"EDITOR’S PICK"}
    //       </h3>
    //       <p className="w-[347px] h-auto  font-normal text-[14px] leading-[20px] text-[#737373] text-center">
    //         Problems trying to resolve the conflict between
    //       </p>
    //     </div>
    //     {/* Images Section */}
    //     <div className="hidden 
    //      sm:flex justify-center
    //      items-center mt-6 h-[31.25rem] w-full
    //       gap-7 "
    //     >
    //       {/* Men Image */}
    //       <div className="relative w-[31.875rem] h-[31.25rem]">
    //         <Image
    //           src={"/images/boy1.png"}
    //           alt="men"
    //           width={510}
    //           height={500}
    //           className="w-full h-full object-cover rounded-md"
    //         />
    //         <button className="absolute top-[434px] left-[101px] transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
    //           MEN
    //         </button>
    //       </div>
    //       {/* Women Image */}
    //       <div className="relative w-[15rem] h-[31.25rem]">
    //         <Image
    //           src={"/images/woman1.png"}
    //           alt="woman"
    //           width={240}
    //           height={500}
    //           className="w-full h-full object-cover"
    //         />
    //         <button className="absolute top-[434px] left-[21px] w-[136px] h-[48px] px-[48px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
    //           <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
    //             WOMEN
    //           </h2>
    //         </button>
    //       </div>
    //       {/* Accessories and Kids */}
    //       <div className="w-[15rem] h-[31.25rem] flex flex-col gap-6">
    //         {/* Accessories Image */}
    //         <div className="relative w-[240px] h-[242px]">
    //           <Image
    //             src={"/images/woman2.png"}
    //             alt="woman2"
    //             width={240}
    //             height={242}
    //             className="w-full h-full object-cover"
    //           />
    //           <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white  shadow-md">
    //             <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
    //               ACCESSORIES
    //             </h2>
    //           </button>
    //         </div>
    //         {/* Kids Image */}
    //         <div className="relative w-[15rem] h-[15.125rem]">
    //           <Image
    //             src={"/images/kid.jpg"}
    //             alt="kid"
    //             width={240}
    //             height={242}
    //             className="w-full h-full object-cover"
    //           />
    //           <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white  shadow-md">
    //             <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
    //               KIDS
    //             </h2>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}