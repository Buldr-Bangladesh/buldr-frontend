import React, { useEffect, useState } from 'react'
import Navigation from '../Components/Navigation'
import AvatarBox from '../Components/Profile/AvatarBox'
import InfoBox from '../Components/Profile/InfoBox'
import SocialsBox from '../Components/Profile/SocialsBox'
import ProjectsBox from '../Components/Profile/ProjectsBox'
import Navbar from '../Components/Navbar'
import {  useUserID } from '../Hooks/userContext'
import { BASE_URL } from '../Data/apiData'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { LiaLinkedinIn } from 'react-icons/lia'
import { BiUserCircle } from 'react-icons/bi'
import { PiGithubLogo, PiListFill } from 'react-icons/pi'
import {  Tooltip } from 'flowbite-react'
import Post from '../Components/Social/Post'
import Footer from '../Components/Footer'
import { BsGrid3X2Gap } from 'react-icons/bs'
export default function Portfolio() {
    const params=useParams()
    const navigator=useNavigate()
    const id=params.id
    const buldrUser=useUserID()
    const [width,setWidth]=useState()
    const [user,setUser]=useState()
    const [posts,setPosts]=useState()
    const [notes,setNotes]=useState()
    const [loading,setLoading]=useState(true)
    const buldruser = useUserID()
    const [theme,setTheme]=useState('')
    const [lan, setLan] = useState('english')
    const [gridView,setGridView]=useState(true)
    useEffect(()=>{
        if(localStorage.getItem('color-theme')==='light'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
        if(localStorage.getItem('language')==='english'){
            setLan('english')
        }else{
            setLan('bangla')
        }
    },[])
    const changeTheme=()=>{
        console.log("change")
        if(localStorage.getItem('color-theme')==='light'){
            console.log("dark")
            localStorage.setItem('color-theme','dark')
            setTheme("dark")
            document.documentElement.classList.add('dark');
        }else{
            localStorage.setItem('color-theme','light')
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
    let endpoints = [
      BASE_URL+"/user/"+id,
      BASE_URL+"/post/social/"+id,
      BASE_URL+"/notes-public/"+buldrUser
    ];
    const allRequests = async () => {
      axios.all(endpoints.map((promise) => axios.get(promise))).then(
        axios.spread((u,p,n) => {
          setUser(u.data)
          setPosts(p.data)
          setNotes(n.data)
          setLoading(false)
        })
      )
    }
    useEffect(()=>{
      setWidth(window.innerWidth)
      allRequests()
    },[])
  return (
    <div className='md:pt-20 pb-20 md:pb-0'>

          <div className='z-10 flex w-screen h-20 bg-gray-100 dark:bg-gray-800 fixed top-0' id="home" style={{alignItems:"center",justifyContent:"space-between"}}>
          {!loading && <h2 className='text-xl font-bold ml-4 text-black font-title dark:text-gray-100'>{user.name}</h2>}
          <li className='hidden md:flex md:w-1/3 items-center justify-around'>
            <a href="#home"><ul className='font-bold text-gray-600 hover:text-black dark:text-gray-300 hover:dark:text-white cursor-pointer'>Home</ul></a>
            <a href="#connect"><ul className='font-bold text-gray-600 hover:text-black dark:text-gray-300 hover:dark:text-white cursor-pointer'>Connect</ul></a>
            <a href="#projects"><ul className='font-bold text-gray-600 hover:text-black dark:text-gray-300 hover:dark:text-white cursor-pointer'>Projects</ul></a>
            <a href="#blogs"><ul className='font-bold text-gray-600 hover:text-black dark:text-gray-300 hover:dark:text-white cursor-pointer'>Blogs</ul></a>
            
          </li>
          <div className="flex flex-row mr-10">
              {/* <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" /> */}
              <button  onClick={changeTheme} type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                  {theme==='light' && <svg id="theme-toggle-dark-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>}
                  {theme==='dark' && <svg id="theme-toggle-light-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>}
              </button>
              
              {/* <button className="btn btn-primary font-primary">Get Started</button> */}
          </div>
      </div>

        {/**CONNECT */}
       {!loading && <div className="min-h-screen mt-20 md:m-0 bg-white flex flex-col gap-5 font-primary dark:bg-slate-900" style={{alignItems:"center",justifyContent:"center"}}>
            <div className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center md:justify-around justify-center">
              <img class="p-8 md:w-1/3" src={user.image} style={{objectFit:"contain"}} alt="user image" />
              <div className="">
                <h2 className='mt-4 text-3xl font-extrabold text-primary-500 leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl'>{user.name} </h2>
                <h2 className='mb-4 p-2 text-center text-lg  leading-none tracking-tight text-gray-900 md:text-lg lg:text-lg dark:text-white'>{user.bio} </h2>
              </div>
            </div>
            {!loading && <div className=" w-full flex flex-col items-center justify-around bg-gray-100 dark:bg-slate-800" id="connect">
              <h2 className='mt-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl text-primary-500'>Connect With Me </h2>
              <h2 className='mb-4 p-2 text-center text-lg  leading-none tracking-tight text-gray-900 md:text-lg lg:text-lg dark:text-white'>Get my socials </h2>
              <div className="flex flex-col my-24  items-center justify-around w-full md:flex-row">
                <Tooltip content="Portfolio" placement="bottom">
                <div className="bg-gray-300 dark:bg-slate-700 my-4 hover:dark:bg-slate-600 p-4 rounded-full">
                  <a href={user.portfolio} target='_blank'><BiUserCircle size={72} className='dark:text-white' /></a>
                </div>
                </Tooltip>
                <Tooltip content="Linked In" placement="bottom">
                <div className="bg-gray-300 dark:bg-slate-700 my-4 hover:dark:bg-slate-600 p-4 rounded-full">
                  <a href={user.linkedin} target='_blank'><LiaLinkedinIn size={72} className='dark:text-white' /></a>
                </div>
                </Tooltip>
                <Tooltip content="Github" placement="bottom">
                <div className="bg-gray-300 dark:bg-slate-700 my-4 hover:dark:bg-slate-600 p-4 rounded-full">
                  <a href={user.github} target='_blank'><PiGithubLogo size={72} className='dark:text-white' /></a>
                </div>
                </Tooltip>
                <Tooltip content="Buldr Profile" placement="bottom">
                <div className="bg-gray-300 dark:bg-slate-700 my-4 hover:dark:bg-slate-600 p-4 rounded-full">
                  <a href={user.buldr} target='_blank'><img className='w-16 h-16' src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' /></a>
                </div>
                </Tooltip>
              </div>
              
            </div>}
             {/**POSTS */}
            {!loading && <div className=" w-full flex flex-col items-center justify-around " id="projects">
              <h2 className='mt-4 text-xl font-extrabold text-primary-500 leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl'>My Projects </h2>
              <h2 className='mb-4 p-2 text-center text-lg  leading-none tracking-tight text-gray-900 md:text-lg lg:text-lg dark:text-white'>View my projects that I have created over the years </h2>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 my-24  items-center justify-around w-full">
                  {posts.map(a=><Post data={a}/>)}
              </div>
              
            </div>}
            {/**NOTES */}
            <div className=" bg-gray-100 dark:bg-slate-800">
            <div className='mt-24 mb-4 flex flex-col items-center ' id="blogs">
                <h2 className='text-xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl text-primary-500'>My Blogs </h2>
                <h2 className='mb-4 text-lg text-center font-normal leading-none tracking-tight text-gray-900 md:text-lg lg:text-lg dark:text-white'>Read my blogs on various topics</h2>
            </div>
            <div className="w-full flex items-center justify-center">
            <div class="inline-flex rounded-md shadow-sm" role="group">
                <button onClick={() => setGridView(true)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
                    <BsGrid3X2Gap size={16} /> <span className='hidden md:flex'> Grid View</span>
                </button>
                <button onClick={() => setGridView(false)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
                    <PiListFill size={16} /> <span className='hidden md:flex'> List View</span>
                </button>
            
                </div>

            </div>
            {!loading && gridView && <div className='grid md:grid-cols-4 md:p-20 gap-4 lg:grid-cols-5 grid-cols-1'>
                {notes.map(a=>(
                     <article class="p-6 bg-white max-w-xl mx-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                     <img class="w-full mb-2 rounded-lg " src={a.image} alt="projectImage" />
                     <div class="flex justify-between items-center mb-5 text-gray-500">
                       {a.tags.length!=0 && <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                         {/* <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> */}
                         {a.tags[0]}
                       </span>}
                     </div>
               
                     <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{a.title}</a></h2>
                     <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{a.subtitle}</p>
                     <div class="flex flex-col justify-center items-start">
                     
                     <button type="button" class="focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>navigator('/note-viewer/'+a.noteID)}>View</button>
                       
                     </div>
                   </article>
                ))}
            </div>}
            {!loading && !gridView && <div className='w-full flex flex-col md:p-24'>
                {notes.map(a=>(
                     <article class="p-2 flex items-center justify-between bg-white w-full rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex">
                        <img class="w-24 mr-2 rounded-lg " src="{a.image}" alt="projectImage" style={{objectFit:"contain"}}/>
                        <div className='max-w-4xl'>
                            
                            <div class="flex justify-between items-center mb-5 text-gray-500">
                            {a.tags.length!=0 && <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                {a.tags[0]}
                            </span>}
                            </div>
                    
                            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{a.title}</a></h2>
                            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{a.subtitle}</p>
                        </div>
                    </div>
                     
                     <div class="flex flex-col justify-center items-start">
                        <button type="button" class="focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>navigator('/note-viewer/'+a.noteID)}>View</button>
                     </div>
                   </article>
                ))}
            </div>}
            </div>
            {/**FOOTER */}
            <div className="w-full flex flex-col items-center justify-around dark:bg-slate-800" id="footer">
              <div className="divider"></div>
              <h2 className='mt-4 text-md text-white leading-none tracking-tight text-gray-900 md:text-md lg:text-md'>Buldr generated portfolio </h2>
              <h2 className='mb-4 p-2 text-center text-lg  leading-none tracking-tight text-gray-900 md:text-lg lg:text-lg dark:text-white'>Made with &#9829; by <a href="https://buldr-bangladesh.web.app">Buldr Bangladesh </a></h2>
            
            </div>
        </div>}
    </div>
  )
}
