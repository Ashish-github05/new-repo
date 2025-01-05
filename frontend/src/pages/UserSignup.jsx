import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
   
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4'>
            <input required value={firstName} onChange={(e) => {
            setFirstName(e.target.value);
          }} className='bg-white mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' type='text' placeholder='First name'> 
            </input>
            <input required value={lastName} onChange={(e) => {
            setLastName(e.target.value);
          }} className='bg-white mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' type='text' placeholder='Last name'>
            </input>           
          </div>

          <h3 className='text-lg font-medium mb-2'>Whats your email</h3>
          <input required value={email} onChange={(e) => {
            setEmail(e.target.value);
          }} className='bg-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='email' placeholder='Your email@example.com'> 
          </input>

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input required value={password} onChange={(e) => {
            setPassword(e.target.value);
          }} className='bg-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='password' placeholder='Your Password'>
          </input>

          <button className='bg-black text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-base'>login</button>
          <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight text-center' >By proceeding you are agree to our terms & conditions.</p>
      </div>
    </div>
  )
}

export default UserSignup