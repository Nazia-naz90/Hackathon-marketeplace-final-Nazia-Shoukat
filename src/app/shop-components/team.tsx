import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

interface Team{
    name:string;
    profession:string;
    social:{
        facebook:string;
        instagram:string;
        twitter:string;
    }
    image:string;
}

const MeetTeam:React.FC = () => {
    const teamMembers:Team[]=[
        {
            name:"Jhon Doe",
            profession:"Designer",
            social:{
                facebook:"#",
                instagram:"#",
                twitter:"#",

            },
        image:"/images/about/images/team-1-user-1.jpg"    
        },
        {
            name:"Jane Smith",
            profession:"Developer",
            social:{
                facebook:"#",
                instagram:"#",
                twitter:"#",

            },
        image:"/images/about/images/team-1-user-2.jpg"    
        },
        {
            name:"Same Wilson",
            profession:"Project Manager",
            social:{
                facebook:"#",
                instagram:"#",
                twitter:"#",

            },
        image:"/images/about/images/team-1-user-3.jpg"    
        },
        {
            name:"Emily Davis",
            profession:"Marketing",
            social:{
                facebook:"#",
                instagram:"#",
                twitter:"#",

            },
        image:"/images/pages/images/team-1-user-4.jpg"    
        },
        {
            name:"Michael Brown",
            profession:"SEO Specialist",
            social:{
                facebook:"#",
                instagram:"#",
                twitter:"#",

            },
        image:"/images/pages/images/team-1-user-5.jpg"    
        },
        {
            name:"Sarah Lee",
            profession:"Content Writer",
            social:{
                facebook:"#",
                instagram:"#",
                twitter:"#",

            },
        image:"/images/pages/images/team-1-user-6.jpg"    
        },
        {
            name:"Chris Martin",
            profession:"UX/UI Designer",
            social:{
                facebook:"#",
                instagram:"#",
                twitter:"#",

            },
        image:"/images/pages/images/team-1-user-6.jpg"    
        },
        {
            name:"Laura Johnson",
            profession:"Data Analyst",
            social:{
                facebook:"#",
                instagram:"#",
                twitter:"#",

            },
        image:"/images/pages/images/team-1-user-7.jpg"    
        },
        {
            name:"David Clark",
            profession:"Web Developer",
            social:{
                facebook:"#",
                instagram:"#",
                twitter:"#",

            },
        image:"/images/pages/images/team-1-user-8.jpg"    
        },

        
    ]
  return (
    <>
     <section className='py-16 bg-white'>
    <h2 className="text-center
    text-[40px] font-bold 
    text-[#252B42]
    ">
     Meet Our Team   
    </h2> 
    <p className='text-center text-[18px] font-semibold mb-20 text-[#252B42]'>
    Problems trying to resolve the conflict between 
    <br />
    the two major realms of Classical physics: Newtonian mechanics 
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 px-4">
    {teamMembers.map((member,index)=>(
        <div key={index} className='text-center'>
{/* IMAGE COMPONENT */}
<Image 
src={member.image}
alt={member.name}
width={316}
height={231}
className="mx-auto"
/>
<h3 className="mt-6 text-[16px]
font-bold text-[#252B42]
">
{member.name}
</h3>
<p className="text-[#737373] text-[14px] mt-3">
    {member.profession}
</p>
<div className="flex justify-center mt-3 space-x-4">
  {/* SOCIAL MEDIA ICONS*/}
  <Link href={member.social.facebook} className="text-[#23A6F0]">
  <FaFacebook/>
  </Link>
  <Link href={member.social.instagram} className="text-[#23A6F0]">
  <FaInstagram/>
  </Link>
  <Link href={member.social.twitter} className="text-[#23A6F0]">
  <FaTwitter/>
  </Link>
</div>
</div>
    ))}    

</div>
<div className="py-16 bg-[#FFFFFF] text-center mt-20">
        <h2 className="text-[40px] font-bold text-[#252B42]">
          Start your 14 days free trial
        </h2>
        <p className="text-[#737373] text-[14px] mt-4 mx-auto">
          Met minim Mollie non deserunt Alamo est sit cliquey dolor <br /> Do
          met sent. RELUIT official consequat.
        </p>
        <button className="mt-6 bg-[#23A6F0] rounded-md text-[14px] font-bold text-[#FFFFFF] px-8 py-4 hover:bg-blue-400">
          Try it free now
        </button>

        <div className="flex justify-center mt-10">
          <Link href="#" className="text-[#55ACEE] mx-2">
            <FaTwitter size={30} />
          </Link>
          <Link href="#" className="text-[#395185] mx-2">
            <FaFacebook size={30} />
          </Link>
          <Link href="#" className="text-[#000000] mx-2">
            <FaInstagram size={30} />
          </Link>
          <Link href="#" className="text-[#0A66C2] mx-2">
            <FaLinkedinIn size={30} />
          </Link>
        </div>
      </div>
</section>
    </>
  );
};

export default MeetTeam;
