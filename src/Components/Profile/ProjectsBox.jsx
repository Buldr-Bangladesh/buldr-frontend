import React,{useState,useEffect} from 'react'
import {CgWebsite} from 'react-icons/cg'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'

export default function ProjectsBox() {
    const [theme,setTheme]=useState('')
    const [width,setWidth]=useState()
    useEffect(()=>{
        setWidth(window.innerWidth)
        if(localStorage.getItem('color-theme')==='light'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
      },[])
  return (
    <div className='w-full'>
    {width<=600 && 
    <div className='p-4'>
    <div className='w-full px-5 pb-5 pt-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700'>
        <h3 className='text-2xl text-black dark:text-white font-bold mb-10'>Created Projects</h3>
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
        <li class="pb-3 pt-3 sm:pb-4">
            <div class="flex flex-col md:flex-row items-center space-x-4">
                
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    M.A.R.S
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Modern Automotive for Remote Surveying
                    </p>
                </div>
                <div class="inline-flex mt-3 md:mt-0 md:items-center text-base font-semibold text-gray-900 dark:text-white">
                    <button type="button" class="focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Marketplace</button>
                    <button type="button" class="focus:outline-none text-white font-semibold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Social Post</button>
                </div>
            </div>
        </li>

        <li class="pb-3 pt-3 sm:pb-4">
            <div class="flex flex-col md:flex-row items-center space-x-4">
                
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    M.A.R.S
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Modern Automotive for Remote Surveying
                    </p>
                </div>
                <div class="inline-flex mt-3 md:mt-0 md:items-center text-base font-semibold text-gray-900 dark:text-white">
                    <button type="button" class="focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Marketplace</button>
                    <button type="button" class="focus:outline-none text-white font-semibold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Social Post</button>
                </div>
            </div>
        </li>
        </ul>
    </div>
    </div>
    }
    {width>600 && <div className='w-full px-5 pb-5 pt-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700'>
        <h3 className='text-2xl text-black dark:text-white font-bold mb-10'>Created Projects</h3>
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
        <li class="pb-3 pt-3 sm:pb-4">
            <div class="flex flex-col md:flex-row items-center space-x-4">
                
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    M.A.R.S
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Modern Automotive for Remote Surveying
                    </p>
                </div>
                <div class="inline-flex mt-3 md:mt-0 md:items-center text-base font-semibold text-gray-900 dark:text-white">
                    <button type="button" class="focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Marketplace</button>
                    <button type="button" class="focus:outline-none text-white font-semibold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Social Post</button>
                </div>
            </div>
        </li>

        <li class="pb-3 pt-3 sm:pb-4">
            <div class="flex flex-col md:flex-row items-center space-x-4">
                
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    M.A.R.S
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Modern Automotive for Remote Surveying
                    </p>
                </div>
                <div class="inline-flex mt-3 md:mt-0 md:items-center text-base font-semibold text-gray-900 dark:text-white">
                    <button type="button" class="focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Marketplace</button>
                    <button type="button" class="focus:outline-none text-white font-semibold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Social Post</button>
                </div>
            </div>
        </li>
        </ul>
    </div>}

    </div>
  );
}
