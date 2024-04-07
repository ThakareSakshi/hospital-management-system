import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[url("https://www.popularhospital.in/images/second-slider.jpg")] bg-cover'>
     <form className='flex flex-col p-4 backdrop-blur-md gap-3 w-[400px] py-6 shadow-md'>
        <h1 className='text-center font-bold text-2xl py-3 text-blue-500'>Login</h1>
        <input type="email" placeholder='Email' className='w-full p-2 bg-transparent border-[1px] border-blue-400  hover:outline-blue-500 outline-none'/>
        <input type="password" placeholder='Password' className='w-full p-2 bg-transparent border-[1px] border-blue-400 outline-none hover:outline-blue-500 '/>
        <div className='text-right text-sm text-thin text-blue-500'>forgot password?</div>
        <button className='bg-blue-500 py-2 px-6 w-full text-white font-medium text-center'>
            Login
        </button>
        <div className='text-center text-sm text-thin '>Don't have Account ? <Link to="/register"><span className='text-blue-500'>Sign up</span></Link></div>

     </form>
    </div>
  )
}

export default Login
