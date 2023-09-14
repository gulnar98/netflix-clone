'use client'
import Image from 'next/image'
import React, { useState, useEffect } from "react";


function Navbar() {

    const [show, handleShow] =useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
      }, []);
    

  return (
    <div    className={`fixed top-0 p-5 w-full h-14 z-1 ease-in transition-all duration-500 ${
      show ? 'bg-black' : ''
    }`}>
     <div className='flex justify-between'>
     <Image className='fixed top-2.5 left-0 object-contain pl-5 cursor-pointer'
      src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
      width={100}
      height={100}
      alt="logo"
    />
   <Image className=' fixed cursor-pointer right-5'
      src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg"
      width={30}
      height={30}
      alt="avatar"
    />
        
    </div>   
    </div>
  )
}

export default Navbar