import { useState } from 'react'
import PersonCard from './components/PersonCard'
function App() {
  const persons = [
    { name: 'jhon', age: '45', hair: 'black' },
    { name: 'obama', age: '455', hair: 'no hair' },
    { name: 'kakashi', age: '1000+', hair: 'white' }
  ]
  return (
    <>
      {persons.map((p, index) =>
        <PersonCard key={index} person={p}></PersonCard>
      )}
    </>
  )
}

export default App
