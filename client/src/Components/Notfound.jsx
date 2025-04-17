import React from 'react'
import { MdErrorOutline } from "react-icons/md";
const Notfound = () => {
  return (
    <div className='main-bg w-full h-screen flex flex-col items-center justify-center gap-8'>
        <p className='text-red-500 text-xl font-bold items-center flex '>OOOPS  <MdErrorOutline size={30} color='red'/></p>
        <h1 className='text-4xl text-green-800 font-bold '> <span className='text-red-500'>404</span> NOT FOUND</h1>
    </div>
  )
}

export default Notfound