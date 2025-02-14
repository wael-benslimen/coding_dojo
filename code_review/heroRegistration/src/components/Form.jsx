
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import UserInfo from './UserInfo'

const Form = () => {
  const [Name, SetName] = useState('')
  const [Email, SetEmail] = useState('')
  const [Password, SetPassword] = useState('')
  const [Favhero, SetFavehero] = useState('')
  const [Accept, SetAccept] = useState(false)
  const [User, SetUser] = useState(null)
  
  const HandleNamechange = (e) => {
    SetName(e.target.value)
  }

  const HandleEmailChange = (e) => {
    SetEmail(e.target.value)
  }

  const HandlePasswordChange = (e) => {
    SetPassword(e.target.value)
  }
  
  const HandleFavHeroChange = (e) => {
    SetFavehero(e.target.value)
  }
  const HandleAcceptChange = (e) => {
    
    SetAccept(e.target.checked)
  }

  const HandleAlert = (e) => {
    e.preventDefault();
    if (!Accept) {
      (alert('accept terms'))
      SetUser(null)
    }
    else {
      SetUser({ Name: Name, Email: Email, Password: Password, Favhero: Favhero })
      alert('start now')
    }
    
  }

  const Heros = ['superman', 'wonder women', 'batman', 'hello']

  return (
    <div className='container p-2 mt-5 card d-flex'>
      <form className=' card p-3 d-flex flex-column gap-2 border-0' onSubmit={HandleAlert} >
        <h3 className=' text-primary '>Welcome to the ultimate Registration Form</h3>
        <p>Unlock the full potatial of your skills by completing this form! ready ? lets go!</p>
        <label className='form-lable'>whats your name adventurer</label>
        <input type="text" value={Name} placeholder='Name' className=' form-control' onChange={HandleNamechange} />
        
        <label className='form-lable'>where can we send your tresure adventurer</label>
        <input type="text" placeholder='Email' className=' form-control' value={Email} onChange={HandleEmailChange} />
        
        <label className='form-lable'>choose your secret password</label>
        <input type="password" placeholder='password' className=' form-control' value={Password} onChange={HandlePasswordChange} />
        
        <div className="d-flex gap-3">
          <label className='form-lable'>select your fav here</label>
          
          <select className='form-select w-50' onChange={HandleFavHeroChange}>
            <option value="">--choose your hero--</option>

            {Heros.map((h, index) => (
              <option key = {index} value={h}> {h} </option>
            ) )}
          </select>
        </div>
        <div className=' d-flex gap-1 form-check-inline'>
          <input type="checkbox" onClick={HandleAcceptChange} />
          <label> I accept the terms and conditions </label>
        </div>
        <button type='submit' className='btn btn-success'> Ready to start your game! </button>
      </form>
      <UserInfo User = {User}/>
    </div>
  )
}

export default Form
