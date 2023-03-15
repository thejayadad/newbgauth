import React from 'react'
import "./login.css"
import {BiMessageAlt} from "react-icons/fc"
import logo from "../../images/logo.png"

const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">

        <div className="absolute flex flex-col justify-center items-center top-4 right-0 left-0 bottom-100 ">
          <div className="p-5">
            <img src={logo} width="250px" alt='logo' />
            <form className='flex flex-col justify-center items-center'>
                <input className='mb-1' placeholder='email' />
                <input className='mb-1' placeholder='email' />
                <input className='mb-1' placeholder='email' />
                <button>Login</button>
            </form>
          </div>
    </div>
    </div>
  )
}

export default Login