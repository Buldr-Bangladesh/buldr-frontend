import React, { useEffect, useState } from 'react'
import { RemovePluginItem, usePlugin, usePluginUpdate } from '../../Hooks/PluginContextProvider'
import { useNavigate } from 'react-router-dom'

export default function PluginCard({ id, name, title, image }) {
  const navigator=useNavigate()
  const [installed, setInstalled] = useState(false)
  const installedPlugins = usePlugin()
  const removePlugin = RemovePluginItem()
  const updatePlugin = usePluginUpdate()
  const isInstalled = () => {
    installedPlugins.forEach(a => {
      console.log(a)
      if (a == id) setInstalled(true);
    })
  }
  useEffect(() => {
    isInstalled()
  }, [])
  return (
    <div class="w-full max-w-sm m-2 bg-white border border-gray-200 p-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col items-center pb-10">
        <img class="w-64 h-64 mb-3" src={image} alt="image" />
        
        <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">{name}</h5>
        <span class="text-sm text-gray-500 text-center dark:text-gray-400">{title}</span>
        
        <div class="flex mt-4 space-x-3 md:mt-6">
          {!installed && <div  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={() => {
              updatePlugin(id)
              setInstalled(true)
              alert("Plugin added!")
            }}>Add Plug-In</div>}
            {installed && <div class="inline-flex items-center px-4 py-2 text-sm font-medium text-center dark:text-white border rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300  dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => {
              navigator(`/${id}`)
            }}>View Plugin</div>}
          {installed && <div  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={() => {
              removePlugin(id)
              setInstalled(false)
              alert("Plugin removed!")
            }}>Remove Plug-In</div>}
          
        </div>
      </div>
    </div>

  )
}
