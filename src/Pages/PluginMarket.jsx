import React from 'react'
import PluginCard from '../Components/Plugins/PluginCard'
import Navigation from '../Components/Navigation'
import Navbar from '../Components/Navbar'
import { pluginsData } from '../Data/Plugins'
import { RemovePluginItem, usePlugin, usePluginUpdate } from '../Hooks/PluginContextProvider'

export default function PluginMarket() {
  const installedPlugins = usePlugin()
  const removePlugin = RemovePluginItem()
  const updatePlugin = usePluginUpdate()



  return (
    <div className='dark:bg-slate-900'>
      <Navigation />
      <Navbar />


      <div className="min-h-screen w-full bg-base flex flex-col md:flex-col font-primary dark:bg-slate-900" style={{ alignItems: "center", justifyContent: "center" }}>
        <div className="w-full md:w-1/2 my-10 md:mt-20" >
          <h2 className='mt-4 text-xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>Buldr <span className="text-primary-600 dark:text-primary-500">Plugin</span> Library </h2>
          <h2 className='mt-4 text-md font-medium text-center leading-none tracking-tight text-gray-600 dark:text-gray-600'>Buldr plugin library is a place for you to install our plugins onto your system. Once you install a plugin it will persist in your view. You can also remove your installed plugins from here also </h2>
        </div>

        <div className='grid grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {pluginsData.map(a => <PluginCard id={a.id} name={a.name} title={a.title} image={a.image} />)}

        </div>

      </div>
    </div>
  )
}

