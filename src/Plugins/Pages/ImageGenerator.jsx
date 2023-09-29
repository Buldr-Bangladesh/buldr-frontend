import React from 'react'
import { IMAGE_GENERATOR_API } from '../../Data/apiData'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Navigation from '../../Components/Navigation'

export default function ImageGenerator() {
    const [width,setWidth]=useState()
    const [height,setHeight]=useState()
    useEffect(()=>{
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    },[])
  return (
    <div >
        <Navigation/>
        <Navbar/>
        <iframe className="mt-20 ml-20" height={height-80} width={width-80} src={IMAGE_GENERATOR_API}/>
    </div>
  )
}
