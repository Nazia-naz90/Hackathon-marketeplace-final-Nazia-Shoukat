
// paymentForm/page.tsx (Client Component - Assuming this is the path)
"use client";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../../store/cartSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PaymentFormProps {
  clientSecret: string;
}

function PaymentForm({ clientSecret }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`, // Replace with your actual URL
        },
      });

      if (error) {
        setErrorMessage(error.message || "Payment failed. Please try again.");
      } else {
        dispatch(clearCart());
        alert("Payment successful!");
        router.push("/success"); // Or your success route
      }
    } catch (err) {
      console.error("Payment Error:", err);
      setErrorMessage("An error occurred during payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || isProcessing || !clientSecret}
        className="mt-10 bg-yellow-600 py-3 px-4 text-white w-full"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {errorMessage && (
        <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>
      )}
    </form>
  );
}

export default PaymentForm;

// PaymentForm.tsx
// "use client";

// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useDispatch } from "react-redux";
// import { clearCart } from "../../../../store/cartSlice";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// interface PaymentFormProps {
//   clientSecret: string;
// }

// function PaymentForm({ clientSecret }: PaymentFormProps) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!stripe || !elements || !clientSecret) return;

//     setIsProcessing(true);
//     setErrorMessage(null);

//     try {
//       const { error } = await stripe.confirmPayment({
//         elements,
//         confirmParams: {
//           return_url: `${window.location.origin}/success`, // Replace with your success URL
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
//       <CardElement />
//       <button
//         type="submit"
//         disabled={!stripe || isProcessing || !clientSecret}
//         className="mt-10 bg-yellow-600 py-3 px-4 text-white w-full"
//       >
//         {isProcessing ? "Processing..." : "Pay Now"}
//       </button>
//       {errorMessage && (
//         <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>
//       )}
//     </form>
//   );
// }

// export default PaymentForm;