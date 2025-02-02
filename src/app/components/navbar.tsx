"use client"; // Clerk ke client-side hooks ke liye yeh zaroori hai

import Link from "next/link";
import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiYoutube,
  FiFacebook,
  FiTwitter,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useCart } from "@/app/components/CartContext";
import { useUser, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, wishlist } = useCart();
  const { isSignedIn } = useUser(); // Clerk ka useUser hook

  return (
    <div className="overflow-x-hidden">
      {/* HEADER SECTION */}
      <div className="bg-[#252B42] py-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-white text-sm">
          {/* CONTACT INFORMATION */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FiPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center gap-1">
              <FiMail />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          {/* PROMOTION */}
          <p className="hidden md:block">
            Follow Us and get a chance to win 50% off
          </p>
          {/* SOCIAL MEDIA LINKS */}
          <div className="flex items-center gap-4">
            <p className="hidden md:block">Follow Us</p>
            <Link
              href="http://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube />
            </Link>
            <Link
              href="http://www.facebook.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </Link>
            <Link
              href="http://www.twitter.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-white shadow-md border-b-2 border-[#E5E5E5] relative z-40">
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* LOGO */}
          <div className="text-2xl font-bold text-[#252B42]">BANDAGE</div>
          {/* ACTION ICONS (MOBILE & DESKTOP) */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Login & SignedIn */}
            {isSignedIn ? (
              <div className="flex items-center gap-2">
                <UserButton afterSignOutUrl="/" /> {/* UserButton for profile */}
                <SignOutButton>
                  <button className="text-red-600">Sign Out</button>
                </SignOutButton>
              </div>
            ) : (
              <SignInButton>
                <button className="text-blue-500">Sign In / Register</button>
              </SignInButton>
            )}
            {/* SEARCH ICON */}
            <Link href="/search">
              <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />
            </Link>

            <Link href="/cart">
              <div className="relative">
                <FiShoppingCart className="text-lg cursor-pointer" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>

            <Link href="/wishlist">
              <div className="relative">
                <FiHeart className="text-lg cursor-pointer" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-3xl text-[#252B42]" />
              ) : (
                <FiMenu className="text-3xl text-[#252B42]" />
              )}
            </button>
          </div>
          {/* NAVIGATION LINKS */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">
              <li className="relative group">
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:text-[#23A6F0] transition-all"
                >
                  Home
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/product"
                  className="flex items-center gap-1 hover:text-[#23A6F0] transition-all"
                >
                  Shop
                  <FiChevronDown />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  Pages
                </Link>
              </li>
            </ul>
          </nav>
          {/* ACTION ICONS FOR DESKTOP */}
          <div className="hidden sm:flex items-center gap-6 text-[#23A6F0]">
            {/* SignIn & SignOut */}
            {isSignedIn ? (
              <div className="flex items-center gap-2">
                <UserButton afterSignOutUrl="/" /> {/* UserButton for profile */}
                <SignOutButton>
                  <button className="text-red-600">Sign Out</button>
                </SignOutButton>
              </div>
            ) : (
              <SignInButton>
                <button className="text-blue-600">Sign In / Register</button>
              </SignInButton>
            )}
            {/* SEARCH ICON */}
            <Link href="/search">
              <FiSearch className="text-lg cursor-pointer" />
            </Link>
            {/* CART ICON */}
            <Link href="/cart">
              <div className="relative">
                <FiShoppingCart className="text-lg cursor-pointer" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
            <Link href="/wishlist">
              <div className="relative">
                <FiHeart className="text-lg cursor-pointer" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
        {/* MOBILE MENU */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
            <li>
              <Link href="/" className="hover:text-[#23A6F0] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="hover:text-[#23A6F0] transition-all"
              >
                Product
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#23A6F0] transition-all">
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#23A6F0] transition-all"
              >
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



// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import {
//   FiPhone,
//   FiMail,
//   FiInstagram,
//   FiYoutube,
//   FiFacebook,
//   FiTwitter,
//   FiSearch,
//   FiShoppingCart,
//   FiHeart,
//   FiChevronDown,
//   FiMenu,
//   FiX,
// } from "react-icons/fi";
// import { useCart } from "@/app/components/CartContext";



// const Header =() => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { cart, wishlist } = useCart();
  
//   return (
//     <div className="overflow-x-hidden">
//       {/* HEADER SECTION */}
//       <div className="bg-[#252B42] py-4 hidden lg:block">
//         <div className="container mx-auto flex justify-between items-center text-white text-sm">
//           {/* CONTACT INFORMATION */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-1">
//               <FiPhone />
//               <p>(225) 555-0118</p>
//             </div>
//             <div className="flex items-center gap-1">
//               <FiMail />
//               <p>michelle.rivera@example.com</p>
//             </div>
//           </div>
//           {/* PROMOTION */}
//           <p className="hidden md:block">
//             Follow Us and get a chance to win 50% off
//           </p>
//           {/* SOCIAL MEDIA LINKS */}
//           <div className="flex items-center gap-4">
//             <p className="hidden md:block">Follow Us</p>
//             <Link
//               href="http://www.instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FiInstagram />
//             </Link>
//             <Link
//               href="https://www.youtube.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FiYoutube />
//             </Link>
//             <Link
//               href="http://www.facebook.com"
//               target="blank"
//               rel="noopener noreferrer"
//             >
//               <FiFacebook />
//             </Link>
//             <Link
//               href="http://www.twitter.com"
//               target="blank"
//               rel="noopener noreferrer"
//             >
//               <FiTwitter />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* NAVBAR */}
//       <div className="bg-white shadow-md border-b-2 border-[#E5E5E5] relative z-40">
//         <div className="container mx-auto flex items-center justify-between py-4">
//           {/* LOGO */}
//           <div className="text-2xl font-bold text-[#252B42]">BANDAGE</div>
//           {/* ACTION ICONS (MOBILE & DESKTOP) */}
//           <div className="flex items-center gap-4 md:hidden">
//             {/* Login & SignedIn */}
//            <button>
//             signIn/Register
//            </button>
//             {/* SEARCH ICON */}
//             <Link href="/search">
//               <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />
//             </Link>

//             <Link href="/cart">
//               <div className="relative">
//                 <FiShoppingCart className="text-lg cursor-pointer" />
//                 {cart.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//                     {cart.length}
//                   </span>
//                 )}
//               </div>
//             </Link>

//             <Link href="/wishlist">
//               <div className="relative">
//                 <FiHeart className="text-lg cursor-pointer" />
//                 {wishlist.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//                     {wishlist.length}
//                   </span>
//                 )}
//               </div>
//             </Link>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <FiX className="text-3xl text-[#252B42]" />
//               ) : (
//                 <FiMenu className="text-3xl text-[#252B42]" />
//               )}
//             </button>
//           </div>
//           {/* NAVIGATION LINKS */}
//           <nav className="hidden md:flex">
//             <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">
//               <li className="relative group">
//                 <Link
//                   href="/"
//                   className="flex items-center gap-1 hover:text-[#23A6F0] transition-all"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="relative group">
//                 <Link
//                   href="/product"
//                   className="flex items-center gap-1 hover:text-[#23A6F0] transition-all"
//                 >
//                   Shop
//                   <FiChevronDown />
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/about"
//                   className="hover:text-[#23A6F0] transition-all"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact"
//                   className="hover:text-[#23A6F0] transition-all"
//                 >
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/pages"
//                   className="hover:text-[#23A6F0] transition-all"
//                 >
//                   Pages
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//           {/* ACTION ICONS FOR DESKTOP */}
//           <div className="hidden sm:flex items-center gap-6 text-[#23A6F0]">
//           {/* SignIn & SignOut */}
//          <button>SignIn/Register</button> 
//             {/* SEARCH ICON */}
//             <Link href="/search">
//               <FiSearch className="text-lg cursor-pointer" />
//             </Link>
             
//              {/* CART ICON */}
//             <Link href="/cart">
//               <div className="relative">
//                 <FiShoppingCart className="text-lg cursor-pointer" />
//                 {cart.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white 
//                   text-xs rounded-full px-1">
//                     {cart.length}
//                   </span>
//                 )}
//               </div>
//             </Link>
//             <Link href="/wishlist">
//               <div className="relative">
//                 <FiHeart className="text-lg cursor-pointer" />
//                 {wishlist.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//                     {wishlist.length}
//                   </span>
//                 )}
//               </div>
//             </Link>
//           </div>
//         </div>
//         {/* MOBILE MENU */}
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
//         >
//           <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
//             <li>
//               <Link href="/" className="hover:text-[#23A6F0] transition-all">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/product"
//                 className="hover:text-[#23A6F0] transition-all"
//               >
//                 Product
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:text-[#23A6F0] transition-all">
//                 Pricing
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/contact"
//                 className="hover:text-[#23A6F0] transition-all"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
