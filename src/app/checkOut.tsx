// "use client";
// import { useState } from "react";
// import getStripePromise from "./lib/stripe";

// const StripeCheckOutButton = ({ cart }: { cart: any[] }) => {
//   const [error, setError] = useState<string | null>(null);

//   const handleCheckout = async () => {
//     console.log("Checkout button clicked");
//     const stripe = await getStripePromise();

//     if (!stripe) {
//       setError("Stripe.js failed to load. Please try again.");
//       return;
//     }

//     try {
//       const response = await fetch("/api/stripe-session/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         cache: "no-cache",
//         body: JSON.stringify(cart),
//       });

//       const data = await response.json();
//       console.log("Stripe session response:", data);

//       if (data.session) {
//         const { error } = await stripe.redirectToCheckout({
//           sessionId: data.session.id,
//         });

//         if (error) {
//           console.error("Stripe redirect error:", error);
//           setError("Failed to redirect to Stripe checkout. Please try again.");
//         }
//       } else {
//         setError("No session found in response");
//       }
//     } catch (error: any) {
//       console.error("Error during checkout:", error);
//       setError("An error occurred during checkout. Please try again.");
//     }
//   };

//   return (
//     <div className="py-5">
//       <button
//         className="bg-green-500 py-3 px-3 rounded-md text-white hover:bg-green-600"
//         onClick={handleCheckout}
//       >
//         Check out
//       </button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default StripeCheckOutButton;




// "use client";
// import { useState } from "react";
// import getStripePromise from "./lib/stripe";

// const StripeCheckOutButton = ({ cart }: { cart: any[] }) => {
//   const [error, setError] = useState<string | null>(null);

//   const handleCheckout = async () => {
//     console.log("Checkout button clicked");
//     const stripe = await getStripePromise();

//     try {
//       const response = await fetch("/api/stripe-session/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         cache: "no-cache",
//         body: JSON.stringify(cart),
//       });

//       const data = await response.json();
//       console.log("Stripe session response:", data);

//       if (data.session) {
//         stripe?.redirectToCheckout({ sessionId: data.session.id });
//       } else {
//         setError("No session found in response");
//       }
//     } catch (error: any) {
//       console.error("Error during checkout:", error);
//       setError("An error occurred during checkout. Please try again.");
//     }
//   };

//   return (
//     <div className="py-5">
//       <button
//         className="bg-green-500 py-3 px-3 rounded-md text-white hover:bg-green-600"
//         onClick={handleCheckout}
//       >
//         Check out
//       </button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default StripeCheckOutButton;


// "use client";
// import getStripePromise from "./lib/stripe";

// const StripeCheckOutButton = ({ cart }: { cart: any[] }) => {
//   const handleCheckout = async () => {
//     const stripe = await getStripePromise();
//     const response = await fetch("/api/stripe-session/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       cache: "no-cache",
//       body: JSON.stringify(cart), // Cart data ko Stripe ke sath process karen
//     });

//     const data = await response.json();
//     if (data.session) {
//       stripe?.redirectToCheckout({ sessionId: data.session.id });
//     }
//   };

//   return (
//     <div className="py-5">
//       <button
//         className="bg-green-500 py-3 px-3 rounded-md"
//         onClick={handleCheckout}
//       >
//         Check out
//       </button>
//     </div>
//   );
// };

// export default StripeCheckOutButton;