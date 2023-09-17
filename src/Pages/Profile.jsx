import React, { useEffect, useState } from 'react'
import Navigation from '../Components/Navigation'
import AvatarBox from '../Components/Profile/AvatarBox'
import InfoBox from '../Components/Profile/InfoBox'
import SocialsBox from '../Components/Profile/SocialsBox'
import ProjectsBox from '../Components/Profile/ProjectsBox'
import Navbar from '../Components/Navbar'
export default function Profile() {
    const [width,setWidth]=useState()
    useEffect(()=>{setWidth(window.innerWidth)},[])
  return (
    <div className='md:pt-20 pb-20 md:pb-0'>
        {width <= 600 &&  <div className='flex z-10 md:hidden justify-center w-screen h-20 bg-gray-100 dark:bg-slate-800 fixed top-0' style={{alignItems:"center"}}>
          <img width="50px" height="50px" src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' onClick={() => navigator("/")}/>
          <h2 className='text-xl font-bold text-black font-title dark:text-gray-100'><span className='text-primary-500'>BULDR.</span> Profile</h2>
        </div>}
        <Navigation/>
        <Navbar/>
        <div className="min-h-screen mt-20 md:m-0 bg-white flex flex-col gap-5 font-primary dark:bg-slate-900" style={{alignItems:"center",justifyContent:"center"}}>
            <div className="firstrow flex flex-col md:flex-row w-screen h-1/2 md:pl-32 md:pr-20 gap-5">
                <AvatarBox/>
                <div className="flex flex-col gap-5 w-full">
                    <InfoBox/>
                    <SocialsBox/>
                </div>
                
            </div>
            <div className="firstrow flex flex-row w-screen h-1/2 md:pl-32 md:pr-20 gap-5">
                <ProjectsBox/>
            </div>
        </div>
    </div>
  )
}
