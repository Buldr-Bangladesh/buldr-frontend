import React, { useState, useEffect } from 'react'
import Navigation from '../Components/Navigation'
import NavigationWide from '../Components/NavigationWide'
import { Carousel } from 'flowbite-react'
import MarketCard from '../Components/Marketplace/MarketCard'
import CategoryCard from '../Components/Marketplace/CategoryCard'
export default function Marketplace() {
  const [width, setWidth] = useState(600)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <div className='pb-20 dark:bg-slate-900'>
      {width > 600 && <NavigationWide />}
      {width <= 600 && <Navigation />}
      <div className="min-h-screen bg-base flex flex-wrap flex-col font-primary dark:bg-slate-900" style={{ alignItems: "center", justifyContent: "center" }}>
      
        {width>600 && <div className=" p-5" style={{minWidth:"67vw",maxWidth:"70vw",height:"60vh"}}>
          <Carousel>
            <img
              src="https://i.postimg.cc/5t5xgM6G/Frame-7.png"
            />
            <img
              src="https://i.postimg.cc/Wbt1vKHF/Frame-4.png"
            />
            <img
              src="https://i.postimg.cc/k5PJW5XK/Frame-6.png"
            />
            <img
              src="https://i.postimg.cc/x1zjkmY9/Frame-5.png"
            />
          </Carousel>
    
        </div>}
        {width<600 && <div className=" p-5" style={{minWidth:"80vw",maxWidth:"90vw",height:"20vh"}}>
          <Carousel>
            <img
              src="https://i.postimg.cc/5t5xgM6G/Frame-7.png"
            />
            <img
              src="https://i.postimg.cc/Wbt1vKHF/Frame-4.png"
            />
            <img
              src="https://i.postimg.cc/k5PJW5XK/Frame-6.png"
            />
            <img
              src="https://i.postimg.cc/x1zjkmY9/Frame-5.png"
            />
          </Carousel>
    
        </div>}
        <div className="w-full md:w-2/3 my-10" >
          <h2 className='mt-4 text-xl text-left font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>Shop by <span className="text-primary-600 dark:text-primary-500">Category</span> </h2>
          <h2 className='mt-4 text-md font-medium text-left leading-none tracking-tight text-gray-600 dark:text-gray-600'>Get the category of items that you want. All from our engineers</h2>
        </div>
        <div className="noscrollbar w-2/3 overflow-x-scroll flex flex-row flex-wrap" >
          <CategoryCard id="iot" name="IoT Devices"/>
          <CategoryCard id="3d" name="3D Models"/>
          <CategoryCard id="soft" name="Software Products"/>
          <CategoryCard id="arduino" name="Arduino Devices"/>
          <CategoryCard id="drone" name="Drones"/>
       

        </div>
        <div className="w-full md:w-2/3 my-10" >
          <h2 className='mt-4 text-xl text-left font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>Shop by <span className="text-primary-600 dark:text-primary-500">Popularity</span> </h2>
          <h2 className='mt-4 text-md font-medium text-left leading-none tracking-tight text-gray-600 dark:text-gray-600'>Get the category of items that you want. All from our engineers</h2>
        </div>
        <div className="noscrollbar w-2/3 overflow-x-scroll flex flex-row flex-wrap"  >
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
        </div>
        <div className="w-full md:w-2/3 my-10" >
          <h2 className='mt-4 text-xl text-left font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>Shop by <span className="text-primary-600 dark:text-primary-500">New</span> </h2>
          <h2 className='mt-4 text-md font-medium text-left leading-none tracking-tight text-gray-600 dark:text-gray-600'>Get the category of items that you want. All from our engineers</h2>
        </div>
        <div className="noscrollbar w-2/3 overflow-x-scroll flex flex-row" >
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
        </div>
      </div>
    </div>
  )
}
