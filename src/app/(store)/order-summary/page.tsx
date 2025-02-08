"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface OrderData{
  fullName:string,
  email:string,
  phoneNumber:string,
  address:string,
  city:string,
  state:string,
  postalCode:string,
  country:string,
  totalPrice:number,
  vat:number,
  totalWithVat:number


}

export default function OrderSummary() {
  const router = useRouter();
  const [orderData, setOrderData] = useState<OrderData|null>(null);

  useEffect(() => {
    // localStorage se order data retrieve karo
    const storedOrderData = localStorage.getItem("orderData");
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
      console.log("Retrieved order data from localStorage:", JSON.parse(storedOrderData));
    } else {
      console.error("No order data found in localStorage.");
    }
  }, []);

  if (!orderData) return <div>No order data found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Order Summary</h1>

      {/* Shipping Information Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
        <div>
          <p className="mb-2"><strong>Full Name: </strong>{orderData.fullName}</p>
          <p className="mb-2"><strong>Email: </strong>{orderData.email}</p>
          <p className="mb-2"><strong>Phone Number: </strong>{orderData.phoneNumber}</p>
          <p className="mb-2">
            <strong>Address: </strong>
            {orderData.address}, {orderData.city}, {orderData.state} - {orderData.postalCode}, {orderData.country}
          </p>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
        <div>
          <p className="mb-2"><strong>Total Price: </strong>${orderData.totalPrice.toFixed(2)}</p>
          <p className="mb-2"><strong>VAT (15%): </strong>${orderData.vat}</p>
          <p className="mb-2"><strong>Total with VAT: </strong>${orderData.totalWithVat}</p>
        </div>
      </div>

      {/* Order Confirmation */}
      <div className="flex justify-center">
        <button
          onClick={() => router.push("/payment")} // Payment page par redirect karo
          className="bg-yellow-600 text-white hover:bg-yellow-700 w-full py-3 mt-6 rounded-lg shadow-md"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}


