import React from 'react'
import TempInfo from '../Components/Mars/TempInfo'
import Navigation from '../../Components/Navigation'
import HumidityInfo from '../Components/Mars/HumidityInfo'
import Navbar from '../../Components/Navbar'
import { useUserID } from '../../Hooks/userContext'
import { CancelOutlined } from '@mui/icons-material'

export default function Drone() {
    const userId = useUserID()

    return (
        <div className="w-screen h-screen dark:bg-slate-700">
            <Navigation />
            <Navbar />
            {userId == 54 && <div className="">
                <div className="title mb-8 mt-4 md:p-20" >
                    <h1 className="mb-4 text-5xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Drone<span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400'> Live </span>Feed</h1>
                    <p className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">The data Collected by robot with id : 552</p>
                </div>
                <div className="flex flex-col items-center justify-center md:p-20">
                    <h3 className="font-bold mb-4 mt-4 text-2xl text-center dark:text-white">Live Feed </h3>
                    <a href="http://172.20.10.6/" target='_blank' class="inline-flex my-8  text-center items-center text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-pink-900">
                        <h5 class="text-lg text-center font-bold tracking-tight text-gray-900 text-white">Live Feed</h5>
                    </a>
                </div>
            </div>
            }
            {userId != 54 && <div className="h-full">
                <div className="h-full w-full flex flex-col items-center justify-center title mb-8 mt-4 md:p-20" >
                    <CancelOutlined size={72} className='text-red-500'/>
                    <p className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-200">You still haven't added a drone to your system!</p>
                </div>
            </div>}

        </div>
    )
}
