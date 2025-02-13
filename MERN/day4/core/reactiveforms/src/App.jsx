import { useState } from 'react'
import Form from './components/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className='container bg-primary-subtle p-5 mt-5'>
      <h1 className='text-warning text-center'>Reactive Form</h1>
      <Form />
    </div>
    </div>
  )
}

export default App
