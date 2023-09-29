import React from 'react'
import HumidityInfo from '../Components/Mars/HumidityInfo'
import TempInfo from '../Components/Mars/TempInfo'
export default function Mover() {
  return (
    <div style={{maxWidth:"100vw",minHeight:"100vh",padding:"0px"}} className="dark:bg-slate-700">
        <Header/>
        <div className="title mb-8 mt-4" >
                <h1 className="mb-4 text-5xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400'>Collected </span>Data</h1>
                <p className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">The data Collected by robot with id : 1</p>
            </div>
        <h3 className="font-bold mb-4 mt-4 text-2xl text-center dark:text-white">Temperature Data</h3>
        <TempInfo bot_id={1}/>
        <h3 className="font-bold mb-4 mt-4 text-2xl text-center dark:text-white">Humidity Data</h3>
        <HumidityInfo bot_id={1}/>
    </div>
  )
}
