import React from 'react'
import {BsPersonVideo3,BsPersonVideo} from 'react-icons/bs'
import {RiVideoAddLine} from 'react-icons/ri'
import {TbPhoneCall} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
export default function OptionCard({id,name}) {
    const navigator=useNavigate()
    const catIcons={
        "create":<RiVideoAddLine size="200" className='text-gray-300 my-5 dark:text-gray-600'/>,
        "join":<TbPhoneCall size="200" className='text-gray-300 my-5 dark:text-gray-600'/>,
        "podcast":<BsPersonVideo size="200" className='text-gray-300 my-5 dark:text-gray-600'/>,
    }
    return (
        <div class="w-full m-4 min-w-xs max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" onClick={()=>navigator(`/videocall/${id}`)}>
                <div className="w-full flex flex-col items-center justify-center">
                    <h5 class="text-xl my-5 font-semibold tracking-tight text-gray-900 dark:text-gray-300">{name}</h5>
                    {catIcons[id]}
                </div>
               
                {/* <div class="flex items-center justify-center">

                    <a href="#" class="text-white bg-primary-700 my-5 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">View Category</a>
                </div> */}
       
        </div>

    )
}
