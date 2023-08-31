import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { TbSocial } from 'react-icons/tb'
import { MdCreate } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import SocialTags from './SocialTags'

export default function SocialFilter() {
    const [theme, setTheme] = useState('')
    const navigator = useNavigate()
    const [lan, setLan] = useState('english')
    const changeTheme = () => {
        console.log("change")
        if (localStorage.getItem('color-theme') === 'light') {
            console.log("dark")
            localStorage.setItem('color-theme', 'dark')
            setTheme("dark")
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('color-theme', 'light')
            setTheme('light')
            document.documentElement.classList.remove('dark');
            console.log("light")
        }
    }
    const changeLanguage = () => {
        console.log("change")
        if (localStorage.getItem('language') === 'english') {
            console.log("bangla")
            localStorage.setItem('language', 'bangla')
            setLan("bangla")
            document.documentElement.classList.add('bangla');
        } else {
            localStorage.setItem('language', 'english')
            setLan('english')
            document.documentElement.classList.remove('bangla');
            console.log("english")
        }
        window.location.reload()
    }
    useEffect(() => {
        if (localStorage.getItem('color-theme') === 'light') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }, [])

    const switchPath = (pathname) => {
        navigator(pathname)
    }
    return (
        <div>


            <aside id="default-sidebar" class="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">

                <div class="overflow-y-auto py-5  px-3 h-full  bg-white border-l border-gray-200 dark:bg-gray-800 dark:border-gray-700" onClick={()=>switchPath("/marketplace")}>
                    <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                        <a href="#">
                            <img class="rounded-lg" src="https://i.postimg.cc/ydxrgctv/image.png" alt="marketplace" />
                        </a>
                        <figcaption class="absolute px-4 text-md text-white bottom-6">
                            <p className='bg-white px-2 my-2 text-primary-500 font-semibold'>See our marketplace</p>
                            <p className='w-1/2 text-sm bg-primary-500 px-2 rounded-full'>Visit Now</p>
                        </figcaption>
                
                    </figure>
                    <h5 id="drawer-label "
                        class="inline-flex items-center mb-4 mt-8 text-base font-semibold text-gray-500 dark:text-gray-400">
                        View By Tags
                    </h5>
                    <SocialTags title="Microcontroller" color="yellow" checked={true} />
                    <SocialTags title="Software" color="purple" />
                    <SocialTags title="Hardware" color="green" />

                </div>




            </aside>
        </div>
    )
}
