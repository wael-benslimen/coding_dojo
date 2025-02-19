import React from 'react'
import { useParams } from 'react-router-dom'

const ViewOne = () => {
    const {num} = useParams();
    console.log(isNaN(num));
    
  if (!isNaN(num)) {
    return (
    <div>
      <h1 className=' text-4xl font-bold text-center'> page number {num} </h1>
    </div>
  )
  } else {
    return (
    <div>
      <h1 className=' text-4xl font-bold text-center'> the word is {num} </h1>
    </div>
  )
   }
}

export default ViewOne
