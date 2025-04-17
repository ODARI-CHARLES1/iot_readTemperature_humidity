import React, { useState } from 'react'
import {MdArrowForward} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
const Connect = () => {
    const navigate=useNavigate();
    const [input,setInput]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
       if(input==="temphumidity"){
        navigate('/visualise')
       }
       else{
        navigate('/notfound');
       }
    }

  return (
    <div className='w-full main-bg h-screen flex items-center justify-center flex-col gap-8'>
        <form onSubmit={handleSubmit}className='flex items-center flex-col gap-8 justify-center'>
        <h1 className='text-green-800 text-2xl font-semibold'>Enter Projec Name.</h1>
        <input value={input} onChange={(e)=>{setInput(e.target.value)}} className=' px-4 text-[16px]  outline-0 text-green-800 rounded-full bg-green-100 p-3 w-[400px] ' type="text"/>
        <button className='bg-green-700 p-3 w-[200px]  text-white text-[18px] rounded-full flex items-center justify-evenly cursor-pointer' >Continue.<MdArrowForward size={20} color='white'/></button>
        </form>
    </div>
  )
}

export default Connect