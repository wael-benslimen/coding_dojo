import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({page, pageSetter}) => {
    
  return (
      <div className=' bg-green-200 min-w-dvw flex items-center p-5 justify-between'>
          <ul className=' flex gap-5'>
              <li><Link to={'/'} onClick={()=>pageSetter('Book Catalog')} className=' bg-amber-200 p-1 rounded-lg border'>Book Catalog</Link></li>
              <li><Link to={'/create'} onClick={()=>pageSetter('Create Book')} className=' bg-blue-500 text-white rounded-lg p-1 border border-black'>Create Book</Link></li>
          </ul>
          <h1 className=' text-3xl text'> {page} </h1>
    </div>
  )
}

export default NavBar
