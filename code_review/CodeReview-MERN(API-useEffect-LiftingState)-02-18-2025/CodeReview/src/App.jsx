import { useEffect, useState } from "react"
import CharacterDetails from "./components/CharacterDetails"
import CharactersList from "./components/CharactersList"
import axios from "axios"
function App() {
  const [characters, setCharacters] = useState([])

  const [character, setCharacter] = useState(null)

  const fetchData = async () => {
    try {
      const chars = await axios.get('https://rickandmortyapi.com/api/character')
      setCharacters(chars.data.results)
      
    }
    catch (error) {
      console.log(error);
      
    }

  }
    useEffect(() => {
      fetchData()
    },[])
  
    return (
      <div className=" p-5 flex gap-5 items-center">
        <CharactersList characters={characters}    getChar={setCharacter} />
        <CharacterDetails character = {character} />
      </div>
      
    )
}
export default App
