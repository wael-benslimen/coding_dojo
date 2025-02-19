import { useEffect, useState } from "react"
import axios from 'axios'
import DisplayData from "./components/DisplayData"
function App() {
  const [itemId, setItemId] = useState('1')
  const [genre, setGenre] = useState('people')
  const [info, setinfo] = useState(null)
  const handleIdChange = (e) => {
    setItemId(e.target.value)
  }
  const handleGenre = (e) => {
    setGenre(e.target.value)
  }
  const getinfo = async() => {
    try {
      const data = (await axios.get(`https://swapi.dev/api/${genre}/${itemId}`)).data
      console.log(data);
      setinfo(data)
      console.log('***************');
      console.log(info);
      
      
      
    } catch (error) {
      console.log('error', error);
      
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    getinfo()
  }

  return (
    <div className=" bg-blue-100 min-h-dvh p-5 container mx-auto">
      <form action="" className=" border bg-white border-white rounded-lg" onSubmit={handleSubmit}>
        <div className=" flex gap-5 items-center justify-center">
        <label className=" font-semibold">search for :</label>
          <select onChange={handleGenre} className=" border rounded-lg p-1 bg-gray-100 border-gray-100" >
            <option value="people">people</option>
            <option value="planets">planets</option>
            <option value="films">films</option>
            <option value="species">species</option>
            <option value="vehicles">vehicles</option>
            <option value="starships">starships</option>
          </select>
          <label className=" font-semibold" >id :</label>
          <input type="number" placeholder="id" className=" border bg-gray-100 border-gray-100 p-1 w-10 rounded-lg text-center" onChange={handleIdChange} value = {itemId} />
          <button className=" bg-blue-400 text-white p-2 rounded-lg w-20">search</button>
        </div>
      </form>
      <div>
        <DisplayData info={info} genre = {genre} />
      </div>
    </div>
  )
}

export default App
