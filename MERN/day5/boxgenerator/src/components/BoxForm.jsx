import React from 'react'
import { useState } from 'react'
import ColoredBoxes from './ColoredBoxes'
const BoxForm = () => {
    const [box, setBox] = useState('')
    const [boxes, setBoxes] = useState([])
    const handleCreation = (e) => {
        setBox(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setBoxes([...boxes, box])
        setBox('')
    }
  return (
    <div className=' container mx-auto flex items-center flex-col gap-10 h-50 mt-10'>
          <h1 className=' text-4xl font-medium'>Box generator</h1>
          <form className=' flex flex-col w-50 gap-3 border rounded-lg p-3 bg-blue-100' onSubmit={handleSubmit} >
              <label className=' text-l font-bold '>Color :</label>
              <input type="text" value={box} className=' border rounded-lg p-1 bg-white' onChange={handleCreation} />
              <button className=' border border-green-400 bg-green-400 rounded-lg text-white'> create your box </button>
          </form>
          <ColoredBoxes boxes={boxes} />
    </div>
  )
}

export default BoxForm
