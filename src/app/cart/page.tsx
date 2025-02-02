"use client";
import Image from "next/image";
import { useCart } from "@/app/components/CartContext";
import Header from "../components/navbar";
import { IoCheckbox } from "react-icons/io5";
import Link from "next/link";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = () =>
    cart.reduce(
      (total: number, item: { price: number; quantity: number }) =>
        total + item.price * item.quantity,
      0
    );

  // Convert cart data to a URL-friendly string
  const cartData = encodeURIComponent(JSON.stringify(cart));

  return (
    <>
      <Header />
      <div className="p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-bold my-6 text-center hover:underline text-myDarkOrange text-red-500 shadow-red-800 text-shadow-lg">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <p className="text-lg sm:text-xl font-semibold text-center text-green-500 text-shadow-lg shadow-green-700">
            Your Cart is Empty
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map(
              (item: {
                id: string;
                image: string;
                heading: string;
                price: number;
                quantity: number;
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
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <p className="font-bold text-gray-800 text-sm sm:text-base">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 border rounded hover:bg-gray-200 text-sm sm:text-base"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 border rounded hover:bg-gray-200 text-sm sm:text-base"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm sm:text-base"
                  >
                    Remove
                  </button>
                </div>
              )
            )}
            <div className="text-right font-bold text-lg sm:text-xl mt-4">
              Total: ${calculateTotal().toFixed(2)}
            </div>
            <div className="flex gap-2 mt-4">
              <IoCheckbox className="text-[#19D16F]" />
              <p className="text-[#8A91AB] text-[10px]">
                Shipping & taxes calculated at checkout
              </p>
            </div>
            <Link
              href={`/cart/checkout?cart=${cartData}`} // Pass cart data as a URL parameter
              className="h-[40px] w-full bg-[#19D16F] mt-4 hover:bg-[#19D16F] text-white flex items-center justify-center"
            >
              Proceed To Checkout
            </Link>
            <Link
              href="/"
              className="inline-block bg-[#FB2E86] text-white font-medium py-2 px-4 rounded-md text-lg md:text-xl lg:text-2xl hover:bg-[#cf4450] transition duration-300 mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;






// app/cart/page.tsx (Client Component)
// "use client";

// import Image from "next/image";
// import { useCart } from "@/app/components/CartContext";
// import Header from "../components/navbar";
// import { IoCheckbox } from "react-icons/io5";
// import Link from "next/link";

// const CartPage = () => {
//   const { cart, updateQuantity, removeFromCart } = useCart();

//   const calculateTotal = () =>
//     cart.reduce(
//       (total: number, item: { price: number; quantity: number }) =>
//         total + item.price * item.quantity,
//       0
//     );

//   // Convert cart data to a URL-friendly string
//   const cartData = encodeURIComponent(JSON.stringify(cart));

//   return (
//     <>
//       <Header />
//       <div className="p-4 sm:p-8">
//         <h1 className="text-2xl sm:text-4xl font-bold my-6 text-center hover:underline text-myDarkOrange text-red-500 shadow-red-800 text-shadow-lg">
//           Your Cart
//         </h1>
//         {cart.length === 0 ? (
//           <p className="text-lg sm:text-xl font-semibold text-center text-green-500 text-shadow-lg shadow-green-700">
//             Your Cart is Empty
//           </p>
//         ) : (
//           <div className="space-y-6">
//             {cart.map(
//               (item: {
//                 id: string;
//                 image: string;
//                 heading: string;
//                 price: number;
//                 quantity: number;
//               }) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-col md:flex-row items-center border p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-6"
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.heading}
//                     width={80}
//                     height={80}
//                     className="object-cover rounded-md w-20 h-20 sm:w-24 sm:h-24"
//                   />
//                   <div className="flex-1 text-center md:text-left">
//                     <h2 className="font-semibold text-base sm:text-lg">
//                       {item.heading}
//                     </h2>
//                     <p className="text-gray-600 text-sm sm:text-base">
//                       ${item.price.toFixed(2)} x {item.quantity}
//                     </p>
//                     <p className="font-bold text-gray-800 text-sm sm:text-base">
//                       Total: ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       className="px-3 py-1 border rounded hover:bg-gray-200 text-sm sm:text-base"
//                     >
//                       -
//                     </button>
//                     <span className="text-lg font-medium">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       className="px-3 py-1 border rounded hover:bg-gray-200 text-sm sm:text-base"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm sm:text-base"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               )
//             )}
//             <div className="text-right font-bold text-lg sm:text-xl mt-4">
//               Total: ${calculateTotal().toFixed(2)}
//             </div>
//             <div className="flex gap-2 mt-4">
//               <IoCheckbox className="text-[#19D16F]" />
//               <p className="text-[#8A91AB] text-[10px]">
//                 Shipping & taxes calculated at checkout
//               </p>
//             </div>
//             <Link
//               href={`/cart/checkout?cart=${cartData}`} // Pass cart data as a URL parameter
//               className="h-[40px] w-full bg-[#19D16F] mt-4 hover:bg-[#19D16F]
//                text-white flex items-center justify-center"
//             >
//               Proceed To Checkout
//             </Link>
//             <Link
//               href="/"
//               className="inline-block bg-[#FB2E86] text-white font-medium py-2 px-4 rounded-md text-lg md:text-xl lg:text-2xl hover:bg-[#cf4450] transition duration-300 mt-4"
//             >
//               Continue Shopping
//             </Link>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartPage;






// // app/cart/page.tsx (Client Component)
// "use client";

// import Image from "next/image";
// import { useCart } from "@/app/components/CartContext";
// import Header from "../components/navbar";
// import { IoCheckbox } from "react-icons/io5"; // Import the IoCheckbox icon
// import Link from "next/link";

// const CartPage = () => {
//   const { cart, updateQuantity, removeFromCart } = useCart();

//   const calculateTotal = () =>
//     cart.reduce(
//       (total: number, item: { price: number; quantity: number }) =>
//         total + item.price * item.quantity,
//       0
//     );

//   return (
//     <>
//       <Header />
//       <div className="p-4 sm:p-8">
//         <h1 className="text-2xl sm:text-4xl font-bold my-6 text-center hover:underline text-myDarkOrange text-red-500 shadow-red-800 text-shadow-lg">
//           Your Cart
//         </h1>
//         {cart.length === 0 ? (
//           <p className="text-lg sm:text-xl font-semibold text-center text-green-500 text-shadow-lg shadow-green-700">
//             Your Cart is Empty
//           </p>
//         ) : (
//           <div className="space-y-6">
//             {cart.map(
//               (item: {
//                 id: string;
//                 image: string;
//                 heading: string;
//                 price: number;
//                 quantity: number;
//               }) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-col md:flex-row items-center border p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-6"
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.heading}
//                     width={80}
//                     height={80}
//                     className="object-cover rounded-md w-20 h-20 sm:w-24 sm:h-24"
//                   />
//                   <div className="flex-1 text-center md:text-left">
//                     <h2 className="font-semibold text-base sm:text-lg">
//                       {item.heading}
//                     </h2>
//                     <p className="text-gray-600 text-sm sm:text-base">
//                       ${item.price.toFixed(2)} x {item.quantity}
//                     </p>
//                     <p className="font-bold text-gray-800 text-sm sm:text-base">
//                       Total: ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       className="px-3 py-1 border rounded hover:bg-gray-200 text-sm sm:text-base"
//                     >
//                       -
//                     </button>
//                     <span className="text-lg font-medium">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       className="px-3 py-1 border rounded hover:bg-gray-200 text-sm sm:text-base"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="px-4 py-2 bg-red-500 text-white rounded
//                     hover:bg-red-600 text-sm sm:text-base"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               )
//             )}
//             <div className="text-right font-bold text-lg sm:text-xl mt-4">
//               Total: ${calculateTotal().toFixed(2)}
//             </div>
//             <div className="flex gap-2 mt-4">
//               <IoCheckbox className="text-[#19D16F]" />
//               <p className="text-[#8A91AB] text-[10px]">
//                 Shipping & taxes calculated at checkout
//               </p>
//             </div>
//             <button
//               className="h-[40px] w-full bg-[#19D16F] mt-4 hover:bg-[#19D16F]
//               text-white"
//             >
//               <Link href={"/cart/checkOut"}>Proceed To Checkout</Link>
//             </button>
//             <Link
//               href="/"
//               className="inline-block bg-[#FB2E86] text-white font-medium py-2 px-4 rounded-md text-lg md:text-xl lg:text-2xl hover:bg-[#cf4450] transition duration-300 mt-4"
//             >
//               Continue Shopping
//             </Link>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartPage;

// app/cart/page.tsx (Client Component)
// "use client";

// import Image from "next/image";
// import { useCart } from "@/app/components/CartContext";
// import Header from "../components/navbar";

// const CartPage = () => {
//   const { cart, updateQuantity, removeFromCart } = useCart();

//   const calculateTotal = () =>
//     cart.reduce((total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity, 0);

//   return (
// <>
// <Header/>
// <div className="p-4 sm:p-8">
//       <h1 className="text-2xl sm:text-4xl font-bold my-6 text-center
//        hover:underline text-myDarkOrange text-red-500 shadow-red-800
//        text-shadow-lg">
//         Your Cart
//       </h1>
//       {cart.length === 0 ? (
//         <p className="text-lg sm:text-xl font-semibold text-center
//          text-green-500 text-shadow-lg shadow-green-700">
//           Your Cart is Empty
//         </p>
//       ) : (
//         <div className="space-y-6">
//           {cart.map((item: {
//             id: string;
//             image: string;
//             heading: string;
//             price: number;
//             quantity: number
//           }) => (
//             <div
//               key={item.id}
//               className="flex flex-col md:flex-row items-center border p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-6"
//             >
//               <Image
//                 src={item.image}
//                 alt={item.heading}
//                 width={80}
//                 height={80}
//                 className="object-cover rounded-md w-20 h-20 sm:w-24 sm:h-24"
//               />
//               <div className="flex-1 text-center md:text-left">
//                 <h2 className="font-semibold text-base sm:text-lg">
//                   {item.heading}
//                 </h2>
//                 <p className="text-gray-600 text-sm sm:text-base">
//                   ${item.price.toFixed(2)} x {item.quantity}
//                 </p>
//                 <p className="font-bold text-gray-800 text-sm sm:text-base">
//                   Total: ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                   className="px-3 py-1 border rounded hover:bg-gray-200 text-sm sm:text-base"
//                 >
//                   -
//                 </button>
//                 <span className="text-lg font-medium">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   className="px-3 py-1 border rounded hover:bg-gray-200 text-sm sm:text-base"
//                 >
//                   +
//                 </button>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded
//                  hover:bg-red-600 text-sm sm:text-base"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="text-right font-bold text-lg sm:text-xl mt-4">
//             Total: ${calculateTotal().toFixed(2)}
//           </div>
//         </div>
//       )}
//     </div>

// </>

//       );
// };

// export default CartPage;
