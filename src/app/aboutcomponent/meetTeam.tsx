import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

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
</section>
    </>
  );
};

export default MeetTeam;
