import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between px-10 py-2 shadow fixed top-0 z-50 backdrop-blur-sm'>
<div className='flex items-center text-xl'>
<h1 className='text-blue-800 font-bold'>HMS</h1>
<img src='https://png.pngtree.com/png-vector/20230328/ourmid/pngtree-medical-logo-design-vector-png-image_6672378.png' className='h-16 w-16'/>

</div>
        <div>
            <button className='py-2 px-6 bg-blue-500 text-white rounded-md'>
                Sign In
            </button>
        </div>
      
    </div>
  )
}

export default Navbar
