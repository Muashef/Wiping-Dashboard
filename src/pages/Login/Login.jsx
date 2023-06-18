import React, {useState} from 'react'
import Logo from '../../assets/svg/logo.svg';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Login() {
    const [open, setOpen] = useState(false)

    const toggle = () =>{
        setOpen(!open)
    }

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8 dark:bg-[#4F4F4F]">
    <div class="w-full max-w-md space-y-12">
    <div className='mt-10'>
      <img class="mx-auto h-12 w-auto" src={Logo} alt="Wiping-logo" />
      <p class="mt-10 text-center text-3xl tracking-tight text-[#212121] font-inter dark:text-[#BDBDBD]">Sign In</p>
    </div>
    <form class="mt-10 space-y-6 relative" action="#" method="POST">
      <input type="hidden" name="remember" value="true" /> 
      <div class="-space-y-px rounded-md shadow-sm">
        <div className='mb-6'>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-md p-4 text-gray-900 ring-1 ring-inset ring-[#407BFF]  focus:z-10 outline-none sm:text-sm sm:leading-6 border-[#407BFF]" placeholder="Email address" />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type={(open === false)? 'password' : 'text'} autocomplete="current-password" required class=" block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-[#407BFF] focus:z-10 outline-none sm:text-sm sm:leading-6" placeholder="Password" />
        </div>

        <div className='absolute text-[#808080] text-xl top-24 right-3'>
            {
                (open === false)? <AiFillEyeInvisible onClick={toggle}/>:<AiFillEye onClick={toggle}/>
            }
        </div>
      </div>
      <div>
        <Link to='/home'>
          <button type="submit" class="group relative flex w-full justify-center  rounded-md bg-[#407BFF] p-6 text-md font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            CONTINUE
          </button>
        </Link>
        <div class="flex items-center justify-center mt-3">
            <div class="flex items-center">
            <label for="remember-me" class="mr-1 block text-sm text-gray-900">Don't have an account</label>
            </div>

            <div class="text-sm">
            <a href="#" class="font-medium text-[#2F80ED] hover:text-indigo-500">Sign up</a>
            </div>
      </div>
      </div>
    </form>
  </div>
</div>
  )
}

export default Login