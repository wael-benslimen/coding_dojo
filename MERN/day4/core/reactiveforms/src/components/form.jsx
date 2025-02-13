import React from 'react'
import { useState } from 'react'
const Form = () => {
    const [Firstname, SetFirstname] = useState("")
    const [Lastname, SetLastname] = useState("")
    const [Email, SetEmail] = useState("")
    const [Password, SetPassword] = useState("")
    const [ConfPassword, SetConfPassword] = useState("")
    const [User, SetUser] = useState([])

    const FirstnameControl = (e) =>{
        SetFirstname(e.target.value)
    }
    const LastnameControl = (e) =>{
        SetLastname(e.target.value)
    }
    const EmailControl = (e) =>{
        SetEmail(e.target.value)
    }
    const PasswordControl = (e) =>{
        SetPassword(e.target.value)
    }
    const ConfPasswordControl = (e) =>{
        SetConfPassword(e.target.value)
    }

    const HandleSubmit = (e) =>{
        e.preventDefault();
        let userObject = {
            Firstname : Firstname,
            Lastname : Lastname,
            Email : Email,
            Password : Password
        }
        SetUser([...User, userObject])
        SetFirstname("")
        SetLastname("")
        SetEmail("")
        SetPassword("")
        SetConfPassword("")
        console.log('*************');
        console.log(User);
    }
  return (
    <div>
      <form className='card w-25 container d-flex flex-column gap-2 p-2 bg-light' onSubmit={HandleSubmit}>
            <label htmlFor="" className='form-lable'>Firstname</label>
            <input type="text" className=' form-control' value={Firstname} onChange={FirstnameControl} />
            {Firstname.length <= 2 && Firstname.length !== 0 && <p className='text-danger'>Firstname must be more than 2 letters</p> }
            <label htmlFor="" className='form-lable'>lastname</label>
            <input type="text" className=' form-control' value={Lastname} onChange={LastnameControl} />
            {Lastname.length <= 2 && Lastname.length !== 0 && <p className='text-danger'>Lastname must be more than 2 letters</p> }
            <label htmlFor="" className='form-lable'>email</label>
            <input type="text" className=' form-control' value={Email} onChange={EmailControl} />
            {Email.length < 8 && Email.length !== 0 && <p className='text-danger'>Email must be more than 8</p> }
            <label htmlFor="" className='form-lable'>password</label>
            <input type="text" className=' form-control' value={Password} onChange={PasswordControl} />
            {Password.length < 8 && Password.length !== 0 && <p className='text-danger'>Password must be more than 8 long</p> }
            <label htmlFor="" className='form-lable'>conf password</label>
            <input type="text" className=' form-control' value={ConfPassword} onChange={ConfPasswordControl} />
            {ConfPassword !== Password && Lastname.length !== 0 && <p className='text-danger'>password and confpassword must be the same</p> }
            <button className=' btn btn-success'>Create User</button>
        </form>
    </div>
  )
}

export default Form
