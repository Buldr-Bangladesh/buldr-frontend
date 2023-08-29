import React from 'react'
import Lottie from 'lottie-react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import iotAnimation from '../assets/iot.json'
import engineersAnimation from '../assets/engineers.json'
import ReactTypingEffect from 'react-typing-effect'
export default function Home() {
    return (
        <div className="row ">
            
       
                <Navigation />
                <Navbar />
                <div className="min-h-screen flex flex-col-reverse md:flex-row w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-400 via-purple-300 to-purple-100 flex flex-col md:flex-row font-primary dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] dark:from-stone-900 dark:via-cyan-900 dark:to-sky-900" style={{ alignItems: "center", justifyContent: "center" }}>
                    <div className="flex-1 margin-10" >
                        <Lottie animationData={engineersAnimation} />
                    </div>
                    <div className="title flex-1 flex flex-col items-center" >
                        <h1 class="m-4 mt-10 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> Showcase your <span class="text-blue-600 dark:text-blue-500">Engineering Projects</span> with us.</h1>
                        <p class="text-lg m-4 font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-10"><ReactTypingEffect speed={0.5} eraseSpeed={1} cursor={"_"} text={["Here at buldr we provide a platform for independent engineers to showcase and monetize their projects. You have the option to create projects and sell them on our marketplace"]}></ReactTypingEffect></p>
                        <button type="button" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-xl font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Get Started
                            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                </div>

                <div className="min-h-screen  flex flex-col font-primary dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-stone-900 dark:via-cyan-900 dark:to-sky-900" style={{ alignItems: "center", justifyContent: "center" }}>

                    <div className="flex flex-col title flex-1 mt-20" style={{ marginLeft: "7vw", alignItems: "center" }}>
                        <h1 class="mb-4 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Create . Post . <span class="text-blue-600 dark:text-blue-500">Sell</span> </h1>
                        <p class="text-lg md:w-2/3 font-normal text-gray-500 lg:text-xl text-center dark:text-gray-400 mb-10">Here at buldr we provide a platform for independent engineers to showcase and monetize their projects. You have the option to create projects and sell them on our marketplace</p>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-xl font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            See marketplace
                            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="flex-1 " >
                        <Lottie animationData={iotAnimation}/>
                    </div>

                </div>

            <Footer />
        </div>

    )
}
