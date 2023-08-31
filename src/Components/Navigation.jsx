import React,{useState,useEffect} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {TbSocial} from 'react-icons/tb'
import {MdCreate} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {BiLogOut} from 'react-icons/bi'
import {BsShop} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
export default function Navigation() {
  const [theme,setTheme]=useState('')
  const navigator=useNavigate()
  useEffect(()=>{
      if(localStorage.getItem('color-theme')==='light'){
          setTheme('light')
      }else{
          setTheme('dark')
      }
    },[])

  const switchPath=(pathname)=>{
    navigator(pathname)
  }
  return (
        <div className="flex flex-row w-screen z-50 h-20 md:flex-col md:w-20 md:h-screen bg-gray-100 fixed bottom-0 md:top-0 dark:bg-slate-800" style={{alignItems:"center",justifyContent:"space-between"}}>
            <div className="home flex flex-row md:flex-col">
              <div className="icon hidden md:flex w-20 h-20">
                <img src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' />
                <div className="divider"></div>
              </div>
              
      

              <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-info md:mt-10" style={{alignItems:"center",justifyContent:"center"}} data-tip="Home" onClick={()=>switchPath
              ("/")}>
                <div className=""><AiOutlineHome size={24} color={theme==="dark"?"white":"grey"}/></div>
                <div className='text-xs md:hidden dark:text-white'>Home</div>
                <div className="divider hidden md:flex "></div>
              </button>
              <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-info md:mt-10" style={{alignItems:"center",justifyContent:"center"}} data-tip="Marketplace" onClick={()=>switchPath
              ("/marketplace")}>
                <div className=""><BsShop size={24} color={theme==="dark"?"white":"grey"}/></div>
                <div className='text-xs md:hidden dark:text-white'>Marketplace</div>
                <div className="divider hidden md:flex"></div>
              </button>
              <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-info" style={{alignItems:"center",justifyContent:"center"}}  data-tip="Social" onClick={()=>switchPath
              ("/social")}>
                <div className=""><TbSocial size={24} color={theme==="dark"?"white":"grey"}/></div>
                <div className='text-xs md:hidden dark:text-white'>Social</div>
                <div className="divider hidden md:flex"></div>
              </button>
              <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-info" style={{alignItems:"center",justifyContent:"center"}} data-tip="Create Project"onClick={()=>switchPath
              ("/create")}>
                <div className=""><MdCreate size={24} color={theme==="dark"?"white":"grey"}/></div>
                <div className='text-xs md:hidden dark:text-white'>Create</div>
                <div className="divider hidden md:flex"></div>
              </button>
              <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-info" style={{alignItems:"center",justifyContent:"center"}} data-tip="Profile" onClick={()=>switchPath
              ("/profile")}>
                <div className=""><CgProfile size={24} color={theme==="dark"?"white":"grey"}/></div>
                <div className='text-xs md:hidden dark:text-white'>Profile</div>
                <div className="divider hidden md:flex"></div>
              </button>

            </div>
           
           
            <div className="">
             
              <button className="icon flex flex-col w-20 h-20 md:tooltip md:tooltip-right md:tooltip-error" style={{alignItems:"center",justifyContent:"center"}} data-tip="Log Out">
                <div className="divider hidden md:flex"></div>
                <div className=""><BiLogOut size={24} color={theme==="dark"?"white":"grey"}/></div>
                <div className='text-xs md:hidden dark:text-white'>Logout</div>
                <div className="divider hidden md:flex"></div>
              </button>
            </div>
            
            
            
          
        </div>

  )
}
