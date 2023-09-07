import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#1877F2] flex flex-col justify-center items-center'>
      <Link to={'/login'} className='bg-white p-3 text-[#1877F2] my-2 w-[177px] rounded font-semibold text-center text-xl'>Login</Link>
      <Link to={'/register'} className='bg-white p-3 text-[#1877F2] my-2 w-[177px] rounded font-semibold text-center text-xl'>Register</Link>
      <Link to={'/connect'} className='bg-white p-3 text-[#1877F2] my-2 w-[177px] rounded font-semibold text-center text-xl'>Connect Page</Link>
      <Link to={'/delete'} className='bg-white p-3 text-[#1877F2] my-2 w-[177px] rounded font-semibold text-center text-xl'>Delete</Link>
      <Link to={'/agent'} className='bg-white p-3 text-[#1877F2] my-2 w-[177px] rounded font-semibold text-center text-xl'>Agent</Link>
    </div>
  )
}

export default Home










