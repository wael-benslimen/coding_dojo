/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const UserInfo = ({User}) => {
  console.log(User);
  
  return (
    <div className=''>
      {User == null? ( <div className=' border-1 border-danger text-bg-warning'>no info yet</div> ): (      <ul>
        <li> {User.Name} </li>
        <li> {User.Email} </li>
        <li> {User.Password} </li>
        <li> {User.Favhero} </li>
        </ul>)}
    </div>
  )
}

export default UserInfo
