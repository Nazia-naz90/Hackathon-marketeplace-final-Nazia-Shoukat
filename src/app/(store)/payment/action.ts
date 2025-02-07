"use server";

import Stripe from "stripe";

export async function createPaymentIntent() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia", // or the latest stable version
  });
  try {
    // You can hardcode an amount here, e.g. $20 = 2000 in cents
    const amount = 2000; // USD 20.00

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      // Optionally, you can add metadata or other parameters
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    // In a real app, you should handle the error properly
    console.error(error);
    throw error;
  }
}




// action.ts (Server Component)
// "use server";

// import Stripe from "stripe";

// export async function createPaymentIntent(cartTotal: number) {
//   try {
//     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//       apiVersion: "2025-01-27.acacia", // Or latest stable version
//     });

//     const amount = Math.round(cartTotal * 100); // Amount in cents, rounded

//     // Check minimum amount (USD example - adjust for your currency)
//     const minimumAmount = 50; // 50 cents
//     if (amount < minimumAmount) {
//       throw new Error(`Amount must be at least ${minimumAmount / 100} USD.`);
//     }


//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: "usd", // Or "pkr"
//       automatic_payment_methods: { enabled: true },
//     });

//     return { clientSecret: paymentIntent.client_secret };
//   } catch (error: any) {
//     console.error("Error creating payment intent:", error);
//     if (error.raw && error.raw.message) {
//       throw new Error(error.raw.message);
//     } else if (error.message) {
//       throw new Error(error.message);
//     } else {
//       throw new Error("An error occurred creating the payment intent.");
//     }
//   }
// }






// action.ts
// "use server";
// import Stripe from "stripe";

// export async function createPaymentIntent(cartTotal: number) {
//   try {
//     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//       apiVersion: "2025-01-27.acacia", // Or latest stable version
//     });

//     // 1. Round the cartTotal (important!)
//     const roundedCartTotal = Math.round(cartTotal);

//     // 2. Convert to cents (or smallest currency unit)
//     const amount = roundedCartTotal * 100;

//     // 3. Check if the amount is less than the minimum
//     const minimumAmount = 50; // USD minimum (adjust if needed for other currencies)
//     if (amount < minimumAmount) {
//       throw new Error(`Amount must be at least ${minimumAmount / 100} ${/*currency*/ 'USD'}.`); // Throw an error
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: "usd", // Or "pkr"
//       automatic_payment_methods: { enabled: true },
//     });

//     return { clientSecret: paymentIntent.client_secret };
//   } catch (error: any) {
//     console.error("Error creating payment intent:", error);
//     if (error.raw && error.raw.message) {
//       throw new Error(error.raw.message);
//     } else if (error.message) {
//       throw new Error(error.message);
//     } else {
//       throw new Error("An error occurred creating the payment intent.");
//     }
//   }
// }






// action.ts
// "use server";

// import Stripe from "stripe";

// export async function createPaymentIntent(cartTotal: number) {
//   try {
//     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//       apiVersion: "2025-01-27.acacia", // Or latest stable version
//     });

//     const amount = Math.round(cartTotal * 100); // Amount in cents, rounded

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: "usd", // Or "pkr"
//       automatic_payment_methods: { enabled: true },
//     });

//     return { clientSecret: paymentIntent.client_secret };
//   } catch (error: any) {
//     console.error("Error creating payment intent:", error);
//     if (error.raw && error.raw.message) {
//       throw new Error(error.raw.message);
//     } else if (error.message) {
//       throw new Error(error.message);
//     } else {
//       throw new Error("An error occurred creating the payment intent.");
//     }
//   }
// }







// "use server";

// import Stripe from "stripe";

// export async function createPaymentIntent(cartTotal: number) {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//     apiVersion: "2025-01-27.acacia", // or the latest stable version
//   });
//   try {
//     // Ensure the cart total is passed in and converted to the correct amount in cents
//     const amount = cartTotal * 100; // Amount should be in cents

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd", // Currency (USD in this case)
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });

//     return {
//       clientSecret: paymentIntent.client_secret,
//     };
//   } catch (error) {
//     console.error("Error creating payment intent:", error);
//     throw error;
//   }
// }
