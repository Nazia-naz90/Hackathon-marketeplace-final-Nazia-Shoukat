import React from 'react';
import Image from 'next/image';
import { FaTwitter,FaFacebook,FaInstagram,FaLinkedinIn } from 'react-icons/fa6';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8">
     {/* TEXT SECTION */}
     <div className="w-full text-center md:text-left md:w-1/2 md:ml-16">
     <h3 className="text-[#252B42] font-bold text-[16px] mb-6">
      CONTACT US
     </h3>
     <h1 className="text-[#252B42] font-bold text-[32px] sm:text-[48] md:text-[58px] mb-6">
     Get in touch <br />
    today!
     </h1>
     <p className="text-[#737373] text-[16px] sm:text-[18px] md:text-[20px] mt-5">
     We know how large objects will act, <br />
     but things on a small scale 
     </p>
{/* PHONE AND FAX SECTION */}
<div className="text-[#252B42] font-bold text-[24px] mt-8">
    <h3>Phone: +451 215 215</h3>
    <h3 className='mt-5'>Fax: +451 215 215</h3>   
</div>
{/* SOCIAL MEDIA ICONS */}
<div className="flex justify-center md:justify-start gap-6 mt-8">
<Link href="https://twitter.com"
target="_blank"
rel="nooper norreferrer"
className="text-[#252B42] hover:text-blue-500 text-[27px]"
>
<FaTwitter />
</Link>  

<Link href="https://facebook.com"
target="_blank"
rel="nooper norreferrer"
className="text-[#252B42] hover:text-blue-500 text-[27px]"
>
<FaFacebook/>
</Link> 

<Link href="https://instagram.com"
target="_blank"
rel="nooper norreferrer"
className="text-[#252B42] hover:text-blue-500 text-[27px]"
>
<FaInstagram/>
</Link> 

<Link href="https://linkedin.com"
target="_blank"
rel="nooper norreferrer"
className="text-[#252B42] hover:text-blue-500 text-[27px]"
>
<FaLinkedinIn />
</Link> 
</div>
</div>
{/* IMAGE SECTION */}
<div className="w-full md:w-1/2 
mt-8 md:mt-0">
<Image 
src="/images/contactUs/images/contactus.png"
alt="image"
height={280}
width={415}
className='w-full h-auto object-contain'/>

</div>
</div>
    </>
  )
}

export default ContactUs
