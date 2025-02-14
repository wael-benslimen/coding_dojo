// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import ShowTodo from './ShowTodo'


const CreateTodo = () => {
    // eslint-disable-next-line no-unused-vars
    const [Todo, SetTodo] = useState('')

    const HandleNewTodo = (e) => {
        SetTodo(e.target.value)
        
    }

    const [Todos, setTodos] = useState([]) 

    const HandleSubmit = (e) => {
        e.preventDefault()
        setTodos([...Todos, Todo])   
        SetTodo('')
    }

    const DeleteTodo = (remitem) => {
        setTodos(Todos.filter((t,index) =>index !== remitem))
    }
  return (
    <div className=' container mx-auto flex flex-col items-center gap-10 p-15'>
          <form className=' flex flex-col w-100 mx-auto gap-5 bg-yellow-100 rounded-lg p-5' onSubmit={HandleSubmit}>
              <label className=' block mb-2 text-sm font-medium text-gray-500'>New Todo</label>
              <input className=' border border-gray-300 rounded-lg p-2' value={Todo} onChange={HandleNewTodo} />
              <button className=' bg-green-600 border border-green-600 rounded-lg w-50 mx-auto'>Add Todo</button>
          </form>
          <ShowTodo  todos={Todos} DeleteTodo = {DeleteTodo} />
    </div>
  )
}

export default CreateTodo
