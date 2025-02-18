import React from 'react'
import { useParams } from 'react-router-dom'

const TextColor = () => {
    const {word, tcolor, bg} = useParams()
  return (
    <div>
        <h1 className=' text-4xl font-bold text-center p-5 mt-2' style={{backgroundColor:bg, color:tcolor}} >the word is : {word} </h1>
    </div>
  )
}

export default TextColor
