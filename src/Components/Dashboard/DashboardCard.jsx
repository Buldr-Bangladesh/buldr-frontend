import React, { useEffect, useState } from 'react'
import { RemovePluginItem, usePlugin, usePluginUpdate } from '../../Hooks/PluginContextProvider'
import { useNavigate } from 'react-router-dom'
import { pluginItems } from '../../Data/Plugins'
export default function DashboardCard({data}) {
  const navigator=useNavigate()
  return (
    <div class="w-full max-w-sm m-2 bg-white border border-gray-200 p-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 pointer" onClick={()=>navigator(`/${data}`)}>
      <div class="flex flex-col items-center pb-10">
        <img class="w-64 h-64 mb-3" src={pluginItems[data].image} alt="image" />
        <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">{pluginItems[data].name}</h5>
        <span class="text-sm text-gray-500 text-center dark:text-gray-400">{pluginItems[data].title}</span>
        
      </div>
    </div>

  )
}
