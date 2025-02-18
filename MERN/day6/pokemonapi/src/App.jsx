import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async() => {
        const lstofpokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200')          
        setPokemons(lstofpokemons.data.results.slice(0, 151))
        
  }

  useEffect(() => {
    fetchPokemons()
  },[])

  

  return (
    <div className=' container mx-auto mt-20 min-h-dvh flex flex-col p-1 items-center bg-amber-100 rounded-2xl border gap-5'>
      <h1 className=' text-3xl font-extrabold text-blue-300'>Pokemon API</h1>
      <ul className=' list-decimal flex flex-col'>
        {pokemons.map((p, index) => 
          <li key={index} className=' list-item font-bold '> {p.name} </li>
        )}
      </ul>
    </div>
  )
}

export default App
