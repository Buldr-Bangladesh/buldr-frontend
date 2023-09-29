import React from 'react'
import { PARAPHRASER_API } from '../../Data/apiData'
import Navbar from '../../Components/Navbar'
import Navigation from '../../Components/Navigation'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Spinner, Textarea } from 'flowbite-react'
import { useParams, useNavigate } from 'react-router-dom'
import { BsBackspace } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'
import { MdArrowBackIos, MdOutlineArrowBackIosNew } from 'react-icons/md'
export default function Paraphraser() {
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const navigate = useNavigate()
    const urlParams = useParams()

    const [value, setValue] = React.useState(null);
    const [loading, setLoading] = React.useState(false)
    const [generated, setGenerated] = useState(false)
    const [data,setData]=useState([])


    

    const generateText = async () => {
        setLoading(true)
        console.log(value)
        const res=await axios.get(`${PARAPHRASER_API}/prompt?prompt=${value}`)
        const data=res.data
        setData(data.answer)
        console.log(res.data)
        setLoading(false)
        setGenerated(true)
    }

    useEffect(() => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)

    }, [])

    return (
        <div>
            <Navbar />
            <Navigation />
            {width <= 600 &&  <div className='flex z-10 md:hidden justify-left w-screen h-20 bg-gray-100 dark:bg-slate-800 fixed top-0' style={{alignItems:"center"}}>
                <MdOutlineArrowBackIosNew size={24} color='gray' className=' mx-4' onClick={()=>window.history.back()}/>
                <h2 className='text-xl font-bold text-black font-title dark:text-gray-100'>Paraphraser Tool</h2>
            </div>}
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} className="w-full dark:bg-slate-900">

                {!loading && <div className='w-full flex flex-col items-center'>
                    <div>
                        <h2 className='mb-4 hidden md:flex text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>Paraphrasing Tool </h2>
                    </div>

                    {!loading && <div className='flex flex-col w-full p-10 md:px-32'>
                        <Textarea placeholder="Input text here" className='p-5 ' value={value}  onChange={(e) => setValue(e.target.value)} />

                        <button type="button" class="focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={() => {
                            setLoading(true)
                            generateText()
                        }}>Generate</button>
                    </div>}
                    {generated && <div>
                        {data.map(a=>(
                            <div className='p-4  rounded-lg bg-gray-200 dark:bg-slate-800 mb-2'><p className='dark:text-white'>{a}</p></div>
                        ))}
                    </div>}

                </div>
                }
                {loading && <div elevation={5} style={{zIndex:"5",width:"80vw",minHeight:"50vh",margin:"5vh 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"50px"}}>
                    <Spinner />
                    <p fontFamily="Oswald">Generating Text ....</p>
                    </div>
                }


            </div>
        </div>
    )
}
