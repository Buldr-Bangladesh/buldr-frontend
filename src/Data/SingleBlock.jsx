import React, { useState } from 'react'

export default function SingleBlock() {
  const [blocks,setBlocks]=  useState([])
  const addBlocks=(block)=>{
    setBlocks([...block])
  }
  return (
    {
        
    }
  )
}
