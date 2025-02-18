import React from 'react'

const CharacterDetails = ({ character }) => {
  // console.log(character);
  if (!character) {
    return (
      <p>hello</p>
    )
  }
  return (
    <div>
      <img src={character.image} alt="" className=' w-45 border-2 rounded-lg ' />
      <h1 className=' text-center text-2xl font-bold '> {character.name} </h1>
    </div>
  )
}

export default CharacterDetails
