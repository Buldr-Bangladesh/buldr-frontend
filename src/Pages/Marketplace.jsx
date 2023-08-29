import React from 'react'
import Navigation from '../Components/Navigation'
export default function Marketplace() {
  return (
    <div>
        <Navigation/>
        <div className="min-h-screen bg-base flex flex-col md:flex-row font-primary dark:bg-slate-900" style={{alignItems:"center",justifyContent:"center"}}>
            Marketplace
        </div>
    </div>
  )
}
