import React from 'react'

export default function AvatarBox() {
  return (
    
    <div class="w-full max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{justifyContent:"center",alignItems:"center"}}>
        <a href="#">
            <img class="p-8 rounded-full" src="https://i.postimg.cc/QC41JcY1/fashion-boy-with-yellow-jacket-blue-pants.jpg" alt="user image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">Salman Sayeed</h5>
            </a>
            <div class="flex items-center text-gray-900 mt-2.5 mb-5 text-center dark:text-gray-500">
               A passionate coder with skills in both software development and embedded systems
            </div>
            <div class=" text-md text-center font-semibold text-gray-900 dark:text-white">
                Dhaka, Bangladesh
            </div>
        </div>
    </div>

  )
}
