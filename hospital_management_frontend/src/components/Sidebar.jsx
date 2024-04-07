import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex w-1/6 p-4 flex-col gap-2 mt-16 shadow-stone-800 h-screen border-r-[1px] items-center'>
      <div className='py-4 border-b-2'>
        <h1 className=' text-xl font-bold'>Sakshi Thakare</h1>
      </div>
     <ul className='list-style-none flex flex-col gap-3'>
     <li className='p-2'>Prescriptions</li>
      <li className='p-2'>Appointments</li>
      <li className='p-2'>test reports</li>
     </ul>
      
    </div>
  )
}

export default Sidebar
