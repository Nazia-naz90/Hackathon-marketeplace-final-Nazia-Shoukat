"use client";

import Link from "next/link";
import{useState} from "react";
import{
    FiSearch,
    FiShoppingCart,
    FiMenu,
    FiX,
    FiChevronsRight,
  } from "react-icons/fi";

  const Header = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false);

    return(
        <div className="overflow-x-hidden">
            {/* Header Section */}

     {/* NAVBAR PORTION */}
     <div className="bg-white shadow-md border-b-2 border-[#E5E5E5] relative z-40">
     <div className="container mx-auto flex items-center justify-between py-4">
        {/* LOGO */}
    <div className="text-2xl font-bold text-[#252B42]">
        Bandage
    </div>

    {/* ACTION ICONS (MOBILE AND DESKTOP) */}
     <div className="flex items-center gap-4 md:hidden">
        <FiSearch className="text-2xl text-[#252B42] cursor-pointer"/>
      <FiShoppingCart className="text-[2xl] text-[#252B42] cursor-pointer"/>
      <button onClick={()=> setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menue"
        >
       {isMenuOpen?(<FiX className="text-3xl text-[#252B42]"/>):(<FiMenu className="text-3xl text-[#252B42]"/>)}     
      </button>
     </div>

    {/* NAVIGATION LINKS*/}
    <nav className="hidden md:flex">
        <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">
    <li>
     <Link href="/" className="hover:text-[#23A6F0] transition-all ">
     Home
    </Link>       
    </li>   
    <li>
     <Link href="/product" className="hover:text-[#23A6F0] transition-all ">
     Product
    </Link>       
    </li>  
    <li>
     <Link href="/pricing" className="hover:text-[#23A6F0] transition-all ">
     Pricing
    </Link>       
    </li>  
    <li>
     <Link href="/contact" className="hover:text-[#23A6F0] transition-all ">
     Contact
    </Link>       
    </li>               
    </ul>
    </nav>

    {/* ACTION ICONS FOR DESKTOP */}
     <div className="hidden md:flex items-center gap-6 text-[#23A6F0]">
     <button className="text-sm text-[1.5rem] font-semibold w-[100px]
     p-4 h-[52px]">
      Login
    </button>   
    <button className="flex items-center justify-center text-[1rem] text-white  gap-x-4
    bg-[#23A6F0] font-semibold p-4 w-[214px] h-[52px] rounded-md">
    Become a member
    <FiChevronsRight/>
    </button>
     </div>
    </div> 

    {/* MOBILE MENU */}
<div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}>
<ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
 <li>
    <Link href="/" className="hover:text-[#23A6F0] transition-all">
    Home
    </Link>
 </li>   
 <li>
    <Link href="/product" className="hover:text-[#23A6F0] transition-all">
    product
    </Link>
 </li> 
 <li>
    <Link href="/about" className="hover:text-[#23A6F0] transition-all">
    Pricing
    </Link>
 </li> 
 <li>
    <Link href="/contact" className="hover:text-[#23A6F0] transition-all">
    Contact
    </Link>
 </li> 
</ul>
</div>
</div>
</div>
 );
 };
 export default Header;