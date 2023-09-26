import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Data/apiData'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Post({data}) {
  const navigator=useNavigate()
  //console.log(data)
  const [user,setUser]=useState()
  const [loading,setLoading]=useState(true)
  const getUser=async()=>{
    const res=await axios.get(BASE_URL+"/user/"+data.userID)
    //console.log(res)
    await setUser(res.data)
    setLoading(false)
    console.log(user)
  }
  useEffect(()=>{
    console.log(data)
    getUser()
  },[])
  const transformDate=(a)=>{
    a=parseInt(a)
    let dt=new Date(a)
    return dt.toDateString()
  }
  return (
    <article class="p-6 bg-white max-w-xl mx-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img class="w-full mb-2 rounded-lg " src={data.image} alt="projectImage" />
      <div class="flex justify-between items-center mb-5 text-gray-500">
        {data.tags.length!=0 && <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          {/* <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> */}
          {data.tags[0]}
        </span>}
        <span class="text-sm">{transformDate(data.date)}</span>
      </div>

      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{data.title}</a></h2>
      <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{data.subtitle}</p>
      <div class="flex flex-col justify-center items-start">
      {!loading && <div class="flex items-center mb-2 space-x-4">
          <img class="w-12 h-12 rounded-full" src={user.image} alt="Avatar" />
          <span class="font-medium dark:text-white">
            {user.name}
          </span> 
        </div>}
        <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline" onClick={()=>navigator('/post/'+data.postID)}>
          More
          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </article>
  )
}
