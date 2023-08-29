import React from 'react'
import {CgWebsite} from 'react-icons/cg'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'

export default function SocialsBox() {
  return (
    <div class="w-full px-5 pb-5 pt-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{justifyContent:"center",alignItems:"center"}}>
       
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <CgWebsite size={24}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">Portfolio</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href="https://salman-sayeed-blog.web.app" target='_blank'>https://salman-sayeed-blog.web.app</a>
            </span>
        </div>
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <BsGithub size={24}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">Github</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href="https://salman-sayeed-blog.web.app" target='_blank'>https://salman-sayeed-blog.web.app</a>
            </span>
        </div>
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <AiFillLinkedin size={24}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">LinkedIn</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href="https://salman-sayeed-blog.web.app" target='_blank'>https://salman-sayeed-blog.web.app</a>
            </span>
        </div>
        <div class="flex flex-col md:flex-row mb-5" style={{justifyContent:"space-between"}}>
            <span className='flex flex-row' style={{alignItems:"center"}}>
                <BiUserCircle size={24}/>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white pl-3">Buldr</h5>
            </span>
            <span>
                <a class="text-md md:text-lg text-right  tracking-tight text-gray-900 dark:text-white" href="https://salman-sayeed-blog.web.app" target='_blank'>https://salman-sayeed-blog.web.app</a>
            </span>
        </div>

       
        
    </div>
  )
}
