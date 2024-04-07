import React from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

const Patient = () => {
  return (
    <div >
      <Navbar/>
     <div className='flex'>
     <Sidebar/>
     <div className='w-5/6 mt-16 p-6'>
       <input type="search" placeholder='Search doctor by name, specialization,city ' className='p-2 border-[1px] rounded-full w-[500px]'/>
     </div>'
     </div>
    </div>
  )
}

export default Patient
