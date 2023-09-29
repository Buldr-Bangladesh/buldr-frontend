import React, { useState,useEffect } from 'react'
import { JitsiMeeting } from '@jitsi/react-sdk';
import Navigation from '../../Components/Navigation';
import { API_ENDPOINT_FRONT } from '../../Data/apiData';
import { useParams } from 'react-router-dom';
export default function VideoCallRoom() {
    const params=useParams()
    const YOUR_DOMAIN="https://meet.jit.si/external_api.js"
    const [windowHeight,setWindowHeight]=useState("400px")
    const [windowWidth,setWindowWidth]=useState("400px")
    
    useEffect(()=>{
        setWindowHeight(window.innerHeight+'px')
        setWindowWidth(window.innerWidth-50+'px')
        console.log(params)
    },[])
  return (
    <div>
        <Navigation/>
        <div className="ml-20">
        <JitsiMeeting
            roomName = {params.id}
            password={params.password}
            configOverwrite = {{
                startWithAudioMuted: true,
                disableModeratorIndicator: true,
                startScreenSharing: false,
                enableEmailInStats: false
            }}
            interfaceConfigOverwrite = {{
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
            }}
            userInfo = {{
                displayName: params.name
            }}
            onApiReady = { (externalApi) => {
                // here you can attach custom event listeners to the Jitsi Meet External API
                // you can also store it locally to execute commands
            } }
            getIFrameRef = { (iframeRef) => { 
                iframeRef.style.height = windowHeight;
                iframeRef.style.width = windowWidth;
               
             } }
        
        />
        </div>
        
            </div>
  )
}
