import React from 'react'
import { PARAPHRASER_API } from '../../Data/apiData'
import Navbar from '../../Components/Navbar'
import Navigation from '../../Components/Navigation'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Spinner, Textarea } from 'flowbite-react'
import { useParams, useNavigate } from 'react-router-dom'
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
        // db.collection(topic).doc(title).set({
        //     title:title,
        //     subtitle:subtitle,
        //     topic:topic,
        //     image:image,
        //     blog:value,
        //     public:publish
        // }).then(e=>{
        //     alert("success")
        //     setSaving(false)
        // })
        // .catch(e=>console.log("failed"))
        setLoading(true)
        console.log(value)
        const res=await axios.get(`${PARAPHRASER_API}/prompt?prompt=${value}`)
        const data=res.data
        setData(data.answer)
        console.log(res.data)
        setLoading(false)
        setGenerated(true)
        // axios.get(PARAPHRASER_API,{
        //     "name":"user",
        //     "prompt":value,
            
        // }).then(res=>{
        //     console.log(res.data)
        //     setData(res.data)
        //     setLoading(false)
        //     setGenerated(true)
        // }).then(()=>{
            
            
        // }).catch(e=>console.log(e))
        // console.log(data)
    }

    useEffect(() => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)

    }, [])

    return (
        <div>
            <Navbar />
            <Navigation />
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} className="w-full dark:bg-slate-900">

                {!loading && <div>
                    <div>
                        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>Paraphrasing Tool </h2>
                    </div>

                    {!loading && <div className='flex flex-col max-w-5xl'>
                        <Textarea placeholder="Input text here" className='p-5' value={value}  onChange={(e) => setValue(e.target.value)} />

                        <button type="button" class="focus:outline-none text-white font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={() => {
                            setLoading(true)
                            generateText()
                        }}>Generate</button>
                    </div>}
                    {generated && <div>
                        {data.map(a=>(
                            <div className='p-4 max-w-5xl rounded-lg bg-gray-200 dark:bg-slate-800 mb-2'><p className='dark:text-white'>{a}</p></div>
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
