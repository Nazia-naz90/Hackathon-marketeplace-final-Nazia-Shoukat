"use client";
import Link from "next/link";
import {useState}from "react";
import {  
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

const Header =() =>{
  const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenue =() =>{
    setIsMobileMenuOpen((prevState)=> !prevState)
  }

  return(
    <header className="bg-white shadow-md py-4">
<div className="container mx-auto flex items-center justify-between px-4">
    {/* LOGO */}
  <div className="text-[24px] font-bold text-[#252B42] mr-8">
    {""}
    {/* Add mr-8 for margin-right */}
    Bandage
  </div>
 {/* NAVBAR FOR DESKTOP SCREEN */}
<nav className="hidden md:flex flex-row items-center gap-8 text-[14px] text-[#737373] font-bold ml-20">
   <ul className="list-none flex gap-8">
    {""}
{/* Add List-none here to remove dots */}
<Link href="/">
<li className="cursor-pointer hover:text-[#23A6F0]">
Home
</li>
</Link>
<Link href="/product">
<li className="cursor-pointer hover:text-[#23A6F0]">
Product
</li>
</Link>
<Link href="/pricing">
<li className="cursor-pointer hover:text-[#23A6F0]">
Pricing
</li>
</Link>
<Link href="/contact">
<li className="cursor-pointer hover:text-[#23A6F0]">
Contact
</li>
</Link>
</ul> 
</nav>

{/* ICONS & BUTTONS */}
<div className="flex items-center gap-4 ml-auto">
{/* SEARCH ICON (HIDDEN ON DESKTOP) */}
<button className="md:hidden flex items-center justify-center p-2 text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
<FiSearch size={20}/>
</button>

{/* ADD TO CART ICON */}
<button className="md:hidden flex items-center justify-center p-2 text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
<FiShoppingCart size={20}/>
</button>

{/* LOGIN BUTTON (HIDDEN ON MOBILE) */}
<button className="md:hidden flex items-center justify-center p-2 text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
Login
</button>

{/* MOBILE HAMBURGER MENU (APPEARS AT THE END ON MOBILE) */}
<div className="md:hidden flex items-center">
<button onClick={toggleMobileMenue}
className="text-[#252B42]">
    {isMobileMenuOpen ? <FiX size={24}/>:
    <FiMenu size={24}/>
    }
</button>
</div>
</div>
</div>
{/* MOBILE MENU WILL BE 
 APPEARS  WHEN HAMBURGER ICON IS CLICKED   */}

<div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}bg-white shadow-md mt-4 px-4 py-6 flex justify-center items-center `}>
<ul className="list-none flex gap-4
text-[20px] text-[#737373] font-bold
">
    {""}
{/* Add List-none here to remove dots */}
<Link href="/">
<li className="cursor-pointer hover:text-[#23A6F0] transition-all">
Home
</li>
</Link>
<Link href="/product">
<li className="cursor-pointer hover:text-[#23A6F0] transition-all">
Product
</li>
</Link>
<Link href="/pricing">
<li className="cursor-pointer hover:text-[#23A6F0] transition-all">
Pricing
</li>
</Link>
<Link href="/contact">
<li className="cursor-pointer hover:text-[#23A6F0] transition-all">
Contact
</li>
</Link>
</ul>    
</div>

</header>
  );
};


export default Header;