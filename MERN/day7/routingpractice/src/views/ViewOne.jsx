import React from 'react'
import { useParams } from 'react-router-dom'

const ViewOne = () => {
    const {num} = useParams();
    
  return (
    <div>
      <h1 className=' text-4xl font-bold text-center'> page number {num} </h1>
    </div>
  )
}

export default ViewOne
