import React,{useEffect, useState} from 'react'
import { Tabs,Spinner } from 'flowbite-react';
import { PrecisionManufacturing, SsidChart, TableChart } from '@mui/icons-material';
import { TempChart } from './TempChart';
import TempTable from './TempTable';
import axios from 'axios';
export default function TempInfo({bot_id}) {
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState()
    const baseURL="https://mars-ban-backend.onrender.com"
    const getData = async()=>{
        try{
          const res = await axios.get(`${baseURL}/temps`)
          setData(res.data)
          setLoading(false)
        }catch(e){
          console.log(e)
        }
      }

    useEffect(()=>{
        getData()
    },[])
  return loading?  <Spinner
  color="info"
  aria-label="Info spinner example"
    />:(
    <Tabs.Group
    aria-label="Tabs with icons"
    style="underline"
    >
    <Tabs.Item
        title="Chart"
        icon={SsidChart}
    >
        <TempChart data={data} bot_id={bot_id}/>
    </Tabs.Item>
    <Tabs.Item
        active={true}
        title="Tablular"
        icon={TableChart}
    >
        <TempTable data={data} bot_id={bot_id}/>
    </Tabs.Item>
    
    <Tabs.Item
        disabled={true}
        title="Bot Details"
        icon={PrecisionManufacturing}
    >
        Disabled content
    </Tabs.Item>
    </Tabs.Group>
  )
}
