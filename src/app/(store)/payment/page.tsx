"use client"; // This directive ensures the component runs only on the client side in a Next.js app.
// Install @stripe/stripe-js & @stripe/react-stripe-js
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action";
import { useRouter } from "next/navigation";
import Header from "@/app/components/navbar";


interface OrderData{
  totalPrice:number,
  vat:number,
  totalWithVat:number

}

// Initialize Stripe with the public key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CheckoutPage() {


  // State to store the client secret, which is required for processing the payment
  const [clientSecret, setClientSecret] = useState<string | null>(null);
     
 const[orderData,setOrderData]=useState<OrderData|null>(null)

  useEffect(() => {
    
    // localStorage se order data retrieve karo
   const storedOrderData = window.localStorage.getItem("orderData");
   
   //You can hardcode an amount here, e.g. $20 = 2000 in cents
    const orderData = storedOrderData ? JSON.parse(storedOrderData) : null;
    setOrderData(orderData)
    // When the component mounts, request a new PaymentIntent from the server
    createPaymentIntent(orderData.totalWithVat)
      .then((res) => {
          setClientSecret(res.clientSecret); // Save the client secret to state
      })
  }, []);
  console.log(clientSecret);

  // While waiting for the client secret, show a loading message
  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    
<>
<div>
  <Header/>
<div style={{ maxWidth: 800, margin: "0 auto" }} className="lg:flex items-center justify-between">
     {/* <h1>Checkout</h1> */}
     {/* Order Summary Section */}
     <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 border-2 
     border-gray-300 mt-10 w-[20rem] h-auto">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Order Details</h2>
        <div>
          <p className="mb-2"><strong>Total Price: </strong>${orderData?.totalPrice.toFixed(2)}</p>
          <p className="mb-2"><strong>VAT (15%): </strong>${orderData?.vat}</p>
          <p className="mb-2"><strong>Total with VAT: </strong>${orderData?.totalWithVat}</p>
        </div>
      </div>



      {/* Wrap the payment form inside the Elements provider with Stripe instance and client secret */}
      <div className="flex flex-col border-2 border-gray-300 shadow-lg rounded-md
      w-[20rem] px-4 mt-10">
      <h1 className="text-center text-pink-600 text-2xl font-bold">STRIPE PAYMENT</h1>
      <Elements stripe={stripePromise} 
      options={{ clientSecret }}>
        <PaymentForm />
      </Elements>
      </div>
    </div>
</div>
</>
  );
}

// Component that handles the payment form
function PaymentForm() {
  const stripe = useStripe(); // Hook to access Stripe methods
  const elements = useElements(); // Hook to access Stripe elements
  const [isProcessing, setIsProcessing] = useState(false); // State to manage loading state while processing
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to show error messages
 
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh when submitting the form

    if (!stripe || !elements) return; // Ensure Stripe is loaded before proceeding

    setIsProcessing(true); // Indicate that the payment is being processed

    // Attempt to confirm the payment
    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required", // Redirect if required by the payment method
    });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred"); // Display error message if payment fails
      setIsProcessing(false);
    } else {
      // Payment was successful
      setErrorMessage(null);
      // alert("Payment successful!"); // Notify the user
      router.push("/success");
      setIsProcessing(false);
      // You can optionally redirect the user to a success page here
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      {/* Stripe's payment element (handles input fields for card details, etc.) */}
      <PaymentElement />
      <button type="submit" 
      disabled={!stripe || isProcessing} className="w-[18rem] h-[45px] bg-green-600 text-white font-bold rounded-md">
        {isProcessing ? "Processing..." : "Pay Now"} {/* Show dynamic button text */}
      </button>
      {/* Display any error messages if they occur */}
      {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
    </form>
  );
}