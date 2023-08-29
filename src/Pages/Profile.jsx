import React from 'react'
import Navigation from '../Components/Navigation'
import AvatarBox from '../Components/Profile/AvatarBox'
import InfoBox from '../Components/Profile/InfoBox'
import SocialsBox from '../Components/Profile/SocialsBox'
import ProjectsBox from '../Components/Profile/ProjectsBox'
import Navbar from '../Components/Navbar'
export default function Profile() {
  return (
    <div className='md:pt-20 pb-20 md:pb-0'>
        <Navigation/>
        <Navbar/>
        <div className="min-h-screen bg-white flex flex-col gap-5 font-primary dark:bg-slate-900" style={{alignItems:"center",justifyContent:"center"}}>
            <div className="firstrow flex flex-col  md:flex-row w-screen h-1/2 pl-32 pr-20 gap-5">
                <AvatarBox/>
                <div className="flex flex-col gap-5 w-full">
                    <InfoBox/>
                    <SocialsBox/>
                </div>
                
            </div>
            <div className="firstrow flex flex-row w-screen h-1/2 pl-32 pr-20 gap-5">
                <ProjectsBox/>
            </div>
        </div>
    </div>
  )
}
