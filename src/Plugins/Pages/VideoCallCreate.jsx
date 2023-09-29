import React, { useEffect, useState } from 'react'
import Navigation from '../../Components/Navigation'
import NavigationWide from '../../Components/NavigationWide'
import OptionCard from '../Components/VideoCall/OptionCard'
import { useNavigate } from 'react-router-dom'

export default function VideoCallCreate() {
  const [width, setWidth] = useState(600)
  const [id,setId]=useState(null)
  const [pass,setPass]=useState(null)
  const [name,setName]=useState(null)
  const navigator=useNavigate()
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <div className='pb-20 dark:bg-slate-900'>
      {width > 600 && <NavigationWide />}
      {width <= 600 && <Navigation />}

      <div className="min-h-screen bg-base flex flex-wrap flex-col  font-primary dark:bg-slate-900" style={{ alignItems: "center", justifyContent: "center" }}>
        <h2 class="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Create a  <span class="text-amber-600 dark:text-amber-500">Call  </span> or <span class="text-amber-600 dark:text-amber-500">Podcast</span></h2>
        <div className="w-1/2">

          <form>
            <div class="mb-6">
              <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room ID</label>
              <input onChange={e=>setId(e.target.value)} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="mb-6">
              <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Password</label>
              <input onChange={e=>setPass(e.target.value)} type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
           
            <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display Name</label>
              <input onChange={e=>setName(e.target.value)} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
           
            <button onClick={()=>navigator(`/videocall/join/${id}/${name}/${pass}`)} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>

        </div>
      </div>

    </div>
  )
}
