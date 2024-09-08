import React from 'react'
import Zone1 from './Zone1'
import { useShallow } from "zustand/react/shallow";


function Navbar() {
  return (
    <div className='w-6/7 bg-yellow-500 h-full flex justify-between items-end p-4'>
      <a href="#" className='text-3xl font-bold'>Navbar</a>
      <nav className='flex  justify-center items-center gap-3'>
        <a href="#" className='btn btn-sm'>Home</a>
        <a href="#" className='btn btn-sm'>About</a>
        <a href="#" className='btn btn-sm'>Login</a>
     </nav>
    </div>
  )
}

export default Navbar