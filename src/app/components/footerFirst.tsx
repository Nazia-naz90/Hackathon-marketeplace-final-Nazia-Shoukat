import React from "react";
import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="relative py-6 mt-10 bg-white">

        {/* FIRST FOOTER SOCIAL LINK SECTION */}
        <div
          className="flex justify-between items-center py-12 px-10 mx-auto max-w-screen-xl 
        bg-[#FAFAFA]"
        >
          {/* TEXT LEFT SIDE */}
          <h2 className="text-[24px] font-bold text-[#252B42]">BANDAGE</h2>
          {/* RIGHT SOCIAL ICONS*/}
          <div className="flex space-x-6 ">
            {/* FACEBOOK ICON */}
            <Link
              href="#"
              aria-label="Facebook"
              className="text-[#23A6F0] hover:opacity-75"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
                {/*INSTAGRAM ICON*/}
                <Link
              href="#"
              aria-label="Instagram"
              className="text-[#23A6F0] hover:opacity-75"
            >
              <FaInstagram  className="w-6 h-6"/>
            </Link>
                {/*TWITTER ICON */}
           <Link  href="/"
              aria-label="TwITTER"
              className="text-[#23A6F0] hover:opacity-75"
            >
              <FaTwitter className="w-6 h-6"/>
            </Link> 
          </div>
        </div>
        {/* LAST BOTTOM OF FOOTER */}
  <div className="container 
  mx-auto px-4 max-w-[1200px] mt-10
  "  >
    <div className="flex flex-col lg:flex-row items-start justify-between gap-6 " >
{/* COMPANY INFORMATION */}
<div className="flex-1 min-w-[120px]">
  <h3 className="text-lg font-bold text-[#252B42] 
  text-[16px] mb-2 
  ">
   Company Bio
  </h3>
  <ul className="text-[#737373] space-y-1 text-[14px] font-bold 
  ">
<li>
  <Link href='#' className="hover:underline">
  About Us
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
  Carrier
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
  We are hiring
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
 Blog
  </Link>
</li>
 </ul>
</div>
{/* LEGAL COLUMN */}
<div className="flex-1 min-w-[120px]">
  <h3 className="text-lg font-bold text-[#252B42] 
  text-[16px] mb-2 
  ">
   Legal
  </h3>
  <ul className="text-[#737373] space-y-1 text-[14px] font-bold 
  ">
<li>
  <Link href='#' className="hover:underline">
 Terms of Service
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
   Privacy Policy
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
Cookie Policy
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
 Compliance
  </Link>
</li>
 </ul>
</div>
{/* FEATURES COLUMN */}
<div className="flex-1 min-w-[120px]">
  <h3 className="text-lg font-bold text-[#252B42] 
  text-[16px] mb-2 
  ">
  Features
  </h3>
  <ul className="text-[#737373] space-y-1 text-[14px] font-bold 
  ">
<li>
  <Link href='#' className="hover:underline">
  Business Marketing
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
  User Analystic
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
Live Chat
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
 Unlimited Support
  </Link>
</li>
 </ul>
</div>
{/* RESOURCES COLUMN */}
<div className="flex-1 min-w-[120px]">
  <h3 className="text-lg font-bold text-[#252B42] 
  text-[16px] mb-2 
  ">
  Resources
  </h3>
  <ul className="text-[#737373] space-y-1 text-[14px] font-bold 
  ">
<li>
  <Link href='#' className="hover:underline">
ios & Android
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
  Watch a Demo
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
  Customers
  </Link>
</li>
<li>
  <Link href='#' className="hover:underline">
 API
  </Link>
</li>
 </ul>
</div>

{/* GET IN TOUCH COLUMN */}
 <div className="flex-1 
  min-w-[150px] 
">
<h3 className="text-lg font-bold text-[#252B42]
text-[16px] mb-2
">
Get In Touch
</h3>

<div className="flex">
<input type="email"
placeholder="Enter Your Email" className="px-3 py-2 border rounded-l-md text-[14px] w-full focus:outline-none"/>
<button className="bg-[#23A6F0] text-white px-4
py-2 rounded-r-md hover:bg-blue-400 text-[14px]
">
Subscribe
</button>
</div>
<p className="text-[#737373] text-[12px] mt-2
">
Lore ipsum dolor Amit
</p>

</div>
 </div>
  </div>
  {/* B0TTOM LINE OF FOOTER */}
  <div className="mt-16 text-left bg-[#FAFAFA] p-9">
<p className="text-[#737373] font-bold text-[14px]
">
Made By Nazia Naz Shoukat. All Rights Reserved
</p>
  </div>
  </footer>
    </>
  );
};

export default Footer;
