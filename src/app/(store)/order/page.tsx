"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/components/CartContext"; // Import your CartContext

interface OrderFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export default function OrderPage() {
  const { cart } = useCart(); // Get cart data from CartContext
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();

  // Calculate total price from cart
  const totalPrice = cart.reduce(
    (total: number, item: { price: number; quantity: number }) =>
      total + item.price * item.quantity,
    0
  );

  // Calculate VAT (15%)
  const vat = (totalPrice * 0.15).toFixed(2);

  // Calculate total with VAT
  const totalWithVat = (totalPrice + parseFloat(vat)).toFixed(2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare order data to be passed to the order-summary page
      const orderData = {
        ...formData,
        totalPrice,
        vat: parseFloat(vat),
        totalWithVat: parseFloat(totalWithVat),
      };

      // Save the order data to localStorage
      localStorage.setItem("orderData", JSON.stringify(orderData));
      console.log("Order data saved to localStorage:", orderData);

      // Redirect to the order-summary page
      router.push("/order-summary");
    } catch (error) {
      console.error("Error submitting order data: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl p-6 mx-auto">
      
       <div className="flex flex-col border-2 border-gray-300 shadow-lg w-[40rem] mx-auto px-5" >
       <h1 className="text-3xl font-bold mb-8 text-center text-green-500">Shipping Information</h1>
       <form onSubmit={handleSubmit} className="space-y-6 ">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-yellow-600 text-white w-full py-3 mt-6 rounded-lg shadow-md hover:bg-yellow-700"
          >
            {isSubmitting ? "Submitting..." : "Place Order"}
          </button>
        </div>
      </form>
       </div>

    </div>
  );
}







// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { client } from "../../../sanity/lib/client";
// import { useCart } from "@/app/components/CartContext"; // Import your CartContext

// interface OrderFormData {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   address: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country: string;
// }

// export default function OrderPage() {
//   const { cart } = useCart(); // Get cart data from CartContext
//   const [formData, setFormData] = useState<OrderFormData>({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const router = useRouter();

//   // Calculate total price from cart
//   const totalPrice = cart.reduce(
//     (total: number, item: { price: number; quantity: number }) =>
//       total + item.price * item.quantity,
//     0
//   );

//   // Calculate VAT (15%)
//   const vat = (totalPrice * 0.15).toFixed(2);

//   // Calculate total with VAT
//   const totalWithVat = (totalPrice + parseFloat(vat)).toFixed(2);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Submit form data to Sanity
//       const createdOrder = await client.create({
//         _type: "order", // Ensure this matches your Sanity schema
//         ...formData,
//         totalPrice,
//         vat: parseFloat(vat),
//         totalWithVat: parseFloat(totalWithVat),
//       });

//       console.log("Order created in Sanity! Order ID:", createdOrder._id);

//       // Save the orderId to localStorage
//       localStorage.setItem("orderId", createdOrder._id);
//       console.log("Order ID saved to localStorage:", createdOrder._id);

//       // Redirect to order summary page
//       router.push("/order-summary");
//     } catch (error) {
//       console.error("Error submitting order data to Sanity: ", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
//       {/* Order Form */}
//       <div className="flex-1">
//         <h1 className="text-3xl font-bold mb-8 text-center">Shipping Information</h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Full Name */}
//           <div>
//             <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//           </div>

//           {/* City */}
//           <div>
//             <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//               City
//             </label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//           </div>

//           {/* State */}
//           <div>
//             <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//               State
//             </label>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//           </div>

//           {/* Postal Code */}
//           <div>
//             <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
//               Postal Code
//             </label>
//             <input
//               type="text"
//               id="postalCode"
//               name="postalCode"
//               value={formData.postalCode}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//           </div>

//           {/* Country */}
//           <div>
//             <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-yellow-600 text-white w-full py-3 mt-6 rounded-lg shadow-md hover:bg-yellow-700"
//             >
//               {isSubmitting ? "Submitting..." : "Place Order"}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Order Summary */}
//       <div className="flex-1 bg-indigo-950 p-6 rounded-lg sticky top-[25vh]">
//         <h1 className="text-center mt-8 mb-8 text-white text-3xl font-semibold">
//           Order Summary
//         </h1>
//         <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>

//         {/* Sub Total */}
//         <div className="flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between">
//           <span>Sub Total</span>
//           <span>${totalPrice.toFixed(2)}</span>
//         </div>

//         {/* VAT */}
//         <div className="flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between">
//           <span>VAT (15%)</span>
//           <span>${vat}</span>
//         </div>

//         {/* Total with VAT */}
//         <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
//         <div className="flex mt-6 mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
//           <span>Total</span>
//           <span>${totalWithVat}</span>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// interface OrderFormData {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   address: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country: string;
// }

// export default function OrderPage() {
//   const [formData, setFormData] = useState<OrderFormData>({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Save form data to localStorage
//     localStorage.setItem("orderData", JSON.stringify(formData));
//     console.log("Form data saved to localStorage:", formData);

//     // Redirect to order summary page
//     router.push("/order-summary");
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8 text-center">Shipping Information</h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Full Name */}
//         <div>
//           <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Phone Number */}
//         <div>
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* City */}
//         <div>
//           <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//             City
//           </label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* State */}
//         <div>
//           <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//             State
//           </label>
//           <input
//             type="text"
//             id="state"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Postal Code */}
//         <div>
//           <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
//             Postal Code
//           </label>
//           <input
//             type="text"
//             id="postalCode"
//             name="postalCode"
//             value={formData.postalCode}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Country */}
//         <div>
//           <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//             Country
//           </label>
//           <input
//             type="text"
//             id="country"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="bg-yellow-600 text-white w-full py-3 mt-6 rounded-lg shadow-md hover:bg-yellow-700"
//           >
//             {isSubmitting ? "Submitting..." : "Place Order"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }




// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { client } from "../../../sanity/lib/client";

// interface OrderFormData {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   address: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country: string;
// }

// export default function OrderPage() {
//   const [formData, setFormData] = useState<OrderFormData>({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [isClient, setIsClient] = useState<boolean>(false);
//   const router = useRouter();

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Create order document in Sanity
//       const createdOrder = await client.create({
//         _type: "order",
//         ...formData,
//       });

//       console.log("Order data submitted successfully!");

//       // Save the orderId to localStorage
//       localStorage.setItem("orderId", createdOrder._id);

//       // Redirect to order summary page
//       router.push("order-summary");
//     } catch (error) {
//       console.error("Error submitting order data to Sanity: ", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isClient) return null;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8 text-center">Shipping Information</h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Full Name */}
//         <div>
//           <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Phone Number */}
//         <div>
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* City */}
//         <div>
//           <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//             City
//           </label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* State */}
//         <div>
//           <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//             State
//           </label>
//           <input
//             type="text"
//             id="state"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Postal Code */}
//         <div>
//           <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
//             Postal Code
//           </label>
//           <input
//             type="text"
//             id="postalCode"
//             name="postalCode"
//             value={formData.postalCode}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Country */}
//         <div>
//           <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//             Country
//           </label>
//           <input
//             type="text"
//             id="country"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="bg-yellow-600 text-white w-full py-3 mt-6 rounded-lg shadow-md
//              hover:bg-yellow-700"
//           >
//             {isSubmitting ? "Submitting..." : "Place Order"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }




// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation"; // Importing useRouter from next/router
// import {client} from "../../../sanity/lib/client"; // Import your Sanity client

// // Define the form data structure
// interface OrderFormData {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   address: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country: string;
// }

// export default function OrderPage() {
//   const [formData, setFormData] = useState<OrderFormData>({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [isClient, setIsClient] = useState<boolean>(false);
//   const router = useRouter();

//   // Ensure client-side rendering
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Create order document in Sanity
//       const createdOrder = await client.create({
//         _type: "order",
//         fullName: formData.fullName,
//         email: formData.email,
//         phoneNumber: formData.phoneNumber,
//         address: formData.address,
//         city: formData.city,
//         state: formData.state,
//         postalCode: formData.postalCode,
//         country: formData.country,
//       });

//       console.log("Order data submitted successfully!");

//        // Save the orderId to localStorage after the order is created
//     localStorage.setItem("orderId", createdOrder._id);

//       // Redirect after successful submission
//       if (isClient) {
//         router.push("/order-summary");
//       }
//     } catch (error) {
//       console.error("Error submitting order data to Sanity: ", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isClient) return null;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8 text-center">Shipping Information</h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Full Name */}
//         <div>
//           <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Phone Number */}
//         <div>
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* City */}
//         <div>
//           <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//             City
//           </label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* State */}
//         <div>
//           <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//             State
//           </label>
//           <input
//             type="text"
//             id="state"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Postal Code */}
//         <div>
//           <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
//             Postal Code
//           </label>
//           <input
//             type="text"
//             id="postalCode"
//             name="postalCode"
//             value={formData.postalCode}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Country */}
//         <div>
//           <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//             Country
//           </label>
//           <input
//             type="text"
//             id="country"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             required
//             className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="bg-yellow-600 text-white w-full py-3 mt-6 rounded-lg shadow-md hover:bg-yellow-700"
//           >
//             {isSubmitting ? "Submitting..." : "Place Order"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
