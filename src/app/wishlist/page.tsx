// app/wishlist/page.tsx (Client Component)
"use client";

import Image from "next/image";
import { useCart } from "@/app/components/CartContext";
import Header from "../components/navbar";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useCart();

  return (
<>
<Header/>
<div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-4xl font-bold my-6 text-center
      text-red-500 shadow-red-700 text-shadow-lg
      hover:underline text-myDarkOrange">
        Your Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <p className="text-lg sm:text-xl font-semibold text-center
        text-green-500 text-shadow-lg shadow-green-700">
          Your Wishlist is Empty
        </p>
      ) : (
        <div className="space-y-6">
          {wishlist.map((item: { 
            id: string; 
            image: string; 
            heading: string; 
            price: number; 
          }) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center border p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-6"
            >
              <Image
                src={item.image}
                alt={item.heading}
                width={80}
                height={80}
                className="object-cover rounded-md w-20 h-20 sm:w-24 sm:h-24"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-semibold text-base sm:text-lg">
                  {item.heading}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm sm:text-base"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
</>
  );
};

export default WishlistPage;