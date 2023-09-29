import React from 'react'
import { Table } from 'flowbite-react'
export default function({data,bot_id}) {
  console.log(data)
  return (
    <Table>
  <Table.Head>
    <Table.HeadCell>
      Latitude
    </Table.HeadCell>
    <Table.HeadCell>
      Longitude
    </Table.HeadCell>
    <Table.HeadCell>
      Value
    </Table.HeadCell>
    <Table.HeadCell>
      Bot ID
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    {data.map(a=>{
      if(a.bot_id==bot_id){
        return(
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {a.lat}
          </Table.Cell>
          <Table.Cell>
            {a.lng}
          </Table.Cell>
          <Table.Cell>
            {a.value}
          </Table.Cell>
          <Table.Cell>
            {a.bot_id}
          </Table.Cell>
        </Table.Row>
        
        )
      }
      })}
  </Table.Body>
</Table>
  )
}
