// import React,{useState,useEffect} from 'react'
// import {AiOutlineHome} from 'react-icons/ai'
// import {TbSocial} from 'react-icons/tb'
// import {MdCreate} from 'react-icons/md'
// import {CgProfile} from 'react-icons/cg'
// import {BiLogOut} from 'react-icons/bi'
// import {BsFillPlugFill, BsPlug, BsPlugin, BsShop} from 'react-icons/bs'
// import { useNavigate } from 'react-router-dom'
// import { Tooltip } from 'flowbite-react'
// export default function Navigation() {
//   const [theme,setTheme]=useState('')
//   const navigator=useNavigate()
//   useEffect(()=>{
//       if(localStorage.getItem('color-theme')==='light'){
//           setTheme('light')
//       }else{
//           setTheme('dark')
//       }
//     },[])

//   const switchPath=(pathname)=>{
//     navigator(pathname)
//   }
//   return (
//         <div className="flex flex-row w-screen z-50 h-20 md:flex-col md:w-20 md:h-screen bg-gray-100 fixed bottom-0 md:top-0 dark:bg-slate-800" style={{alignItems:"center",justifyContent:"space-between"}}>
//             <div className="flex md:flex-col flex-row ">
//               <div className="icon hidden md:flex w-20 h-20">
//                 <img src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' />
//                 <div className="divider"></div>
//               </div>
              
      
//               <Tooltip
//                 content="Home"
//                 placement="right"
//               >
//               <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-info md:mt-10" style={{alignItems:"center",justifyContent:"center"}} data-tip="Home" onClick={()=>switchPath
//               ("/")}>
//                 <div className=""><AiOutlineHome size={24} color={theme==="dark"?"white":"grey"}/></div>
//                 <div className='text-xs md:hidden dark:text-white'>Home</div>
//                 <div className="divider hidden md:flex "></div>
//               </button>
//               </Tooltip>
//               <Tooltip
//                 content="Marketplace"
//                 placement="right"
//               >
//               <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-info md:mt-10" style={{alignItems:"center",justifyContent:"center"}} data-tip="Marketplace" onClick={()=>switchPath
//               ("/marketplace")}>
//                 <div className=""><BsShop size={24} color={theme==="dark"?"white":"grey"}/></div>
//                 <div className='text-xs md:hidden dark:text-white'>Marketplace</div>
//                 <div className="divider hidden md:flex"></div>
//               </button>
//               </Tooltip>
//               <Tooltip
//                 content="Social"
//                 placement="right"

//               >
//               <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-info" style={{alignItems:"center",justifyContent:"center"}}  data-tip="Social" onClick={()=>switchPath
//               ("/social")}>
//                 <div className=""><TbSocial size={24} color={theme==="dark"?"white":"grey"}/></div>
//                 <div className='text-xs md:hidden dark:text-white'>Social</div>
//                 <div className="divider hidden md:flex"></div>
//               </button>
//               </Tooltip>
//               <Tooltip
//                 content="Create"
//                 placement="right"
//               >
//               <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-info" style={{alignItems:"center",justifyContent:"center"}} data-tip="Create Project"onClick={()=>switchPath
//               ("/create")}>
//                 <div className=""><MdCreate size={24} color={theme==="dark"?"white":"grey"}/></div>
//                 <div className='text-xs md:hidden dark:text-white'>Create</div>
//                 <div className="divider hidden md:flex"></div>
//               </button>
//               </Tooltip>
//               <Tooltip
//                 content="Profile"
//                 placement="right"
//               >
//               <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-info" style={{alignItems:"center",justifyContent:"center"}} data-tip="Profile" onClick={()=>switchPath
//               ("/profile")}>
//                 <div className=""><CgProfile size={24} color={theme==="dark"?"white":"grey"}/></div>
//                 <div className='text-xs md:hidden dark:text-white'>Profile</div>
//                 <div className="divider hidden md:flex"></div>
//               </button>
//               </Tooltip>
//             </div>
           
           
//             <div className="">
//             <Tooltip
//                 content="Plugins"
//                 placement="right"
//               >
//               <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-error" style={{alignItems:"center",justifyContent:"center"}} data-tip="Plugins" onClick={()=>switchPath("/plugins")}>
//                 <div className="divider hidden md:flex"></div>
//                 <div className=""><BsPlugin size={24} color={theme==="dark"?"white":"grey"}/></div>
//                 <div className='text-xs md:hidden dark:text-white'>Plugins</div>
//                 <div className="divider hidden md:flex"></div>
//               </button>
//               </Tooltip>
//               <Tooltip
//                 content="Logout"
//                 placement="right"
//               >
//               <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-error" style={{alignItems:"center",justifyContent:"center"}} data-tip="Log Out">
//                 <div className="divider hidden md:flex"></div>
//                 <div className=""><BiLogOut size={24} color={theme==="dark"?"white":"grey"}/></div>
//                 <div className='text-xs md:hidden dark:text-white'>Plugins</div>
//                 <div className="divider hidden md:flex"></div>
//               </button>
//               </Tooltip>
//             </div>
            
            
            
          
//         </div>

//   )
// }

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { TbSocial } from 'react-icons/tb'
import { MdCreate } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import {BsPlugin} from 'react-icons/bs'
import {RiDashboardFill} from 'react-icons/ri'
import { usePlugin } from '../Hooks/PluginContextProvider'
import { pluginItems } from '../Data/Plugins'
import { Tooltip } from 'flowbite-react'
export default function NavigationWide() {
  const [theme, setTheme] = useState('')
  const [lan, setLan] = useState('english')
  const navigator = useNavigate()
  const installedPlugins = usePlugin()
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


      <aside id="default-sidebar" class="flex flex-row  w-screen z-50 h-20 md:flex-col md:w-20 md:h-screen bg-gray-100 fixed bottom-0 md:top-0 dark:bg-slate-800" style={{alignItems:"center",justifyContent:"space-between"}} aria-label="Sidenav">

        <div class="flex xs:flex-row md:flex-col items-center xs:justify-center overflow-x-scroll overflow-y-hidden md:overflow-y-auto md:overflow-x-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
           
          <img className="w-15 h-15 mb-20 hidden md:flex" src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' onClick={() => switchPath("/")}/>
            
       
          <ul class="md:space-y-10 flex xs:flex-row md:flex-col items-center justify-center">
            <li>
              <Tooltip content="Dashboard" placement="right">
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/dashboard")}>
                <RiDashboardFill size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Dashboard</span>
              </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="Marketplace" placement="right">
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/marketplace")}>
                <BsShop size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Marketplace</span>
              </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="Social" placement="right">
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/social")}>
                <TbSocial size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Social</span>
              </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="Create" placement="right">
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/create")}>
                <MdCreate size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Create</span>
              </a>
              </Tooltip>
            </li>
            <li onClick={()=>navigator("/plugins")} className='md:hidden'>
              <Tooltip content="Plugins" placement="right">
              <a class="flex flex-col items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <BsPlugin size={24} color={theme === "dark" ? "white" : "grey"}/>
                <span class="ml-3 text-xs flex md:hidden">Plugins</span>
              </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="Profile" placement="right">
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/profile")}>
                <CgProfile size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Profile</span>
              </a>
              </Tooltip>
            </li>

            <li onClick={()=>{}} className='md:hidden'>
              <Tooltip content="Logout" placement="right">
                <button onClick={changeLanguage} type="button" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" style={{ alignItems: "center", justifyContent: "center" }}>
                  <BiLogOut size={24} color={theme === "dark" ? "white" : "grey"} />
                  <span class="ml-3 text-xs flex md:hidden dark:text-white">Logout</span>
                </button>
              </Tooltip>
            </li>
            
            
          </ul>
          <ul class="pt-5 mt-5 hidden md:flex space-y-10 border-t border-gray-200 dark:border-gray-700">
            <li onClick={()=>navigator("/plugins")}>
              <Tooltip content="Plugins" placement="right">
              <a class="flex flex-col items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <BsPlugin size={24} color={theme === "dark" ? "white" : "grey"}/>
                <span class="ml-3 text-xs flex md:hidden">Plugins</span>
              </a>
              </Tooltip>
            </li>
          </ul>
          
        </div>

        {/** BOTTOM ICONS */}
        <div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full md:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
          <Tooltip content="Logout" placement="right">
            <button onClick={changeLanguage} type="button" class="flex w-20 h-20 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm" style={{ alignItems: "center", justifyContent: "center" }}>
              <BiLogOut size={24} color={theme === "dark" ? "white" : "grey"} />
            </button>
          </Tooltip>
          


        </div>



      </aside>
    </div>
  )
}
