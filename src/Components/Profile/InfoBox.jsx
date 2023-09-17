import React,{useState,useEffect} from 'react'

export default function InfoBox() {
  const [width, setWidth] = useState(600)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <div>
    {width<=600 && 
    <div className='p-4'>
    <div class="w-full px-5 pb-5 pt-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{justifyContent:"center",alignItems:"center"}}>
       
        <div class="flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Full Name</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">Salman Sayeed</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Current Designation</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">Junior Software Engineer</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Current Company</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">Graaho Technologies</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Email</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">Salmansayeed@gmail.com</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Phone Number</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">+880 0123341123</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Address</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">Dhanmondi, Dhaka, Bangladesh</p>
            </span>
        </div>
    </div>
    </div>}
    {width>600 && <div class="w-full px-5 pb-5 pt-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{justifyContent:"center",alignItems:"center"}}>
       
        <div class="flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Full Name</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">Salman Sayeed</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Current Designation</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">Junior Software Engineer</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Current Company</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">Graaho Technologies</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Email</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">Salmansayeed@gmail.com</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Phone Number</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">+880 0123341123</p>
            </span>
        </div>
        <div class="mt-5 flex flex-col md:flex-row " style={{justifyContent:"space-between"}}>
            <span>
                <h5 class="text-lg text-left font-semibold tracking-tight text-gray-900 dark:text-white">Address</h5>
            </span>
            <span>
                <p class="text-lg text-left md:text-right tracking-tight text-gray-900 dark:text-white">Dhanmondi, Dhaka, Bangladesh</p>
            </span>
        </div>
    </div>}
    </div>
  )
}
