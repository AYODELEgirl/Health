import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Cholera() {
  return (
    <div className='flex justify-center'>
    <div className='bg-[#E8FFDE] rounded-md mb-5 w-[95%] p-10'>
      <p className='font-bold text-[29px] mb-4'>Find a cholera vaccination center </p>
      <div className='flex flex-row gap-12'>
      <p className='text-[18px]' >Vaccination is a safe and effective way to prevent cholera, especially for those traveling to or living in
      areas with a high risk of infection.</p>
        <NavLink to = "/CholeraMain">
            <button className="bg-[#FF784B] text-white lg:p-2 p-1 lg:px-5 px-3 lg:text-[12px] text-[11px]  whitespace-nowrap rounded">
              Read More
            </button>
            </NavLink>
        
          </div>
    </div>
    </div>
  )
}
