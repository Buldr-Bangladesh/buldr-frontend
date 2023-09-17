import React from 'react'
import {MdEditNote,MdOutlinePreview,MdAddCard} from 'react-icons/md'
import {SiCodereview} from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

export default function OptionCard({id,name}) {
    const navigator=useNavigate()
    const catIcons={
        "create":<MdEditNote size="200" className='text-gray-300 my-5 dark:text-gray-600'/>,
        "view":<MdOutlinePreview size="200" className='text-gray-300 my-5 dark:text-gray-600'/>,
        "add":<MdAddCard size="200" className='text-gray-300 my-5 dark:text-gray-600'/>,
    }
    const paths={
        'create':"/notes-create",
        'view':"/notes-view",
        'add':"/notes-pdf",
    }
    return (
        <div class="w-full m-4 min-w-xs max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                <div className="w-full flex flex-col items-center justify-center">
                    <h5 class="text-xl my-5 font-semibold tracking-tight text-gray-900 dark:text-gray-300">{name}</h5>
                    {catIcons[id]}
                </div>
        </div>

    )
}
