import React, { useState } from 'react'

const CharactersList = ({ characters, getChar }) => {
  const [number, setNumber] = useState(characters.lenght)
  console.log(getChar);
  
  const limiteddcharlist = characters.slice(0, number)




  const handleChange = (e) => {
    setNumber(e.target.value)
    
    
  }
  return (
    <div>
      <input type="number" placeholder='num of chars' className=' border bg-white mb-3 p-1 rounded-lg w-50' value={number} onChange={handleChange} />
      <div className=' bg-white flex flex-col w-50 p-1 gap-1 rounded-lg  overflow-auto h-40'>
        {limiteddcharlist.map((character, index) => (
          <button key={index} className=' border rounded-lg bg-amber-100' onClick={()=>getChar(character)}> {character.name} </button>
        ) )}
      </div>

    </div>
  )
}

export default CharactersList
