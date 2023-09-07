import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='w-full h-screen bg-[#1877F2] flex justify-center items-center'>
      <div className='w-1/2 md:w-1/4 bg-white text-black p-6 rounded-lg'>
        <h1 className='text-xl font-semibold my-2 text-center'>Create Account</h1>
        <div className='my-4'>
        <h2 className='font-semibold'>Name</h2>
        <input type="text" placeholder='User name...' className='p-3 border-2 border-gray-300 w-full outline-none rounded'/>
        </div>
        <div className='my-4'>
        <h2 className='font-semibold'>Email</h2>
        <input type="email" placeholder='Email Address...' className='p-3 border-2 border-gray-300 w-full outline-none rounded'/>
        </div>
        <div className='my-4'>
        <h2 className='font-semibold'>Password</h2>
        <input type="password" placeholder='Password...' className='p-3 border-2 border-gray-300 w-full outline-none rounded'/>
        </div>
        <div className='my-4'>
        <input type="checkbox" id='remember'/>
        <label htmlFor='remember' className='ml-2 font-semibold text-gray-400'>Remember Me</label>
        </div>
        <button className='w-full bg-[#1877F2] p-3 font-semibold text-white'>Sign Up</button>

        <p className='text-center mt-6 text-sm'>Already have an account? <Link to={'/login'} className='font-semibold text-[#1877F2]'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register
