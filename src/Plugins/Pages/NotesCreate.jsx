import { useNavigate,useParams } from 'react-router';
import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import { Spinner } from 'flowbite-react';
import Navbar from '../../Components/Navbar';
import Navigation from '../../Components/Navigation';
import {AiOutlineSave} from 'react-icons/ai'



export default function NotesCreate() {
    const navigate=useNavigate()
    const urlParams=useParams()
    
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [title,setTitle]=React.useState(urlParams.title)
    const [image,setImage]=React.useState(null)
    const [subtitle,setSubtitle]=React.useState(null)
    const [loading,setLoading]=React.useState(false)
    const [saving,setSaving]=React.useState(false)
    const [publish,setPublish]=React.useState(false)
    console.log(urlParams)
    let topic=urlParams.topic
    const getData=()=>{
        // db.collection(topic).doc(title).get().then(a=>{
        //     if(a.exists){let data=a.data()
        //     setImage(data.image)
        //     setSubtitle(data.subtitle)
        //     setValue(data.blog)}
        // }).then(()=>{
        //     setLoading(false)
        // })
    }
    const saveData=()=>{
        // db.collection(topic).doc(title).set({
        //     title:title,
        //     subtitle:subtitle,
        //     topic:topic,
        //     image:image,
        //     blog:value,
        //     public:publish
        // }).then(e=>{
        //     alert("success")
        //     setSaving(false)
        // })
        // .catch(e=>console.log("failed"))
        console.lod()
    }

    React.useEffect(()=>{
        getData()
    },[])
    return (
        <div>
            <Navbar/>
            <Navigation/>
        <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} className="w-full dark:bg-slate-900">
            
            {!saving && <div>
            <div>
                <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>Note Editor </h2>
            </div>

            {!loading && <div style={{width:"70vw",minHeight:"60vh",display:"flex",flexDirection:"column"}}>
                <input type="text" class="block w-full mb-2 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" class="block w-full mb-2 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Subtitle' value={subtitle} onChange={(e)=>setSubtitle(e.target.value)}/>
                <input type="text" class="block w-full mb-2  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Image' value={image} onChange={(e)=>setImage(e.target.value)}/>
            <MDEditor
                value={value}
                onChange={setValue}
            />
            
            <button type="button" class="focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>{
                setSaving(true)
                console.log(title)
                console.log(subtitle)
                saveData()
            }}>Save</button>
            </div>}
            {loading && <div elevation={5} style={{zIndex:"5",width:"80vw",minHeight:"50vh",margin:"5vh 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"50px"}}>
            <Spinner />
            <p fontFamily="Oswald">Loading ....</p>
            </div>}
            </div>}
        
            {saving && <h2>saving....</h2>}
        </div>
        </div>
    )
}
