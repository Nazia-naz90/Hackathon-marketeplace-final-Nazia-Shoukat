// page.tsx (Client Component)
"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, loadCartFromLocalStorage } from "../../../../store/cartSlice";
import { useRouter } from "next/navigation";
import PaymentForm from "../paymentForm/page"; // Path to your PaymentForm component
import Stripe from "stripe";

// Load Stripe publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// Function to create a Payment Intent
async function createPaymentIntent(amount: number) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    throw new Error("Stripe secret key is not defined. Please check your environment variables.");
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2025-01-27.acacia", // Use the correct API version
  });

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.error("Error creating Payment Intent:", error);
    throw error;
  }
}

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const cartItems = useSelector((state: any) => state.cart.items);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [vatAmount, setVatAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  // Calculate total and VAT
  const calculateTotal = (items: any[]) =>
    items.reduce((total: number, item: any) => total + item.price * item.quantity, 0);

  const calculateTax = (total: number) => total * 0.15;

  useEffect(() => {
    console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY); // Debug log
    console.log("Stripe Publishable Key:", process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY); // Debug log

    dispatch(loadCartFromLocalStorage());

    const calculatedTotal = calculateTotal(cartItems);
    const taxAmount = calculateTax(calculatedTotal);
    const totalWithTax = calculatedTotal + taxAmount;

    setTotalAmount(totalWithTax);
    setVatAmount(taxAmount);

    createPaymentIntent(totalWithTax)
      .then((res) => {
        setClientSecret(res.clientSecret);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error("Payment Intent Error:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, [cartItems, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!clientSecret) return <div>Payment cannot be processed.</div>;

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h1 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-green-600 ml-10 md:ml-40">
        Payment
      </h1>
      <div className="mb-10">
        <p className="text-blue-600 ml-10 md:ml-40">
          Subtotal: ${(totalAmount - vatAmount).toFixed(2)}
        </p>
        <p className="text-blue-600 ml-10 md:ml-40">VAT (15%): ${vatAmount.toFixed(2)}</p>
        <p className="text-green-600 font-bold ml-10 md:ml-40">
          Total: ${totalAmount.toFixed(2)}
        </p>
      </div>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <PaymentForm clientSecret={clientSecret} />
      </Elements>
    </div>
  );
}




// // page.tsx (Client Component)
// "use client";

// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { useDispatch, useSelector } from "react-redux";
// import { clearCart, loadCartFromLocalStorage } from "../../../../store/cartSlice";
// import { createPaymentIntent } from "./action"; // Path to your action.ts file
// import { useRouter } from "next/navigation";
// import PaymentForm from "../paymentForm/page"; // Path to your PaymentForm component

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// export default function CheckoutPage() {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [clientSecret, setClientSecret] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const cartItems = useSelector((state: any) => state.cart.items);
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [vatAmount, setVatAmount] = useState<number>(0);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     dispatch(loadCartFromLocalStorage());

//     const calculatedTotal = calculateTotal(cartItems);
//     const taxAmount = calculateTax(calculatedTotal);
//     const totalWithTax = calculatedTotal + taxAmount;

//     setTotalAmount(totalWithTax);
//     setVatAmount(taxAmount);

//     createPaymentIntent(totalWithTax)
//       .then((res) => {
//         setClientSecret(res.clientSecret);
//         setIsLoading(false);
//         setError(null); // Clear any previous errors
//       })
//       .catch((err) => {
//         console.error("Payment Intent Error:", err);
//         setError(err.message); // Set the error message
//         setIsLoading(false);
//       });
//   }, [cartItems, dispatch, router]); // Make sure router is in the dependency array

//   const calculateTotal = (items: any[]) =>
//     items.reduce((total: number, item: any) => total + item.price * item.quantity, 0);

//   const calculateTax = (total: number) => total * 0.15;

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!clientSecret) return <div>Payment cannot be processed.</div>;

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto" }}>
//       <h1 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-green-600 ml-10 md:ml-40">
//         Payment
//       </h1>
//       <div className="mb-10">
//         <p className="text-blue-600 ml-10 md:ml-40">
//           Subtotal: ${totalAmount - vatAmount}
//         </p>
//         <p className="text-blue-600 ml-10 md:ml-40">VAT (15%): ${vatAmount}</p>
//         <p className="text-green-600 font-bold ml-10 md:ml-40">Total: ${totalAmount}</p>
//       </div>
//       <Elements stripe={stripePromise} options={{ clientSecret }}>
//         <PaymentForm clientSecret={clientSecret} />
//       </Elements>
//     </div>
//   );
// }



// "use client";

// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useDispatch, useSelector } from "react-redux";
// import { clearCart, loadCartFromLocalStorage } from "../../../../store/cartSlice";
// import { createPaymentIntent } from "./action";
// import { useRouter } from "next/navigation";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// export default function CheckoutPage() {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [clientSecret, setClientSecret] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const cartItems = useSelector((state: any) => state.cart.items);
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [vatAmount, setVatAmount] = useState<number>(0);
//   const [error, setError] = useState<string | null>(null); // State for errors

//   useEffect(() => {
//     dispatch(loadCartFromLocalStorage()); // Load cart directly

//     const calculatedTotal = calculateTotal(cartItems);
//     const taxAmount = calculateTax(calculatedTotal);
//     const totalWithTax = calculatedTotal + taxAmount;

//     setTotalAmount(totalWithTax);
//     setVatAmount(taxAmount);

//     createPaymentIntent(totalWithTax)
//       .then((res) => {
//         setClientSecret(res.clientSecret);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error("Payment Intent Error:", err);
//         setError("Error creating payment intent. Please try again later."); // Set error message
//         setIsLoading(false);
//       });
//   }, [cartItems, dispatch]);

//   const calculateTotal = (items: any[]) => {
//     return items.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
//   };

//   const calculateTax = (total: number) => total * 0.15;

//   if (isLoading) {
//     return <div>Loading...</div>; // Show loading while fetching client secret
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Display error message if any
//   }

//   if (!clientSecret) {
//     return <div>Payment cannot be processed at the moment. Please try again later.</div>;
//   }

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto" }}>
//       {/* ... (Your title and amount display remain the same) */}
//       <Elements stripe={stripePromise} options={{ clientSecret }}>
//         <PaymentForm clientSecret={clientSecret} /> {/* Pass clientSecret as prop */}
//       </Elements>
//     </div>
//   );
// }

// function PaymentForm({ clientSecret }: { clientSecret: string }) { // Receive clientSecret as prop
//   const stripe = useStripe();
//   const elements = useElements();
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!stripe || !elements || !clientSecret) return; // Check clientSecret here too

//     setIsProcessing(true);
//     setErrorMessage(null); // Clear any previous errors

//     try {
//       const { error } = await stripe.confirmPayment({
//         elements,
//         confirmParams: {
//           return_url: `${window.location.origin}/success`, // Or your actual success URL
//         },
//       });

//       if (error) {
//         setErrorMessage(error.message || "Payment failed. Please try again.");
//       } else {
//         dispatch(clearCart());
//         alert("Payment successful!");
//         router.push("/success");
//       }
//     } catch (err) {
//       console.error("Payment Error:", err);
//       setErrorMessage("An error occurred during payment. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };


//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement /> {/* Removed invalid options */}
//       <button
//         type="submit"
//         disabled={!stripe || isProcessing || !clientSecret} // Disable if clientSecret is missing
//         className="mt-10 bg-yellow-600 py-3 px-4 text-white w-full"
//       >
//         {isProcessing ? "Processing..." : "Pay Now"}
//       </button>
//       {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
//     </form>
//   );
// }







// "use client"; // Yeh directive ensure karta hai ke component client side par hi run ho.

// import React, { useState, useEffect, useRef } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useDispatch, useSelector } from "react-redux";
// import { clearCart, loadCartFromLocalStorage } from "../../../../store/cartSlice"; // Redux cartSlice se actions import karo
// import { createPaymentIntent } from "./action"; // Server-side action for PaymentIntent
// import { useRouter } from "next/navigation";

// // Stripe ko public key se initialize karo
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// export default function CheckoutPage() {
//   const dispatch = useDispatch();

//   const [clientSecret, setClientSecret] = useState<string | null>(null); // Client secret store karega
//   const [isLoading, setIsLoading] = useState(true); // Loading state dikhane ke liye
//   const cartItems = useSelector((state: any) => state.cart.items); // Redux state se cart items get karo
//   const [totalAmount, setTotalAmount] = useState<number>(0); // Cart ka total amount store karega
//   const [vatAmount, setVatAmount] = useState<number>(0); // VAT amount store karega

//   const hasLoadedRef = useRef(false); // Ref to track if cart has been loaded

//   useEffect(() => {
//     // Agar cart empty hai, toh localStorage se cart load karo
//     if (!hasLoadedRef.current && cartItems.length === 0) {
//       dispatch(loadCartFromLocalStorage());
//       hasLoadedRef.current = true; // Mark as loaded
//     }

//     // Cart items se total price aur VAT calculate karo
//     const calculatedTotal = calculateTotal(cartItems);
//     const taxAmount = calculateTax(calculatedTotal); // 15% VAT calculate karo
//     const totalWithTax = calculatedTotal + taxAmount; // Total mein VAT add karo

//     setTotalAmount(totalWithTax);
//     setVatAmount(taxAmount);

//     // Server se PaymentIntent create karo
//     createPaymentIntent(totalWithTax)
//       .then((res) => {
//         setClientSecret(res.clientSecret); // Client secret ko state mein save karo
//         setIsLoading(false); // PaymentIntent create hone par loading stop karo
//       })
//       .catch((error) => {
//         console.error("Error creating payment intent:", error);
//         setIsLoading(false); // Error hone par bhi loading stop karo
//       });
//   }, [cartItems, dispatch]); // Yeh effect cartItems change hone par run hoga

//   // Cart items ka total price calculate karo
//   const calculateTotal = (items: any[]) => {
//     return items.reduce((total: number, item: any) => {
//       return total + item.price * item.quantity; // Har item ka price aur quantity multiply karo
//     }, 0);
//   };

//   // 15% VAT calculate karo
//   const calculateTax = (total: number) => {
//     return total * 0.15; // 15% VAT
//   };

//   // Agar client secret load nahi hua hai, toh loading message dikhao
//   if (isLoading || !clientSecret) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto" }} >
//       <h1 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-green-600 ml-10 md:ml-40">Payment</h1>
//       {/* Total Amount aur VAT Amount dikhao */}
//       <div className="mb-10">
//         <p className="text-blue-600 ml-10 md:ml-40">Subtotal: ${totalAmount - vatAmount}</p>
//         <p className="text-blue-600 ml-10 md:ml-40">VAT (15%): ${vatAmount}</p>
//         <p className="text-green-600 font-bold ml-10 md:ml-40">Total: ${totalAmount}</p>
//       </div>
//       {/* Stripe Elements ke sath payment form wrap karo */}
//       <Elements stripe={stripePromise} options={{ clientSecret }}>
//         <PaymentForm />
//       </Elements>
//     </div>
//   );
// }

// function PaymentForm() {
//   const stripe = useStripe(); // Stripe methods access karne ke liye
//   const elements = useElements(); // Stripe elements access karne ke liye
//   const dispatch = useDispatch(); // Redux actions dispatch karne ke liye
//   const router = useRouter(); // Programmatically navigate karne ke liye
//   const [isProcessing, setIsProcessing] = useState(false); // Payment process ke time loading state manage karega
//   const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error messages dikhane ke liye

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault(); // Form submit hone par page refresh rokna

//     if (!stripe || !elements) return; // Stripe load hone ka wait karo

//     setIsProcessing(true); // Payment process start hone par loading dikhao

//     // Payment confirm karne ka attempt karo
//     const { error } = await stripe.confirmPayment({
//       elements,
//       redirect: "if_required", // Payment method ke hisab se redirect karo
//     });

//     if (error) {
//       setErrorMessage(error.message || "An unknown error occurred"); // Payment fail hone par error message dikhao
//       setIsProcessing(false);
//     } else {
//       // Payment successful
//       setErrorMessage(null);
//       alert("Payment successful!"); // User ko notify karo

//       // Payment successful hone par cart clear karo
//       dispatch(clearCart()); // Redux cart clear karo

//       setIsProcessing(false);

//       // User ko success page par redirect karo
//       router.push("/success"); 
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* Stripe ka payment element (card details input fields handle karega) */}
//         <PaymentElement />
//         <button
//           type="submit"
//           disabled={!stripe || isProcessing}
//           className="mt-10 bg-yellow-600 py-3 px-4 text-white w-full"
//         >
//           {isProcessing ? "Processing..." : "Pay Now"} {/* Button ka text dynamic rakho */}
//         </button>
//         {/* Error message dikhao agar error ho */}
//         {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
//       </form>
      
//     </div>
//   );
// }







// "use client"; // This directive ensures the component runs only on the client side in a Next.js app.

// import React, { useState, useEffect, useRef } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useDispatch, useSelector } from "react-redux";
// import { clearCart, loadCartFromLocalStorage } from "../../../../store/cartSlice"; // Assuming you have this action in your cartSlice
// import { createPaymentIntent } from "./action"; // Update this path as per your setup
// import { useRouter } from "next/navigation";

// // Initialize Stripe with the public key from environment variables
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// export default function CheckoutPage() {
//   const dispatch = useDispatch();

//   const [clientSecret, setClientSecret] = useState<string | null>(null); // For storing client secret
//   const [isLoading, setIsLoading] = useState(true); // For showing loading state
//   const cartItems = useSelector((state: any) => state.cart.items); // Getting cart items from Redux state
//   const [totalAmount, setTotalAmount] = useState<number>(0); // Store the total amount of the cart
//   const [vatAmount, setVatAmount] = useState<number>(0); // For storing calculated VAT amount

//   const hasLoadedRef = useRef(false); // Ref to track if cart has been loaded

//   useEffect(() => {
//     // Load cart from localStorage only once when the cart is empty
//     if (!hasLoadedRef.current && cartItems.length === 0) {
//       dispatch(loadCartFromLocalStorage());
//       hasLoadedRef.current = true; // Mark as loaded
//     }

//     // Calculate the total price and VAT from cart items
//     const calculatedTotal = calculateTotal(cartItems);
//     const taxAmount = calculateTax(calculatedTotal); // 15% VAT calculation
//     const totalWithTax = calculatedTotal + taxAmount; // Add VAT to the total

//     setTotalAmount(totalWithTax);
//     setVatAmount(taxAmount);

//     // Request PaymentIntent from the server
//     createPaymentIntent(totalWithTax)
//       .then((res) => {
//         setClientSecret(res.clientSecret); // Save the client secret to state
//         setIsLoading(false); // Stop loading when the payment intent is created
//       })
//       .catch((error) => {
//         console.error("Error creating payment intent:", error);
//         setIsLoading(false); // Stop loading even if an error occurs
//       });
//   }, [cartItems, dispatch]); // Run this effect only when cartItems changes

//   // Function to calculate the total price of cart items
//   const calculateTotal = (items: any[]) => {
//     return items.reduce((total: number, item: any) => {
//       return total + item.price * item.quantity; // Assuming each item has a price and quantity
//     }, 0);
//   };

//   // Function to calculate 15% VAT
//   const calculateTax = (total: number) => {
//     return total * 0.15; // 15% VAT
//   };

//   // While waiting for the client secret, show a loading message
//   if (isLoading || !clientSecret) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto" }} >
//       <h1 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-green-600 ml-10 md:ml-40">Payment</h1>
//       {/* Display Total Amount and VAT Amount */}
//       <div className="mb-10">
//         <p className="text-blue-600 ml-10 md:ml-40">Subtotal: ${totalAmount - vatAmount}</p>
//         <p className="text-blue-600 ml-10 md:ml-40">VAT (15%): ${vatAmount}</p>
//         <p className="text-green-600 font-bold ml-10 md:ml-40">Total: ${totalAmount}</p>
//       </div>
//       {/* Wrap the payment form inside the Elements provider with Stripe instance and client secret */}
//       <Elements stripe={stripePromise} options={{ clientSecret }}>
//         <PaymentForm />
//       </Elements>
//     </div>
//   );
// }

// function PaymentForm() {
//   const stripe = useStripe(); // Hook to access Stripe methods
//   const elements = useElements(); // Hook to access Stripe elements
//   const dispatch = useDispatch(); // Hook to dispatch Redux actions
//   const router = useRouter(); // Hook to navigate programmatically
//   const [isProcessing, setIsProcessing] = useState(false); // State to manage loading state while processing
//   const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to show error messages

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent page refresh when submitting the form

//     if (!stripe || !elements) return; // Ensure Stripe is loaded before proceeding

//     setIsProcessing(true); // Indicate that the payment is being processed

//     // Attempt to confirm the payment
//     const { error } = await stripe.confirmPayment({
//       elements,
//       redirect: "if_required", // Redirect if required by the payment method
//     });

//     if (error) {
//       setErrorMessage(error.message || "An unknown error occurred"); // Display error message if payment fails
//       setIsProcessing(false);
//     } else {
//       // Payment was successful
//       setErrorMessage(null);
//       alert("Payment successful!"); // Notify the user

//       // Clear the cart after successful payment
//       dispatch(clearCart()); // Dispatch the action to clear the cart in Redux

//       // Optionally clear localStorage (handled inside clearCart action)
//       // localStorage.removeItem("cart");

//       setIsProcessing(false);

//       // Optionally redirect the user to a success page after clearing the cart
//       router.push("/success"); 
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* Stripe's payment element (handles input fields for card details, etc.) */}
//         <PaymentElement />
//         <button
//           type="submit"
//           disabled={!stripe || isProcessing}
//           className="mt-10 bg-yellow-600 py-3 px-4 text-white w-full"
//         >
//           {isProcessing ? "Processing..." : "Pay Now"} {/* Show dynamic button text */}
//         </button>
//         {/* Display any error messages if they occur */}
//         {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
//       </form>
      
//     </div>
//   );
// }
