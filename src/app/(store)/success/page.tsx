"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Success = () => {
    const router = useRouter();
  return (
<>
<div className='max-w-7xl max-auto'>
<div className="flex justify-center items-center flex-col mt-32 border-2 
    border-gray-300 shadow-lg w-[30rem] h-[20rem] mx-auto">
      <Image src="/images/success.png" alt="success" width={50} height={50}/>
      <p className='text-xl md:4xl text-blue-600'>Successful Your Payment</p>
      <button
        className="mt-10 bg-yellow-600 py-3 px-4 text-white rounded-md"
        onClick={() => router.push("/shipment")} // Optional shipment navigation
      >
        Shipment
      </button>
    </div>
</div>

</>
  )
}

export default Success
