/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

const ShowTodo = (props) => {

  const [finished, setFinished] = useState(false)
  
  const { todos, DeleteTodo } = props
  
  const handleFinshed = (e) => {
    setFinished(e.target.checked)
  }
  
  
  return (
    <div>
      {todos.length == 0 ? (
        <p> no Todos </p>
      ): <ul>
          {todos.map((t, index) => (
            <li key={index} className=' text-lg border-b w-100 rounded-lg p-1 flex justify-between' > <input type="checkbox" onClick={handleFinshed} /> {finished ? (<p style={{ textDecoration: 'line-through', color:'gray' }}> {t} </p>) : (<p > {t} </p>)} <button className='border bg-red-500 border-red-500 rounded-lg text-sm p-1 text-white'  onClick={()=> DeleteTodo(index)}>Delete Todo</button> </li>
        ))}
        </ul>}
    </div>
  )
}

export default ShowTodo
