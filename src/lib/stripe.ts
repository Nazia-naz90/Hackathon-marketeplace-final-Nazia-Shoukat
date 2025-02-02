// import { loadStripe } from "@stripe/stripe-js";

// const getStripePromise = () => {
//   const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
//   if (!stripeKey) {
//     console.error("Stripe publishable key is missing!");
//   }
//   return loadStripe(stripeKey);
// };

// export default getStripePromise;


// import { loadStripe } from "@stripe/stripe-js";

// const getStripePromise = () => {
//   const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
//   return loadStripe(stripeKey);
// };

// export default getStripePromise;


// import { Stripe, loadStripe } from "@stripe/stripe-js";

// let stripePromise: Promise<Stripe | null>;

// const getStipePromise = () => {
//   const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";

//   if (!stripePromise && !!key) {
//     stripePromise = loadStripe(key);
//   }
//   return stripePromise;
// };

// export default getStipePromise;