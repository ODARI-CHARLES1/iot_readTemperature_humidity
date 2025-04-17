import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/visualise');
  }
  const handleClickHome=()=>{
    navigate('/');
  }
  const handleClickConnect=()=>{
    navigate('/connect');
  }
  return (
    <div className='w-full h-screen px-10  m-auto main-bg cursor-pointer'>
        <div className='w-full h-[8%] flex items-center justify-between  '>
          <h1 className='text-center text-[#1E90FF] text-4xl font-bold' onClick={handleClickHome}>IOT</h1>
          <button className='p-3 bg-green-700 text-white text-center rounded-full w-[150px] cursor-pointer hover:bg-green-600' onClick={handleClickConnect}>Connect</button>
        </div>
        <div className='w-full h-[80%] flex items-center justify-center flex-col gap-5'>
          <h1 className='text-6xl text-green-800 font-bold text-center animate-bounce duration-1000 '>Stay in Control of Every Degree & Drop</h1>
          <p className='text-1xl text-gray-500 font-semibold text-center'>Real-time Temperature and Humidity Monitoring Made Simple.</p>
          <button onClick={handleClick} className='p-3 bg-green-700 text-white text-center rounded-full w-[150px] cursor-pointer hover:bg-green-600'>Get Started</button>
        </div>
    </div>
  )
}

export default Header