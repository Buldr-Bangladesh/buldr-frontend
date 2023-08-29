import React ,{useState} from 'react'
import Navigation from '../Components/Navigation'
import {AiTwotoneEdit} from 'react-icons/ai'
import {BsTextParagraph,BsFillImageFill,BsFillCameraVideoFill,BsCodeSquare} from 'react-icons/bs'
import Block from '../Components/Create/Block'
import { Modal,Label,TextInput,Checkbox,Button,Textarea, ToggleSwitch } from 'flowbite-react'
import { current } from 'tailwindcss/colors'
import { ModalFooter } from 'flowbite-react/lib/esm/components/Modal/ModalFooter'

export default function Create() {
  const [type,setType]=useState("text")
  const [titleDone,setTitleDone]=useState(false)
  const [subDone,setSubDone]=useState(false)
  const [backdropDone,setBackdropDone]=useState(false)
  const [title,setTitle]=useState("")
  const [subtitle,setSubtitle]=useState("")
  const [backdrop,setBackdrop]=useState()

  const [openImageModal,setOpenImageModal]=useState(false)
  const [openCodeModal,setOpenCodeModal]=useState(false)
  const [openTextModal,setOpenTextModal]=useState(false)
  const [openVideoModal,setOpenVideoModal]=useState(false)
  const [currentBlocks,setCurrentBlocks]=useState([])

  const [blockTitle,setBlockTitle]=useState("")
  const [blockContent,setBlockContent]=useState("")

  const [addPostToMarketplace,setAddPostToMarketplace]=useState(true)
  const [addPostToSocial,setAddPostToSocial]=useState(true)
 
  const removeBlock=(idx)=>{
    currentBlocks.splice(idx,1)
    setCurrentBlocks([...currentBlocks])
  }
  const addBlock=(title,content,type)=>{
    const obj={title,content,type}
    setCurrentBlocks([...currentBlocks])
  }
  return (
    <div>
        <Navigation/>
        <div className="min-h-screen pl-24 pt-5 bg-base flex flex-col md:flex-col font-primary dark:bg-slate-900">
            <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>Create Project </h2>
            {/** Title */}
            <div class="mb-6 pr-20">
              {!titleDone && <form>   
                  <div class="relative">
                      <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Project Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                      <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>setTitleDone(true)}>Set</button>
                  </div>
              </form>}
                {
                  titleDone &&
                  <div className="w-full flex flex-row gap-3 pr-20">
                    <h2 className=' text-xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white'>{title}</h2>
                    <AiTwotoneEdit size={24} onClick={()=>setTitleDone(false)}/>
                  </div>
                }
            </div>
             {/** Subtitle */}
             <div class="mb-6 pr-20">
              {!subDone && <form>   
                  <div class="relative">
                      <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Project Subtitle' value={subtitle} onChange={(e)=>setSubtitle(e.target.value)}/>
                      <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>setSubDone(true)}>Set</button>
                  </div>
              </form>}
                {
                  subDone &&
                  <div className="w-full flex flex-row gap-3 pr-20">
                    <h2 className='mb-4 text-md text-left font-normal leading-none tracking-tight text-gray-900  dark:text-white'>{subtitle}</h2>
                    <AiTwotoneEdit size={24} onClick={()=>setSubDone(false)}/>
                  </div>
                }
            </div>
            {/** Backdrop */}
            <div class="mb-6 pr-20">
              {!backdropDone && <form>   
                  <div class="relative">
                      <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Project backdrop' value={backdrop} onChange={(e)=>setBackdrop(e.target.value)}/>
                      <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>setSubDone(true)}>Set</button>
                  </div>
              </form>}
                {
                  backdropDone &&
                  <div className="w-full flex flex-row gap-3 pr-20">
                    <h2 className='mb-4 text-md text-left font-normal leading-none tracking-tight text-gray-900  dark:text-white'>{backdrop}</h2>
                    <AiTwotoneEdit size={24} onClick={()=>setBackdrop(false)}/>
                  </div>
                }
            </div>


            {/** Blocks */}
            {/* <div className="blocks mr-20">
              <Block type="text" heading="This is a heading" content={"Hello this is content. Hello this is content. Hello this is content. Hello this is content"}/>
              <Block type="video" heading="This is a heading" content={"https://www.youtube.com/embed/yAQqeRh0b3Y?autoplay=1&mute=1"}/>
              <Block type="code" heading="This is a heading" content={code}/>
              <Block type="image" heading="This is a heading" content={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQp7sriUPfpF3LLtR7G1M2aLnyCnygm8FeMg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQp7sriUPfpF3LLtR7G1M2aLnyCnygm8FeMg&usqp=CAU"]}/>
            </div> */}


            {/** Buttons & Button Groups */}
            <div className="w-full flex items-center">
              <div class="inline-flex rounded-md shadow-sm" role="group">
                <button onClick={()=>setOpenTextModal(true)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  <BsTextParagraph size={16}/> Text<span className='hidden md:flex'> Block</span>
                </button>
                <button onClick={()=>setOpenImageModal(true)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  <BsFillImageFill size={16}/> Image<span className='hidden md:flex'> Block</span>
                </button>
                <button onClick={()=>setOpenVideoModal(true)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  <BsFillCameraVideoFill size={16}/> Video<span className='hidden md:flex'> Block</span>
                </button>
                
                <button onClick={()=>setOpenCodeModal(true)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  <BsCodeSquare size={16}/> Code<span className='hidden md:flex'> Block</span>
                </button>
              </div>
              
            </div>
            <div className="flex flex-col mb-4 mt-4">
              <div className="flex ">
                <ToggleSwitch className='mx-4 my-4' label="Add to marketplace"  checked={addPostToMarketplace} onChange={()=>setAddPostToMarketplace(!addPostToMarketplace)}/>
                <ToggleSwitch className='mx-4 my-4' label="Add to social"  checked={addPostToSocial} onChange={()=>setAddPostToSocial(!addPostToSocial)}/>
              </div>
                <div className="flex">
                  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Project</button>
                </div>
                
                       
            </div>
             {/**BLOCKS */}
             {currentBlocks.map((a,idx)=>(
              <Block idx={idx} type={a.type} heading={a.heading} content={a.content} rmvFunc={removeBlock}/>
            ))}



        </div>
         

              {/**Text MODAL */}
      <Modal show={openTextModal} aria-hidden="true" size="7xl" dismissible onClose={() => setOpenTextModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create a text block</h3>
              <TextInput placeholder="Block Title" id="block-title-text" />
              <Textarea  placeholder="Block Content" id="block-content-text"/>
              <Button onClick={()=>{
                setCurrentBlocks(currentBlocks=>[...currentBlocks,{type:"text",heading:document.getElementById("block-title-text").value,content:document.getElementById("block-content-text").value}])
                setOpenTextModal(false)
                }}>Save Block
              </Button>
          </div>
        </Modal.Body>
      </Modal>


      {/**Image MODAL */}
      <Modal show={openImageModal} size="7xl" popup onClose={() => setOpenImageModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create a image block</h3>
              <TextInput placeholder="Block Title" id="block-title-image" />
              <Textarea  placeholder="Images (Comma Seperated)" id="block-content-image"/>
              <Button onClick={()=>{
                setCurrentBlocks(currentBlocks=>[...currentBlocks,{type:"image",heading:document.getElementById("block-title-image").value,content:document.getElementById("block-content-image").value}])
                setOpenImageModal(false)
                }}>Save Block
              </Button>
          </div>
        </Modal.Body>
      </Modal>

        {/**Video MODAL */}
      <Modal show={openVideoModal} size="7xl" popup onClose={() => setOpenVideoModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create a video block</h3>
              <TextInput placeholder="Block Title" id="block-title-video" />
              <Textarea  placeholder="Block Content" id="block-content-video"/>
              <Button onClick={()=>{
                setCurrentBlocks(currentBlocks=>[...currentBlocks,{type:"video",heading:document.getElementById("block-title-video").value,content:document.getElementById("block-content-video").value}])
                setOpenVideoModal(false)
                }}>Save Block
              </Button>
          </div>
        </Modal.Body>
      </Modal>

       {/**Code MODAL */}
       <Modal show={openCodeModal} size="7xl" popup onClose={() => setOpenCodeModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create a code block</h3>
              <select id="block-title-code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a language</option>
                <option value="cpp">C++</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="javascript">Javascript</option>
              </select>
              <Textarea  placeholder="Block Content" id="block-content-code"/>

              <Button onClick={()=>{
                setCurrentBlocks(currentBlocks=>[...currentBlocks,{type:"code",heading:document.getElementById("block-title-code").value,content:document.getElementById("block-content-code").value}])
                setOpenCodeModal(false)
                }}>Save Block
              </Button>
          </div>
        </Modal.Body>
      </Modal>
           

        
    </div>
  )
}
