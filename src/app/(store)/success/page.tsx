"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Success = () => {
    const router = useRouter();
  return (
    <div className="flex justify-center items-center flex-col">
      <Image src="/success.png" alt="success" width={200} height={200}/>
      <p className='text-xl md:4xl'>Successful Your Payment</p>
      <button
        className="mt-10 bg-yellow-600 py-3 px-4 text-white "
        onClick={() => router.push("/shipment")} // Optional shipment navigation
      >
        Shipment
      </button>
    </div>
  )
}

export default Success
