import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { TbSocial } from 'react-icons/tb'
import { MdCreate } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'

export default function NavigationWide() {
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


      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">

        <div class="overflow-y-auto py-5 px-3 h-full  bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className='flex items-center mb-5 justify-start w-full'>
            <div className="icon hidden md:flex w-20 h-20">
              <img src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' />
            </div>
            <h2 className='text-xl font-bold text-black font-title dark:text-gray-100'>BULDR.</h2>
          </div>
          <div className="divider"></div>
          <ul class="space-y-2">
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/")}>
                <AiOutlineHome size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/marketplace")}>
                <BsShop size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3">Marketplace</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/social")}>
                <TbSocial size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3">Social</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/create")}>
                <MdCreate size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3">Create</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/profile")}>
                <CgProfile size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3">Profile</span>
              </a>
            </li>
          </ul>
          <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                <span class="ml-3">Docs</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                <span class="ml-3">Components</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-3">Help</span>
              </a>
            </li>
          </ul>
          <figure class="absolute bottom-32 px-4 max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" onClick={()=>switchPath("/plugins")}>
          <a href="#">
            <img class="rounded-lg" src="https://i.postimg.cc/Kjc1P7t3/31283901-7814561.jpg" alt="marketplace" />
          </a>
          <figcaption class="absolute px-4 text-md text-white bottom-6">
            <p className='bg-white px-2 my-2 text-primary-500 font-semibold'>See buldr plugins</p>
          </figcaption>

        </figure>
        </div>
       
        {/** BOTTOM ICONS */}
        <div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
          <button onClick={changeLanguage} type="button" class="flex w-20 h-20 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm" style={{ alignItems: "center", justifyContent: "center" }}>
            <BiLogOut size={24} color={theme === "dark" ? "white" : "grey"} />
          </button>
          <button onClick={changeTheme} type="button" class="text-gray-500 flex items-center justify-center w-20 h-20 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg ">
            {theme === 'light' && <svg id="theme-toggle-dark-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>}
            {theme === 'dark' && <svg id="theme-toggle-light-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>}
          </button>
          <button onClick={changeLanguage} type="button" class="flex w-20 h-20 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm" style={{ alignItems: "center", justifyContent: "center" }}>
            {lan === 'bangla' && <img src="https://i.postimg.cc/63QDL1YV/england-4854979.png" width="20px" />}
            {lan === 'english' && <img src="https://i.postimg.cc/gkRkZnwz/bangladesh-9993444.png" width="20px" />}
          </button>


        </div>



      </aside>
    </div>
  )
}
