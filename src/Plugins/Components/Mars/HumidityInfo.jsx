import React,{useEffect, useState} from 'react'
import { Tabs,Spinner } from 'flowbite-react';
import { PrecisionManufacturing, SsidChart, TableChart } from '@mui/icons-material';
import axios from 'axios';
import HumidityTable from './HumidityTable';
import HumidityChart from './HumidityChart';
export default function({bot_id}) {
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState()
    const baseURL="https://mars-ban-backend.onrender.com"
    const getData = async()=>{
        try{
          const res = await axios.get(`${baseURL}/hums`)
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
        <HumidityChart data={data} bot_id={bot_id}/>
    </Tabs.Item>
    <Tabs.Item
        active={true}
        title="Tablular"
        icon={TableChart}
    >
        <HumidityTable data={data} bot_id={bot_id}/>
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
