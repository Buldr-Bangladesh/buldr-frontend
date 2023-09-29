import React, { useEffect, useState } from 'react'
import { Spinner } from 'flowbite-react'
import axios from 'axios'
import { MdArrowBackIosNew } from 'react-icons/md'
import { BASE_URL } from '../../Data/apiData'
import { useParams } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor'
export default function NoteViewer() {
    const params=useParams()
    const id=params.id
    const [note,setNote]=useState(null)
    const [loading,setLoading]=useState(true)
    let goBack=()=>{
        window.history.back()
    }
    let endpoints = [
        BASE_URL+"/note/"+id
    ];

    const allRequests = async () => {
        axios.all(endpoints.map((promise) => axios.get(promise))).then(
        axios.spread((nt => {
            setNote(nt.data)
            console.log(nt.data)
            setLoading(false)
        })
        ))
    }
useEffect(()=>{
    allRequests()
},[])
  return (
    <div className='md:pt-20 pb-20 md:pb-0 h-screen w-screen flex bg-gray-50 justify-center dark:bg-slate-900'>
        <div className="fixed top-10 left-10 p-4 rounded-full bg-gray-200 hover:bg-gray-300 shadow-md dark:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer" onClick={goBack}>
            <MdArrowBackIosNew size={24} className='dark:text-white'/>
        </div>
        {!loading && <div className="dark:bg-slate-700 p-4 shadow-md rounded-xl bg-white noscrollbar flex flex-col items-center overflow-y-scroll" style={{width:"80vw"}}>
            <img src={note.image} className='rounded-xl' style={{objectFit:"contain"}}/>
            <h2 className='mt-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>{note.title} </h2>
            <h2 className='mb-4 p-2 text-center text-lg  leading-none tracking-tight text-gray-900 md:text-lg lg:text-lg dark:text-white'>{note.subtitle} </h2>
            {note.tags.map((a,idx)=>(
                    <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <span className={`bg-${a.color.color}-100 text-${a.color}-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-${a.color}-200 dark:text-${a.color}-800`}>
                            {a.name}
                        </span>
                    </label> 
                ))}
            <MDEditor.Markdown source={note.content} />
            {/* {allTags.map((a) =>{
                if(post.tags.includes(a.name)) return(
                <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className={`bg-${a.color}-100 text-${a.color}-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-${a.color}-200 dark:text-${a.color}-800`}>
                    {a}
                  </span>
                </label>
              )})} */}
          
        </div>}
        {loading && <div><Spinner/>Loading Note...</div>}
        
    </div>
  )
}
