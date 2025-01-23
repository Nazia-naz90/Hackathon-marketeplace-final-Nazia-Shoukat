// app/components/ProductDetails.tsx (Client Component)
"use client";

import Image from "next/image";
import Header from "@/app/components/navbar";
import Footer from "@/app/components/footerFirst";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { useCart } from "@/app/components/CartContext";

interface Product {
  imageUrl: string;
  name: string;
  department: string;
  originalPrice: string;
  discountPrice: string;
  colors: string[];
  id: string;
  description: string;
  lDress: {
    description: string;
    button: string;
    heartIconUrl: string;
    cartIconUrl: string;
    eyeIconUrl: string;
  };
}

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart, addToWishlist, wishlist, removeFromWishlist } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      heading: product.name,
      price: parseFloat(product.discountPrice || product.originalPrice),
      image: product.imageUrl,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  const handleWishlist = () => {
    const wishlistItem = {
      id: product.id,
      heading: product.name,
      price: parseFloat(product.discountPrice || product.originalPrice),
      image: product.imageUrl,
    };

    const isInWishlist = wishlist.some((item) => item.id === product.id);
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  return (
    <>
      <Header />
      <article
        className="mt-12 mb-24 px-10 sm:px-2  md:px-10 lg:px-32 xl:px-4
     lg:flex md:flex items-center sm:items-center justify-center 
      py-10 bg-white shadow-lg rounded-lg max-w-7xl
     h-auto border-2 mx-auto  space-y-10 sm:space-y-8 gap-x-5 sm:gap-x-0
     md:gap-x-4 lg:gap-x-10"
      >
        <div>
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              width={350}
              height={300}
              alt="image"
              className="rounded-lg  w-[350px] sm:w-[300px] md:w-[400px] 
          lg:w-[300px] h-[430px]  shadow-lg transition-all 
          transform hover:scale-105"
            />
          )}
        </div>

        <div
          className="flex flex-col items-center justify-center w-[250px] 
sm:w-[400px] lg:w-[450px] h-auto space-y-2  
  mx-auto"
        >
          <h1
            className="text-[1.5rem] text-yellow-600 sm:text-[2rem] 
  lg:text-[2rem] 
  font-bold text-dark dark:text-light"
          >
            {product.name}
          </h1>

          <div>
            {product.department && (
              <p className="text-[#737373] text-[14px]">{product.department}</p>
            )}
            {product.originalPrice && (
              <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
                {product.originalPrice}
                <span className="text-[#23856D]">{product.discountPrice}</span>
              </p>
            )}
          </div>

          <div>
            {product.description && (
              <p
                className="text-blue-700 text-[16px] sm:font-bold
      text-justify sm:text-justify 
      mt-2"
              >
                {product.description}
              </p>
            )}
          </div>

          <div>
            <div className="flex justify-center gap-2 mt-4">
              {product.colors &&
                product.colors.map((color: string, index: number) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
            </div>
          </div>

          {product.lDress && (
            <section
              className="flex flex-col px-0 sm:px-4 md:px-12 lg:px-0
     gap-2 xs:gap-4 
    sm:gap-6 items-start xs:items-center justify-start"
            >
              <p className="text-[18px] font-semibold text-center sm:text-justify">
                {product.lDress.description}
              </p>
              <div className="flex items-center justify-center mx-auto space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="w-[140px] h-[45px]
         border-transparent bg-blue-500 rounded-md"
                >
                  {product.lDress.button}
                </button>
                <button
                  onClick={handleWishlist}
                  className="w-[140px] h-[45px]
         border-transparent bg-pink-500 rounded-md"
                >
                  {wishlist.some((item) => item.id === product.id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </button>
                {product.lDress.heartIconUrl && (
                  <FaHeart
                    className={`w-6 h-6 cursor-pointer ${
                      wishlist.some((item) => item.id === product.id)
                        ? "text-rose-700"
                        : "text-gray-400"
                    }`}
                    onClick={handleWishlist}
                  />
                )}
                {product.lDress.cartIconUrl && (
                  <Link href={"/cart"}>
                    <FaCartShopping className="text-blue-500 w-6 h-6" />
                  </Link>
                )}
                {product.lDress.eyeIconUrl && (
                  <FaEye className="text-blue-600 w-6 h-6" />
                )}
              </div>
            </section>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}