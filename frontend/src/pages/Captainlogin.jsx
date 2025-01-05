import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [setCaptainData, setsetCaptainData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password
      })
      //console.log(setCaptainData);
      setEmail('')
      setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={(e) => submitHandler(e)}>
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
          <p className='text-center'>Join as Fleet? <Link to='/captain-signup' className='text-blue-600'>Register as A Captain</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/login' className='bg-[orange] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin