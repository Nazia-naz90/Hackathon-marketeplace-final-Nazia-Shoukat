"use client";
// import { useSearchParams, useRouter } from "next/navigation";
import {useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action";
import Header from "../../components/navbar";
import Image from "next/image";

// Initialize Stripe with the public key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CheckoutPage({searchParams}:{searchParams:{cart:string}}) {
  // const searchParams = useSearchParams();
  // const cartData = searchParams.get("cart");

  // Parse the cart data from the URL
  //const cart = cartData ? JSON.parse(decodeURIComponent(cartData)) : [];

  const cartData = JSON.parse(searchParams.cart);

  // Calculate the total price
  const calculateTotal = () =>
    cartData.reduce(
      (total: number, item: { price: number; quantity: number }) =>
        total + item.price * item.quantity,
      0
    );

  // State to store the client secret, which is required for processing the payment
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false); // State to control the visibility of the payment form

  useEffect(() => {
    // When the component mounts, request a new PaymentIntent from the server
    const totalAmount: number = calculateTotal() * 100; // Convert total to cents
    createPaymentIntent(totalAmount)
      .then((res) => {
        setClientSecret(res.clientSecret); // Save the client secret to state
      })
      .catch((error) => {
        console.error("Error creating payment intent:", error);
      });
  }, []);

  // While waiting for the client secret, show a loading message
  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl container mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold my-6 text-center text-green-600">
          Checkout
        </h1>
        <div className="flex items-center justify-center p-4 sm:p-8 mx-auto gap-x-10">
          {/* Order Summary */}
          <div className="w-[500px] h-auto px-32 space-y-6 border-2 border-gray-300 shadow-lg rounded-md p-10">
            <h2 className="text-xl font-bold text-pink-500">
              Order Summary</h2>
            {cartData.map(
              (item: {
                id: string;
                heading: string;
                price: number;
                quantity: number;
                image: string;
              }) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4 gap-x-10"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.heading}
                      width={60}
                      height={60}
                      className="object-cover rounded-md w-12 h-12 sm:w-16 sm:h-16"
                    />
                    <div>
                      <p className="font-semibold">{item.heading}</p>
                      <p className="text-sm text-gray-600">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              )
            )}
            <div className="flex justify-between font-bold text-lg sm:text-xl mt-4">
              <p className="text-red-600">Total:</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
          </div>

          {/* Shipping Details and Stripe Checkout */}
          <div className="flex flex-col items-center justify-center w-[500px] border-2 border-gray-300 shadow-lg rounded-md p-10">
            <h2 className="text-xl font-bold text-purple-600">
              Shipping Details</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Shipping Address"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="button"
                onClick={() => setShowPaymentForm(true)}
                className="py-2 px-4 bg-blue-500 text-white rounded"
              >
                Place Order
              </button>
            </form>

            {/* Conditionally render the Stripe Payment Form */}
            {showPaymentForm && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Component that handles the payment form
function PaymentForm() {
  const router = useRouter();
  const stripe = useStripe(); // Hook to access Stripe methods
  const elements = useElements(); // Hook to access Stripe elements
  const [isProcessing, setIsProcessing] = useState(false); // State to manage loading state while processing
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to show error messages

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
      alert("Payment successful!"); // Notify the user
      setIsProcessing(false);
      
      router.push("shipment"); // Redirect to shipment page
    }
  };

  return (
    <div className="w-full">
      <PaymentElement />
      <button
        className="py-4 px-6 bg-green-600 text-white mt-10 w-full"
        type="submit"
        onClick={handleSubmit}
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
    </div>
  );
}


