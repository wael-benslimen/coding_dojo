import React from 'react'
import { useParams } from 'react-router-dom'

const Text = () => {
    const {word} = useParams()
  return (
    <div>
      <h1 className=' text-4xl font-bold text-center'> the word is {word} </h1>
    </div>
  )
}

export default Text
