import React from 'react'

const Intro = () => {
  return (
    <div>
      <div className='relative w-full h-[500px] flex  items-center'>
     
        <img src="https://www.shutterstock.com/image-photo/healthcare-people-group-professional-doctor-260nw-1213711042.jpg" className='w-full h-full absolute object-cover  top-0 z-[-1]'/>

        <div className='z-40 p-20'>
            <img src='https://png.pngtree.com/png-vector/20230328/ourmid/pngtree-medical-logo-design-vector-png-image_6672378.png' className='h-32 w-32'/>
            <h1 className='text-blue-600'>Welcome to Hospital management System</h1>
            <p className='text-4xl font-bold text-blue-800'>Connecting you to better Health.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro
